"use client"

import { PrimaryButton } from "./primary-button"
import Image from "next/image"
import { useQuizContext } from "./quiz-context"
import { VturbPlayer } from "./vturb-player"

interface ScreenProvaResultadoProps {
  onNext: () => void
}

export function ScreenProvaResultado({ onNext }: ScreenProvaResultadoProps) {
  const { profileType } = useQuizContext()

  const getCopy = () => {
    switch (profileType) {
      case "shopee-tiktok":
        return {
          title: <><span className="text-[green]">R$834</span> em um único dia.</>,
          subtitle: "E eu não precisei aparecer.",
          description: "Minhas contas de TikTok e Shopee não param de apitar vendas desde que a Olivia entrou no ar.",
          footer: "Sem rosto na tela, sem depender do meu humor para gravar... apenas escala absurda em múltiplas contas.",
          imageSrc: "/images/shopee_fat.webp"
        }
      case "vender-servicos":
        return {
          title: <><span className="text-[green]">R$1.500</span> no primeiro contrato fechado.</>,
          subtitle: "Entregando apenas 5 vídeos.",
          description: "Uma clínica de estética fechou correndo para ter a imagem da Olivia no Instagram vendendo os procedimentos deles.",
          footer: "Meu ticket para esse serviço subiu. Custo zero de estúdio. Margem de lucro de quase 100%.",
          imageSrc: "/img/faYfBOI.jpeg"
        }
      case "fechar-parcerias":
      default:
        return {
          title: <><span className="text-[green]">U$653</span> por um único vídeo.</>,
          subtitle: "E eu não precisei aparecer.",
          description: "Uma marca gringa pagou isso por um vídeo de 10 segundos da Olivia. Eu a criei, mas o rosto é apenas dela.",
          footer: "Sem a câmera no meu rosto. Sem vergonha de aparecer para conhecidos. Só resultado absurdo.",
          imageSrc: "/img/faYfBOI.jpeg"
        }
    }
  }

  const copy = getCopy()

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00FF88]/15 mb-6">
        <span className="text-[11px] font-semibold text-[green] uppercase tracking-[0.1em]">
          DINHEIRO REAL
        </span>
      </div>

      {/* Title */}
      <h2 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-2 text-black">
        {copy.title}
      </h2>

      {/* Subtitle */}
      <p className="text-[#FF0000] font-bold text-base mb-6">
        {copy.subtitle}
      </p>

      {/* Image */}
      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src={copy.imageSrc}
          alt="Prova de resultado"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Video Player */}
      <VturbPlayer videoId="697f7b726300fb8f8ee0296a" className="w-full max-w-[400px] mb-8" />

      {/* Description */}
      <p className="text-[green] font-bold text-base leading-relaxed mb-6 max-w-[360px]">
        {copy.description}
      </p>

      {/* Divider */}
      <div className="w-[40%] h-px gradient-bg opacity-30 mb-6" />

      {/* Highlight text */}
      <p className="text-black font-semibold text-lg mb-8">
        {copy.footer}
      </p>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero ver mais...
      </PrimaryButton>
    </div>
  )
}
