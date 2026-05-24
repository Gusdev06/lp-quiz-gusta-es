"use client"

import Image from "next/image"
import { useState } from "react"
import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenNsfw2kDiaProps {
  onNext: () => void
}

export function ScreenNsfw2kDia({ onNext }: ScreenNsfw2kDiaProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-[20px] md:text-[26px] font-bold tracking-[-0.02em] mb-6 text-black leading-tight text-balance max-w-[500px]">
        Este video fue generado <span className="text-[#00A13C]">100% con inteligencia artificial</span> con una IA ilimitada, y solo este video <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">facturó más de US$ 2k</span> en un solo día.
      </h1>

      {revealed ? (
        <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg">
          <VturbPlayer videoId="6a1355cdd82ffcdf02236366" maxWidth={400} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="relative w-full max-w-[400px] mb-6 rounded-2xl overflow-hidden shadow-lg aspect-[9/16] bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex flex-col items-center justify-center gap-4 px-6 py-8 text-center cursor-pointer group"
          aria-label="Mostrar video sensible"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 70% 70%, rgba(217,255,2,0.12), transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white font-black text-xl shadow-lg">
            +18
          </div>
          <p className="relative font-heading text-white font-bold text-[16px] md:text-[18px] leading-tight max-w-[300px]">
            Contenido sensible
          </p>
          <p className="relative text-white/80 text-[13px] md:text-[14px] leading-snug max-w-[280px]">
            Este video contiene material para mayores de 18 años. ¿Deseas verlo?
          </p>
          <span className="relative mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#00A13C] group-hover:bg-[#008A33] transition-colors text-white font-bold text-[14px] md:text-[15px] shadow-lg">
            Sí, quiero ver
          </span>
        </button>
      )}

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
