"use client"

import { useState } from "react"
import Image from "next/image"
import { QuizQuestion, QuizOption } from "@/types/quiz"
import { CheckCircle2 } from "lucide-react"
import { trackEvent } from "@/lib/track-events"

interface ScreenQuestionProps {
  question: QuizQuestion
  currentQuestion: number
  totalQuestions: number
  onAnswer: (option: QuizOption) => void
}

export function ScreenQuestion({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer
}: ScreenQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelect = (option: QuizOption) => {
    setSelectedOption(option.id)

    trackEvent('question_answered', {
      question_number: currentQuestion,
      question_title: question.title,
      option_id: option.id,
      option_text: option.text,
      option_tag: option.tag || 'neutro'
    })

    setTimeout(() => {
      onAnswer(option)
      setSelectedOption(null)
    }, 400)
  }

  const isCardLayout = question.options.some((o) => o.image)

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Question Counter */}
      <div className="mb-6">
        <span className="text-gray-500 text-sm font-medium">
          Pregunta {currentQuestion} de {totalQuestions}
        </span>
      </div>

      {/* Question Title */}
      <h2 className="font-heading text-[24px] md:text-[28px] font-bold tracking-[-0.02em] mb-2 text-black leading-tight max-w-[420px]">
        {question.title}
      </h2>

      {question.subtitle && (
        <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-[420px] px-2">
          {question.subtitle}
        </p>
      )}

      {!question.subtitle && <div className="mb-6" />}

      {/* Options */}
      <div className="w-full flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id

          if (isCardLayout) {
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                disabled={selectedOption !== null}
                className={`
                  relative w-full p-4 rounded-2xl text-left
                  transition-all duration-300
                  ${isSelected
                    ? "bg-white border-2 border-[#00A13C] scale-[1.02] shadow-[0_4px_30px_rgba(0,161,60,0.25)]"
                    : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:scale-[1.01]"
                  }
                  ${selectedOption && !isSelected ? "opacity-50" : ""}
                  disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-center gap-4">
                  {option.image && (
                    <div className="relative shrink-0 w-20 h-24 rounded-xl overflow-hidden bg-gray-200">
                      <Image
                        src={option.image}
                        alt={option.text}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    {option.badge && (
                      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">
                        {option.badge}
                      </div>
                    )}
                    <div className="text-[15px] font-bold text-black leading-tight mb-2">
                      {option.text}
                    </div>
                    {option.bullets && option.bullets.length > 0 && (
                      <ul className="text-[12px] text-gray-600 leading-snug space-y-0.5">
                        {option.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#00A13C] shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </button>
            )
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              disabled={selectedOption !== null}
              className={`
                relative w-full p-5 rounded-xl text-left
                transition-all duration-300
                ${isSelected
                  ? "gradient-bg scale-[1.02] shadow-[0_4px_30px_rgba(0,255,136,0.4)]"
                  : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:scale-[1.01]"
                }
                ${selectedOption && !isSelected ? "opacity-50" : ""}
                disabled:cursor-not-allowed
              `}
            >
              <div className="flex items-center gap-4">
                {/* Checkbox/Check */}
                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-full border-2
                  flex items-center justify-center transition-all duration-300
                  ${isSelected
                    ? "border-[#0A0A0B] bg-[#0A0A0B]"
                    : "border-gray-300"
                  }
                `}>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-[#00FF88]" />
                  )}
                </div>

                {/* Option Text */}
                <span className={`
                  text-[15px] leading-relaxed font-medium
                  ${isSelected ? "text-[#0A0A0B]" : "text-gray-700"}
                `}>
                  {option.text}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
