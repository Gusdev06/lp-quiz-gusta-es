"use client"

import { trackEvent } from "@/lib/track-events"

interface Props {
  onContinue: () => void
  onSkip: () => void
}

export function ScreenGate({ onContinue, onSkip }: Props) {
  const handleContinue = () => {
    trackEvent("gate_continue", {})
    onContinue()
  }

  const handleSkip = () => {
    trackEvent("gate_skip", {})
    onSkip()
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-5xl mb-4">⚠️</div>

      <h1 className="font-heading text-[22px] md:text-[26px] font-bold tracking-[-0.02em] mb-3 text-black leading-tight">
        Atenção:
      </h1>

      <p className="text-[15px] text-gray-700 mb-2 max-w-[420px] leading-relaxed">
        Esse caminho exige um pouco mais de dedicação que os outros.
      </p>

      <p className="text-[14px] text-gray-600 mb-8 max-w-[420px]">
        A próxima etapa mostra exatamente como funciona — quer continuar?
      </p>

      <div className="w-full flex flex-col gap-3">
        <button
          onClick={handleContinue}
          className="w-full rounded-xl bg-black text-white font-bold py-4 text-[15px] hover:bg-[#00A13C] transition-all duration-300"
        >
          ✅ Sim, quero ver a estratégia
        </button>
        <button
          onClick={handleSkip}
          className="w-full rounded-xl bg-gray-100 text-gray-700 font-medium py-4 text-[14px] hover:bg-gray-200 transition-all duration-300"
        >
          ⏭️ Pular para o método geral
        </button>
      </div>
    </div>
  )
}
