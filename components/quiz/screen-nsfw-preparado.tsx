"use client"

import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenNsfwPreparadoProps {
  onNext: () => void
}

export function ScreenNsfwPreparado({ onNext }: ScreenNsfwPreparadoProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[30px] font-bold tracking-[-0.02em] mb-8 text-black leading-tight text-balance max-w-[500px]">
        ¿Estás preparado para aprender a hacer tus propios <span className="text-[#00A13C]">videos así</span>? 👀
      </h1>

      <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
        <VturbPlayer videoId="6a13533586174de2178861be" maxWidth={400} />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Continuar →
      </PrimaryButton>
    </div>
  )
}
