"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenEntradaProps {
  onNext: () => void
}

const CAROUSEL_IMAGES = [
  { src: "/images/image1.webp", alt: "Influencer de IA 1" },
  { src: "/images/image2.webp", alt: "Influencer de IA 2" },
  { src: "/images/image3.webp", alt: "Influencer de IA 3" },

]

export function ScreenEntrada({ onNext }: ScreenEntradaProps) {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  // Click em botão/dot: faz scrollTo e atualiza index
  const goTo = (i: number) => {
    const next = (i + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
    const el = trackRef.current
    if (el) {
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" })
    }
    setIndex(next)
  }

  // Listener só atualiza o index quando o usuário arrasta (não dispara scrollTo de volta)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handler = () => {
      const w = el.clientWidth
      if (w === 0) return
      const i = Math.round(el.scrollLeft / w)
      setIndex((prev) => (prev !== i ? i : prev))
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Logo */}
      <div className="mb-8">
        <span className="text-gray-500 font-medium text-sm">@gustagoat.ia</span>
      </div>

      {/* Main Title */}
      <h1 className="font-heading text-[24px] md:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] mb-4 text-balance max-w-[600px] px-2 text-black">
        CREA YA TU <span className="text-[#00A13C]">INFLUENCER DE IA</span> QUE TRABAJA POR TI 24H Y <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">VENDE TODOS LOS DÍAS</span>, SIN QUE TENGAS QUE APARECER.
      </h1>

      <p className="text-[15px] text-gray-700 leading-relaxed mb-6 max-w-[420px] px-2">
        Así nunca hayas usado IA, hoy ya es posible crear contenido todos los días <b>sin aparecer</b> y <b>sin saber editar</b> 👇
      </p>

      {/* Carousel */}
      <div className="relative w-full max-w-[400px] mb-6">
        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {CAROUSEL_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className="relative shrink-0 w-full snap-center aspect-[2/3] bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 400px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Atrás"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la imagen ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#00A13C]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[420px] mb-6 px-2">
        <p className="text-[15px] text-gray-700 leading-relaxed">
          Mientras lees esto, hay gente <b>ganando plata con influencers de IA</b>. La diferencia es que ellas ya arrancaron.
        </p>
      </div>

      {/* Primary Button */}
      <PrimaryButton onClick={onNext}>
        Quiero ver cómo funciona
      </PrimaryButton>
    </div>
  )
}
