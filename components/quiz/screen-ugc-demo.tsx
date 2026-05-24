"use client"

import { PrimaryButton } from "./primary-button"
import Image from "next/image"
import { useQuizContext } from "./quiz-context"
import { VturbPlayer } from "./vturb-player"

interface ScreenUgcDemoProps {
  onNext: () => void
}

export function ScreenUgcDemo({ onNext }: ScreenUgcDemoProps) {
  const { profileType } = useQuizContext()

  const getTitle = () => {
    switch (profileType) {
      case "shopee-tiktok":
        return <>Você pode gerar reviews em massa para a <span className="text-[green]">Shopee / TikTok</span>👇</>
      case "vender-servicos":
        return <>Você pode vender vídeos UGC altamente magnéticos para <span className="text-[green]">seus clientes</span>👇</>
      case "fechar-parcerias":
      default:
        return <>Você pode gerar vídeos e imagens <span className="text-[green]">UGC</span> [com produtos reais]👇</>
    }
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-8 text-black max-w-[500px] px-4">
        {getTitle()}
      </h2>

      {/* Video Player */}
      <VturbPlayer videoId="6990bfa04be992fe7661b72e" className="w-full max-w-[400px] mb-8" />

      {/* Image */}
      <div className="w-full relative mb-8 animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="/img/7Mf0jHB.jpeg"
          alt="UGC exemplo"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Isso tá muito bom!!
      </PrimaryButton>
    </div>
  )
}
