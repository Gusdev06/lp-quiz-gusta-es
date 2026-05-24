"use client"

import { useEffect, useState } from "react"

/**
 * Big, attention-grabbing "vagas restantes" counter.
 *
 * - Non-linear decay (burns faster evenings 18-23h)
 * - Persists via localStorage (same user sees same number on refresh)
 * - Resets at midnight
 * - Never goes below MIN (keeps urgency without zero)
 */

const START = 50
const MIN = 7
const STORAGE_KEY = "dzd_vagas_state"

type State = { date: string; value: number; lastUpdate: number }

// Simula pico noturno (18h-23h pesa mais)
const HOURLY_WEIGHTS = [
  0.005, 0.003, 0.002, 0.002, 0.003, 0.005, // 00-05
  0.010, 0.020, 0.030, 0.040, 0.045, 0.050, // 06-11
  0.055, 0.060, 0.055, 0.050, 0.055, 0.065, // 12-17
  0.090, 0.110, 0.100, 0.080, 0.050, 0.020, // 18-23
]

function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

function computeExpected(): number {
  const d = new Date()
  const hour = d.getHours()
  const minute = d.getMinutes()
  let cumulativeWeight = 0
  for (let h = 0; h < hour; h++) cumulativeWeight += HOURLY_WEIGHTS[h]
  cumulativeWeight += HOURLY_WEIGHTS[hour] * (minute / 60)
  const totalBurn = START - MIN
  const expectedValue = Math.round(START - totalBurn * cumulativeWeight)
  return Math.max(MIN, Math.min(START, expectedValue))
}

export function VagasCounter() {
  const [vagas, setVagas] = useState<number>(START)
  const [ready, setReady] = useState(false)
  const [justDecremented, setJustDecremented] = useState(false)

  useEffect(() => {
    const key = todayKey()

    let state: State | null = null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) state = JSON.parse(raw)
    } catch {}

    if (!state || state.date !== key) {
      state = { date: key, value: START, lastUpdate: Date.now() }
    }

    const expected = computeExpected()
    const current = Math.min(state.value, expected)
    setVagas(current)
    setReady(true)

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: key, value: current, lastUpdate: Date.now() })
    )

    const interval = setInterval(() => {
      setVagas((prev) => {
        const expected = computeExpected()
        if (Math.random() < 0.3 && prev > expected && prev > MIN) {
          const next = prev - 1
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ date: key, value: next, lastUpdate: Date.now() })
          )
          setJustDecremented(true)
          setTimeout(() => setJustDecremented(false), 1000)
          return next
        }
        return prev
      })
    }, 60000 + Math.random() * 30000)

    return () => clearInterval(interval)
  }, [])

  if (!ready) return null

  const isLow = vagas <= 20
  const isCritical = vagas <= 10

  // Colors based on urgency level
  const gradientFrom = isCritical ? "#FF0033" : isLow ? "#FF6B00" : "#00A13C"
  const gradientTo = isCritical ? "#CC0022" : isLow ? "#E65100" : "#008A33"
  const glowColor = isCritical ? "255,0,51" : isLow ? "255,107,0" : "0,161,60"

  return (
    <div
      className={`
        relative w-full rounded-2xl overflow-hidden
        shadow-[0_10px_40px_rgba(${glowColor},0.35)]
        ${isCritical ? "animate-pulse-strong" : ""}
      `}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      {/* Moving shine effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
          backgroundSize: "200% 100%",
          animation: "shine 3s infinite",
        }}
      />

      {/* Content */}
      <div className="relative px-5 py-4 flex items-center gap-4">
        {/* Flame icon big */}
        <div
          className={`shrink-0 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl ${
            isCritical ? "animate-bounce-slow" : ""
          }`}
        >
          🔥
        </div>

        {/* Text block */}
        <div className="flex-1 text-left">
          <p className="text-white/90 text-[11px] font-bold uppercase tracking-wider leading-none mb-1">
            {isCritical ? "⚠️ ÚLTIMOS CUPOS" : isLow ? "Cupos Limitados" : "Oferta de Lanzamiento"}
          </p>
          <p className="text-white font-black text-[18px] md:text-[20px] leading-tight">
            Quedan{" "}
            <span
              className={`
                inline-block font-black text-[32px] md:text-[36px] align-middle mx-0.5 tabular-nums
                ${justDecremented ? "animate-number-change" : ""}
              `}
            >
              {vagas}
            </span>{" "}
            cupos
          </p>
          <p className="text-white/80 text-[12px] font-medium leading-tight mt-0.5">
            con descuento de lanzamiento HOY
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pulse-strong {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(${glowColor}, 0.35);
          }
          50% {
            box-shadow: 0 10px 60px rgba(${glowColor}, 0.7);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes number-change {
          0% { transform: scale(1); color: #ffffff; }
          40% { transform: scale(1.4); color: #FFEB3B; }
          100% { transform: scale(1); color: #ffffff; }
        }
        .animate-pulse-strong {
          animation: pulse-strong 1.5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }
        .animate-number-change {
          animation: number-change 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
