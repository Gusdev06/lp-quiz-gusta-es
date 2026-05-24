"use client"

import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenNsfwQualquerVideoProps {
  onNext: () => void
}

export function ScreenNsfwQualquerVideo({ onNext }: ScreenNsfwQualquerVideoProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[28px] font-bold tracking-[-0.02em] mb-4 text-black leading-tight text-balance max-w-[500px]">
        Puedes poner tu influencer en <span className="text-[#00A13C]">CUALQUIER video</span> que ya existe… con solo <b>2 clics</b> y <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">totalmente gratis</span> 👇😱
      </h1>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8 max-w-[440px] px-2">
        100% generado con <b>inteligencia artificial</b> ⭐⭐⭐⭐⭐
      </p>

      <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
        <VturbPlayer videoId="6a135237471c1a7f84facf64" maxWidth={400} />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Quiero ver más →
      </PrimaryButton>
    </div>
  )
}
