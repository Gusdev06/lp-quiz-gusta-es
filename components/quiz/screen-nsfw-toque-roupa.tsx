"use client"

import { useState } from "react"
import Image from "next/image"
import { PrimaryButton } from "./primary-button"

interface ScreenNsfwToqueRoupaProps {
  onNext: () => void
}

export function ScreenNsfwToqueRoupa({ onNext }: ScreenNsfwToqueRoupaProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[28px] font-bold tracking-[-0.02em] mb-8 text-black leading-tight text-balance max-w-[500px]">
        Vamos a enseñarte a hacer <span className="text-[#00A13C]">exactamente esto</span>, pero úsalo con mucha responsabilidad... 😈
      </h1>

      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="relative w-full max-w-[400px] aspect-[3/5] mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100 group cursor-pointer"
        aria-label="Toca para quitar la ropa"
      >
        <Image
          src={revealed ? "/images/imagem_mudar_2.jpg" : "/images/imagem_mudar_1.jpg"}
          alt="Influencer IA"
          fill
          sizes="(max-width: 400px) 100vw, 400px"
          className="object-cover transition-opacity duration-500"
        />

        {!revealed && (
          <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
            <div className="bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-[15px] font-bold uppercase tracking-wide animate-pulse shadow-lg">
              👆 Toca para quitar la ropa
            </div>
          </div>
        )}
      </button>

      {revealed && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-[400px]">
          <PrimaryButton onClick={onNext} animated large>
            Continuar →
          </PrimaryButton>
        </div>
      )}
    </div>
  )
}
