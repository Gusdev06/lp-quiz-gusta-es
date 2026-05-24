"use client"

import { useState } from "react"
import { trackEvent } from "@/lib/track-events"

interface Props {
  onNext: () => void
}

const options = [
  { id: "ja-vendo", label: "Já vendo online (infoprodutos, e-commerce)", emoji: "💰" },
  { id: "crio-nao-monetizo", label: "Crio conteúdo, mas não monetizo bem", emoji: "📱" },
  { id: "estagnado", label: "Tô tentando, mas patino na execução", emoji: "🤖" },
  { id: "zero", label: "Quero começar do zero, sem aparecer", emoji: "🌱" },
]

export function ScreenSituacao({ onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (id: string, label: string) => {
    setSelected(id)
    trackEvent("question_answered", {
      question_number: 0,
      question_title: "Onde você está agora?",
      option_id: id,
      option_text: label,
      option_tag: "situacao",
    })
    setTimeout(() => onNext(), 350)
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[26px] font-bold tracking-[-0.02em] mb-2 text-black leading-tight">
        Onde você está agora?
      </h1>

      <p className="text-[14px] text-gray-600 mb-8 max-w-[380px]">
        Qual sua situação atual com renda online?
      </p>

      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id, opt.label)}
              disabled={selected !== null}
              className={`
                relative w-full rounded-xl bg-white border transition-all duration-300 p-4 text-center
                ${isSelected
                  ? "border-[#00A13C] shadow-[0_4px_20px_rgba(0,161,60,0.25)] scale-[1.01]"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }
                ${selected && !isSelected ? "opacity-50" : ""}
                disabled:cursor-not-allowed
              `}
            >
              <span className="text-[15px] font-medium text-gray-800">
                {opt.emoji} {opt.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
