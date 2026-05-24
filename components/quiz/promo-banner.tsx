"use client"

import { useEffect, useState } from "react"

const MONTHS_ES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

function formatPromoDates(): string {
  const today = new Date()
  const days = [-2, -1, 0].map((offset) => {
    const d = new Date(today)
    d.setDate(d.getDate() + offset)
    return d
  })

  const groups: { month: number; days: number[] }[] = []
  for (const d of days) {
    const last = groups[groups.length - 1]
    if (last && last.month === d.getMonth()) {
      last.days.push(d.getDate())
    } else {
      groups.push({ month: d.getMonth(), days: [d.getDate()] })
    }
  }

  return groups
    .map((g) => {
      const joinedDays =
        g.days.length === 1
          ? `${g.days[0]}`
          : g.days.length === 2
            ? `${g.days[0]} y ${g.days[1]}`
            : `${g.days[0]}, ${g.days[1]} y ${g.days[2]}`
      return `${joinedDays} de ${MONTHS_ES[g.month]}`
    })
    .join(" y ")
}

export function PromoBanner() {
  const [promoDates, setPromoDates] = useState("")

  useEffect(() => {
    setPromoDates(formatPromoDates())
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#E53935] text-white text-center px-4 py-3 shadow-lg">
      <p className="text-[13px] md:text-[14px] font-bold leading-tight">
        ⏰ Esta Oportunidad Exclusiva Estará Disponible Solo los Días {promoDates || "—"}.
      </p>
    </div>
  )
}
