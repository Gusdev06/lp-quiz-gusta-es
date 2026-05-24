"use client"

import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenNsfwIaSemCensuraProps {
  onNext: () => void
}

export function ScreenNsfwIaSemCensura({ onNext }: ScreenNsfwIaSemCensuraProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[30px] font-bold tracking-[-0.02em] mb-4 text-black leading-tight text-balance max-w-[500px]">
        Vas a tener acceso a una <span className="text-[#00A13C]">IA que genera contenido adulto</span> <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">100% sin censura</span>
      </h1>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8 max-w-[440px] px-2">
        Puedes generar videos como estos con <b>cualquier imagen</b> 👇
      </p>

      <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
        <VturbPlayer videoId="6a1350d804811222675d43c3" maxWidth={400} />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        ¿Cómo es posible? →
      </PrimaryButton>
    </div>
  )
}
