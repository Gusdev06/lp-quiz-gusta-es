"use client"

import Image from "next/image"
import { PrimaryButton } from "./primary-button"

interface ScreenConsistenciaLunaProps {
  onNext: () => void
}

export function ScreenConsistenciaLuna({ onNext }: ScreenConsistenciaLunaProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[22px] md:text-[30px] font-bold tracking-[-0.02em] mb-6 text-black leading-tight text-balance max-w-[500px]">
        Puedes generar imágenes de tu influencer con <span className="text-[#00A13C]">cualquier ropa</span>, en <span className="text-[#00A13C]">cualquier escenario</span>, manteniendo siempre <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">100% de consistencia</span> en el rostro.
      </h1>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-6 max-w-[440px] px-2">
        Así como en el ejemplo de <b>Luna</b> 👇
      </p>

      <div className="w-full max-w-[440px] mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
        <Image
          src="/images/image4.png"
          alt="Ejemplo de consistencia de rostro - Luna"
          width={1200}
          height={1500}
          sizes="(max-width: 440px) 100vw, 440px"
          className="w-full h-auto object-cover"
        />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Quiero crear mi Influencer de IA →
      </PrimaryButton>
    </div>
  )
}
