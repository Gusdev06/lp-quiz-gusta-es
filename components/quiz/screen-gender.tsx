"use client"

import { useState } from "react"
import { trackEvent } from "@/lib/track-events"

interface ScreenGenderProps {
  onNext: () => void
}

const options = [
  { id: "homem", label: "Homem", emoji: "🧑", avatar: "https://cdn.xquiz.co/images/d7f4ab85-80de-4674-abc8-8e13370c2b86" },
  { id: "mulher", label: "Mulher", emoji: "👩", avatar: "https://cdn.xquiz.co/images/7f5e5b60-78d2-45e9-9fde-79f9cd13511c" },
  { id: "nao-informar", label: "Prefiro não informar", emoji: "🙊", avatar: "https://cdn.xquiz.co/images/9f291072-095d-4f18-a566-be2afb9328b2" },
]

export function ScreenGender({ onNext }: ScreenGenderProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (id: string, label: string) => {
    setSelected(id)

    trackEvent("question_answered", {
      question_number: 0,
      question_title: "Qual dessas opções descreve melhor você?",
      option_id: id,
      option_text: label,
      option_tag: "gender",
    })

    setTimeout(() => {
      onNext()
    }, 350)
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[26px] font-bold tracking-[-0.02em] mb-2 text-black leading-tight">
        Descubra Sua Melhor Estratégia com IA
      </h1>

      <p className="text-[14px] text-gray-600 mb-8 max-w-[380px]">
        Responda 4 perguntas rápidas para personalizar sua jornada
      </p>

      <h2 className="text-[16px] md:text-[18px] font-medium text-black mb-6">
        Qual dessas opções descreve melhor você?
      </h2>

      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id, opt.label)}
              disabled={selected !== null}
              className={`
                relative w-full rounded-xl bg-white border transition-all duration-300
                flex items-center gap-4 p-3 text-left
                ${isSelected
                  ? "border-[#00A13C] shadow-[0_4px_20px_rgba(0,161,60,0.25)] scale-[1.01]"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }
                ${selected && !isSelected ? "opacity-50" : ""}
                disabled:cursor-not-allowed
              `}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={opt.avatar}
                  alt={opt.label}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex items-center justify-center gap-2 pr-14">
                <span className="text-[20px]">{opt.emoji}</span>
                <span className="text-[15px] font-medium text-gray-800">
                  {opt.label}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
