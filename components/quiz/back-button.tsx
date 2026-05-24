"use client"

import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-12 left-4 z-40 p-2 rounded-full glass hover:bg-gray-100 transition-all duration-300 group"
      aria-label="Atrás"
    >
      <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
    </button>
  )
}
