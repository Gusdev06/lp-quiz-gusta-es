"use client"

import { PrimaryButton } from "./primary-button"

interface ScreenGameChangingProps {
  onNext: () => void
}

export function ScreenGameChanging({ onNext }: ScreenGameChangingProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[26px] font-bold tracking-[-0.02em] mb-4 text-black text-balance">
        <span className="text-[#FF0000]">Atenção:</span> Isso Aqui vai Ser Game Changing
      </h2>

      {/* Subtitle */}
      <p className="text-black text-[15px] leading-relaxed mb-6 max-w-[380px]">
        O <strong>Influencer AI</strong> é o <strong>único treinamento</strong> que ensina as iás secretas para criar criativos deeps fake e empoderamento.{" "}
        <strong>Que tal ter um especialista indicando seu produto?</strong>
      </p>

      {/* Video placeholder */}
      <div className="w-full rounded-2xl overflow-hidden mb-6 relative aspect-[9/16] bg-[#A23368] border-2 border-dashed border-[#7d2450] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-2xl">▶</span>
          </div>
          <span className="text-sm font-medium">Coloque o vídeo aqui</span>
        </div>
      </div>

      {/* Caption */}
      <p className="text-black text-[15px] leading-relaxed mb-8 max-w-[360px]">
        Se você sabe usar WhatsApp, consegue fazer isso. Zero conhecimento técnico necessário.
      </p>

      {/* CTA */}
      <PrimaryButton onClick={onNext}>
        Mostre Mais →
      </PrimaryButton>
    </div>
  )
}
