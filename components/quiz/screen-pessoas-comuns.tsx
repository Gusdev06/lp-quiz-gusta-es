"use client"

import { PrimaryButton } from "./primary-button"

interface ScreenPessoasComunsProps {
  onNext: () => void
}

export function ScreenPessoasComuns({ onNext }: ScreenPessoasComunsProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[26px] font-bold tracking-[-0.02em] mb-6 text-black text-balance">
        Faça pessoas comuns falarem e demonstrarem os seus produtos
      </h2>

      {/* Video placeholder */}
      <div className="w-full rounded-2xl overflow-hidden mb-6 relative aspect-[9/16] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl">▶</span>
          </div>
          <span className="text-sm font-medium">Coloque o vídeo aqui</span>
        </div>
      </div>

      {/* CTA */}
      <PrimaryButton onClick={onNext}>
        Ver o método completo
      </PrimaryButton>
    </div>
  )
}
