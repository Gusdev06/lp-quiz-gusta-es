"use client"

import Image from "next/image"
import { PrimaryButton } from "./primary-button"

interface ScreenNsfwIntroProps {
  onNext: () => void
}

export function ScreenNsfwIntro({ onNext }: ScreenNsfwIntroProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[28px] font-bold tracking-[-0.02em] mb-4 text-black leading-tight text-balance max-w-[500px]">
        <span className="text-[#E53935]">Atención:</span> Contenido Estratégico Adulto
      </h1>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8 max-w-[440px] px-2">
        Elegiste la estrategia <b>más lucrativa</b> del mercado de influencers IA.
      </p>

      <div className="w-full max-w-[440px] mb-6 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
        <Image
          src="/images/image.png"
          alt="Contenido adulto estratégico"
          width={1200}
          height={700}
          sizes="(max-width: 440px) 100vw, 440px"
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="text-[15px] text-gray-700 leading-relaxed mb-8 max-w-[440px] px-2">
        <b>Influencer AI</b> es el <b>único entrenamiento</b> que enseña las IAs secretas para{" "}
        <span className="bg-[#FFF59D] px-1 rounded">crear contenido adulto profesional</span>{" "}
        y las estrategias exactas para monetizar en plataformas como <b>OnlyFans</b> y <b>FanVue</b>.
      </p>

      <div className="w-full max-w-[440px] mb-8 text-left px-2">
        <p className="text-[15px] font-bold text-black mb-3">
          ⚠️ En las próximas pantallas verás:
        </p>
        <ul className="space-y-2 text-[14px] text-gray-700">
          <li>🍌 Ejemplos reales de contenido +18 hechos con IA</li>
          <li>💰 Cómo esto genera <b>US$ 4k-10k/mes</b></li>
          <li>💡 El paso a paso completo de la estrategia</li>
        </ul>
        <p className="text-[15px] italic text-gray-800 mt-4">
          ¿Tienes +18 años y deseas continuar?
        </p>
      </div>

      <PrimaryButton onClick={onNext} animated large>
        ✅ Sí, quiero ver la estrategia completa
      </PrimaryButton>
    </div>
  )
}
