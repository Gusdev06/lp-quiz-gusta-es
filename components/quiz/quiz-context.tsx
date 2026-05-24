"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { QuizAnswer, LeadData, ProfileType, QuizTag } from "@/types/quiz"

interface QuizContextType {
    answers: QuizAnswer[]
    leadData: LeadData | null
    profileType: ProfileType
    setAnswer: (answer: QuizAnswer) => void
    setLeadData: (data: LeadData) => void
    calculateProfile: (directTag?: string) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
    const [answers, setAnswers] = useState<QuizAnswer[]>([])
    const [leadData, setLeadData] = useState<LeadData | null>(null)
    const [profileType, setProfileType] = useState<ProfileType>("indefinido")

    const setAnswer = (answer: QuizAnswer) => {
        setAnswers((prev) => {
            const filtered = prev.filter((a) => a.questionId !== answer.questionId)
            return [...filtered, answer]
        })
    }

    const calculateProfile = (directTag?: string) => {
        // Agora o perfil é 100% dependente unicamente do que a pessoa escolheu na Pergunta 1 (Filtro)
        if (directTag && directTag !== "neutro") {
            setProfileType(directTag as ProfileType)
            return
        }

        const filterQuestionAnswer = answers.find(a => a.questionId === 1)

        if (filterQuestionAnswer && filterQuestionAnswer.tag !== "neutro") {
            setProfileType(filterQuestionAnswer.tag as ProfileType)
        } else {
            setProfileType("indefinido")
        }
    }

    return (
        <QuizContext.Provider
            value={{
                answers,
                leadData,
                profileType,
                setAnswer,
                setLeadData,
                calculateProfile,
            }}
        >
            {children}
        </QuizContext.Provider>
    )
}

export function useQuizContext() {
    const context = useContext(QuizContext)
    if (context === undefined) {
        throw new Error("useQuizContext must be used within a QuizProvider")
    }
    return context
}
