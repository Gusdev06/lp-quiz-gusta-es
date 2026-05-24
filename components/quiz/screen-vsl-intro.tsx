"use client"

import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenVslIntroProps {
  onNext: () => void
}

export function ScreenVslIntro({ onNext }: ScreenVslIntroProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[24px] md:text-[28px] font-bold tracking-[-0.02em] mb-6 text-black leading-tight text-balance">
        Descubra como Influenciadoras de IA estão faturando{" "}
        <span className="text-[#00A13C]">+R$ 150 mil por mês</span> na internet — sem aparecer, sem gravar e sem complicação.
      </h1>

      <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
        <VturbPlayer videoId="6a0c8e4b81efc38fe8cce83d" maxWidth={480} />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Quero aprender a fazer a minha →
      </PrimaryButton>
    </div>
  )
}
