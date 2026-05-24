"use client"

import { PrimaryButton } from "./primary-button"
import Image from "next/image"
import { useQuizContext } from "./quiz-context"
import { VturbPlayer } from "./vturb-player"

interface ScreenVideosNegociosProps {
  onNext: () => void
}

export function ScreenVideosNegocios({ onNext }: ScreenVideosNegociosProps) {
  const { profileType } = useQuizContext()

  const getTitle = () => {
    switch (profileType) {
      case "shopee-tiktok":
        return <>Você Cria Vídeos Assim na <span className="text-[green]">Shopee</span> e Vende <span className="text-[green]">BEM Mais</span> Como Afiliado</>
      case "vender-servicos":
        return <>Você Cria Vídeos Assim Para <span className="text-[green]">QUALQUER Negócio</span> e Vende Por <span className="text-[green]">R$500+</span> Cada</>
      case "fechar-parcerias":
      default:
        return <>Você Cria Vídeos Assim Para  <span className="text-[green]">Suas Redes</span> e Atrái <span className="text-[green]">Parcerias Caras</span></>
    }
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-8 text-black max-w-[500px] px-4 leading-tight">
        {getTitle()}
      </h2>

      {/* Image 1 */}
      <div className="w-full relative mb-8 animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="/img/ku367IZ.jpeg"
          alt="Vídeos para negócios"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Image 2 */}
      <div className="w-full relative mb-8 animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="/img/NdVzUml.jpeg"
          alt="Exemplos de vídeos"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Video Player */}
      <VturbPlayer videoId="699111929256726183ccfd1d" className="w-full max-w-[400px] mb-8" />

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero muito aprender!!
      </PrimaryButton>
    </div>
  )
}
