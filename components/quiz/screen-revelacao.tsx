"use client"

import Image from "next/image"
import { Brain } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import { useEffect, useState } from "react"
import { useQuizContext } from "./quiz-context"

interface ScreenRevelacaoProps {
  onNext: () => void
}

export function ScreenRevelacao({ onNext }: ScreenRevelacaoProps) {
  const [showOverlay, setShowOverlay] = useState(false)
  const { profileType } = useQuizContext()

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Images with reveal */}
      <div className="flex gap-3 w-full mb-8">
        {/* Image A */}
        <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src="/img/RfNcqjL.jpeg"
            alt="IA A"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-[#FF4466]/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-500 ${showOverlay ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="text-white text-3xl font-bold font-heading tracking-wider">IA</span>
          </div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF4466]/30" />
        </div>

        {/* Image B */}
        <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src="/img/7dknHb8.jpeg"
            alt="IA B"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-[#FF4466]/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-500 delay-200 ${showOverlay ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="text-white text-3xl font-bold font-heading tracking-wider">IA</span>
          </div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF4466]/30" />
        </div>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-full gradient-border flex items-center justify-center mb-6 animate-pulse">
        <Brain className="w-7 h-7 text-[#00FF88]" />
      </div>

      {/* Title */}
      <h2 className="font-heading text-[32px] md:text-[36px] font-bold tracking-[-0.02em] mb-3 text-black">
        Resposta: <span className="text-[#FF0000]">as duas são IA.</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-700 font-medium text-[15px] leading-relaxed mb-8 max-w-[380px]">
        Nenhuma das duas existe. Foram criadas do zero — com rosto, cabelo, roupa e cenário escolhidos por <b>uma pessoa comum, em menos de 10 minutos</b>.
      </p>

      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="/img/n9Gh4Yu.jpeg"
          alt="Luis"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Highlight Block Dinâmico */}
      <div className="w-full bg-[#00FF88]/10 border-l-[3px] border-[#00FF88] rounded-lg p-4 mb-8 text-left">
        {profileType === "shopee-tiktok" && (
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium">Uma delas é a Camila.</span> Ela tem 3 dias de vida e já fez suas primeiras {" "}
            <span className="text-[#00B360] font-semibold">10 vendas como afiliada na Shopee</span> sem nunca levar um bloqueio de conta.
          </p>
        )}
        {profileType === "vender-servicos" && (
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium">Uma delas é a Camila.</span> Uma agência tradicional cobraria R$ 3.000 mensais por ela, mas você pode gerar {" "}
            <span className="text-[#00B360] font-semibold">dezenas de IAs hiper-realistas</span> e empacotar esse serviço para donos de negócios locais.
          </p>
        )}
        {(profileType === "fechar-parcerias" || profileType === "indefinido") && (
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium">Uma delas é a Camila.</span> Ela tem 3 dias de vida. Mesmo assim, já faturou seus primeiros {" "}
            <span className="text-[#00B360] font-semibold">$200 em parcerias.</span> Imagina em 3 meses.
          </p>
        )}
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero ver como criar a minha
      </PrimaryButton>
    </div>
  )
}
