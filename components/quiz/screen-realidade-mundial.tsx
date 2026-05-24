"use client"

import Image from "next/image"
import { PrimaryButton } from "./primary-button"

interface ScreenRealidadeMundialProps {
  onNext: () => void
}

const DEPOIMENTOS = [
  { src: "/images/depoimento1.png", alt: "Depoimento 1" },
  { src: "/images/depoimento2.png", alt: "Depoimento 2" },
]

export function ScreenRealidadeMundial({ onNext }: ScreenRealidadeMundialProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[30px] font-bold tracking-[-0.02em] mb-4 text-black leading-tight text-balance max-w-[500px]">
        💵 Esto Ya Es <span className="text-[#00A13C]">Realidad</span> En Todo El Mundo 💰
      </h1>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8 max-w-[440px] px-2">
        También puedes crear <b>Influencers de IA</b> para promocionar y viralizar tu marca o empresa, o monetizar en <b>TikTok Shop</b> y en la red de afiliados de cualquier nicho.
      </p>

      <div className="w-full max-w-[440px] flex flex-col gap-4 mb-8">
        {DEPOIMENTOS.map((img) => (
          <div
            key={img.src}
            className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={900}
              sizes="(max-width: 440px) 100vw, 440px"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Continuar →
      </PrimaryButton>
    </div>
  )
}
