"use client"

import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenAfiliadaIntroProps {
  onNext: () => void
}

export function ScreenAfiliadaIntro({ onNext }: ScreenAfiliadaIntroProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-4 text-black leading-tight text-balance max-w-[500px]">
        Esta mujer <span className="text-[#00A13C]">no existe</span>, la creé en menos de <b>2 minutos</b> y ya está <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">vendiendo por mí</span> como afiliada.
      </h1>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8 max-w-[420px] px-2">
        Es más fácil de lo que imaginas 👇
      </p>

      <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
        <VturbPlayer videoId="6a13439087b3af3be2d3bfdb" maxWidth={400} />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Quiero ver más →
      </PrimaryButton>
    </div>
  )
}
