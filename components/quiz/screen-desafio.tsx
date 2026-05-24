"use client"

import Image from "next/image"
import { useState } from "react"
import { useQuizContext } from "./quiz-context"

interface ScreenDesafioProps {
  onNext: () => void
}

export function ScreenDesafio({ onNext }: ScreenDesafioProps) {
  const [hoveredImage, setHoveredImage] = useState<"A" | "B" | null>(null)
  const { profileType } = useQuizContext()

  const handleSelect = () => {
    onNext()
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-3 text-black">
        Teste sua percepção
      </h2>

      {/* Subtitle dinâmico baseado no perfil */}
      {profileType === "shopee-tiktok" && (
        <p className="text-[black] text-base leading-relaxed mb-8 max-w-[360px]">
          Fazer dinheiro como afiliado exige testes criativos que não param de dar bloqueio. Uma destas influenciadoras nunca cansa, qual é ela?
        </p>
      )}

      {profileType === "vender-servicos" && (
        <p className="text-[black] text-base leading-relaxed mb-8 max-w-[360px]">
          Seus clientes da agência pagariam caro por uma modelo assim... mas uma delas custa R$ 0,00 para gerar. Qual é a Fake?
        </p>
      )}

      {(profileType === "fechar-parcerias" || profileType === "indefinido") && (
        <p className="text-[black] text-base leading-relaxed mb-8 max-w-[360px]">
          Uma dessas mulheres é real. A outra foi gerada 100% por inteligência artificial para que você não precise aparecer nos seus vídeos. Qual é a Fake?
        </p>
      )}

      {/* Challenge Card */}
      <div className="w-full glass rounded-[20px] p-6">
        {/* Images Grid */}
        <div className="flex gap-3 mb-6">
          {/* Image A */}
          <button
            onClick={handleSelect}
            onMouseEnter={() => setHoveredImage("A")}
            onMouseLeave={() => setHoveredImage(null)}
            className={`relative flex-1 aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${hoveredImage === "A" ? "scale-[1.03]" : ""
              }`}
          >
            <Image
              src="/img/RfNcqjL.jpeg"
              alt="Pessoa A"
              fill
              className="object-cover"
            />
            {/* Label */}
            <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0A0A0B] border border-white/40 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            {/* Hover border */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${hoveredImage === "A"
              ? "ring-2 ring-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              : "ring-1 ring-white/10"
              }`} />
          </button>

          {/* Image B */}
          <button
            onClick={handleSelect}
            onMouseEnter={() => setHoveredImage("B")}
            onMouseLeave={() => setHoveredImage(null)}
            className={`relative flex-1 aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${hoveredImage === "B" ? "scale-[1.03]" : ""
              }`}
          >
            <Image
              src="/img/7dknHb8.jpeg"
              alt="Pessoa B"
              fill
              className="object-cover"
            />
            {/* Label */}
            <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0A0A0B] border border-white/40 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">B</span>
            </div>
            {/* Hover border */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${hoveredImage === "B"
              ? "ring-2 ring-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              : "ring-1 ring-white/10"
              }`} />
          </button>
        </div>

        {/* Question */}
        <p className="text-black font-semibold text-lg mb-5">
          Qual é a real?
        </p>

        {/* Answer Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSelect}
            className="flex-1 py-4 px-6 rounded-xl bg-[green] text-[white] font-semibold text-[15px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(0,255,136,0.25)]"
          >
            A é real
          </button>
          <button
            onClick={handleSelect}
            className="flex-1 py-4 px-6 rounded-xl bg-[green] text-[white] font-semibold text-[15px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(0,255,136,0.25)]"
          >
            B é real
          </button>
        </div>
      </div>
    </div>
  )
}
