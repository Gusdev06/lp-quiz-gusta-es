"use client"

import Image from "next/image"
import { useState } from "react"
import { QuizTag } from "@/types/quiz"
import { trackEvent } from "@/lib/track-events"

interface Props {
  onSelect: (tag: QuizTag, optionId: string, label: string) => void
}

const options: {
  id: string
  tag: QuizTag
  image: string
  letter: string
  badge: string
  emoji: string
  title: string
  bullets: string[]
}[] = [
    {
      id: "tiktok-shop",
      tag: "shopee-tiktok",
      image: "https://cdn.xquiz.co/images/2bc08777-cee1-4b8e-897f-4dd41462d6da",
      letter: "A",
      badge: "TikTok Shop",
      emoji: "🛒",
      title: "Vender no TikTok Shop",
      bullets: [
        "Comissão por cada venda",
        "Reviews de produtos com IA",
        "Sem aparecer no vídeo",
        "Sem investir em estoque",
      ],
    },
    {
      id: "parcerias",
      tag: "fechar-parcerias",
      image: "https://cdn.geraew.com.br/storage/v1/object/public/ai-generations/generations/cmogg5n4s02ckru01moyvebxa/407a2a03-bca5-42fc-8791-266f4726c0f0/output_0.png",
      letter: "B",
      badge: "Parcerias",
      emoji: "🤝",
      title: "Parcerias com Marcas",
      bullets: [
        "Publis com grandes marcas",
        "Remuneração por views",
        "Marca própria, controle total",
      ],
    },
    {
      id: "anunciantes",
      tag: "vender-servicos",
      image: "https://cdn.xquiz.co/images/be747973-d63d-4260-a25b-a9d7c27953f5",
      letter: "C",
      badge: "Anunciantes",
      emoji: "🎙️",
      title: "Criativos Sem Aparecer",
      bullets: [
        "Conteúdo para criativos",
        "ROAS 4x Maior",
      ],
    },
  ]

export function ScreenCaminho({ onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const handle = (id: string, tag: QuizTag, title: string) => {
    setSelected(id)
    trackEvent("question_answered", {
      question_number: 1,
      question_title: "Qual caminho você quer seguir?",
      option_id: id,
      option_text: title,
      option_tag: tag,
    })
    setTimeout(() => onSelect(tag, id, title), 350)
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[26px] font-bold tracking-[-0.02em] mb-2 text-black leading-tight">
        Qual Caminho Você Quer Seguir?
      </h1>

      <p className="text-[14px] text-gray-600 mb-8 max-w-[380px]">
        Como você pretende monetizar suas influencers IA?
      </p>

      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <button
              key={opt.id}
              onClick={() => handle(opt.id, opt.tag, opt.title)}
              disabled={selected !== null}
              className={`
                relative w-full rounded-xl bg-white border transition-all duration-300 p-3 text-left flex items-center gap-3
                ${isSelected
                  ? "border-[#00A13C] shadow-[0_4px_20px_rgba(0,161,60,0.25)] scale-[1.01]"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }
                ${selected && !isSelected ? "opacity-50" : ""}
                disabled:cursor-not-allowed
              `}
            >
              {/* Image */}
              <div className="relative w-[88px] h-[110px] rounded-lg overflow-hidden shrink-0">
                <Image
                  src={opt.image}
                  alt={opt.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold text-black mb-1.5 leading-tight">
                  <span>OPÇÃO {opt.letter} ({opt.badge}):</span>{" "}
                  <span className="whitespace-nowrap">{opt.emoji} {opt.title}</span>
                </p>
                <ul className="space-y-0.5">
                  {opt.bullets.map((b) => (
                    <li key={b} className="text-[12.5px] text-gray-600 leading-snug">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
