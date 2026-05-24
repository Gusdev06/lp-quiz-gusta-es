"use client"

import Image from "next/image"
import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenNsfw2kDiaProps {
  onNext: () => void
}

export function ScreenNsfw2kDia({ onNext }: ScreenNsfw2kDiaProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[20px] md:text-[26px] font-bold tracking-[-0.02em] mb-6 text-black leading-tight text-balance max-w-[500px]">
        Este video fue generado <span className="text-[#00A13C]">100% con inteligencia artificial</span> con una IA ilimitada, y solo este video <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">facturó más de US$ 2k</span> en un solo día.
      </h1>

      <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg">
        <VturbPlayer videoId="6a1355cdd82ffcdf02236366" maxWidth={400} />
      </div>

      <div className="w-full max-w-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
        <Image
          src="/images/vendasfanvue.webp"
          alt="Ventas en Fanvue"
          width={1200}
          height={2400}
          sizes="(max-width: 400px) 100vw, 400px"
          className="w-full h-auto object-cover"
        />
      </div>

      <PrimaryButton onClick={onNext} animated large>
        Quiero aprender ahora →
      </PrimaryButton>
    </div>
  )
}
