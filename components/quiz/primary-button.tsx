"use client"

import React, { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  href?: string
  large?: boolean
  animated?: boolean
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function PrimaryButton({
  children,
  onClick,
  className,
  href,
  large = false,
  animated = false,
  disabled = false,
  type = "button"
}: PrimaryButtonProps) {
  const [finalHref, setFinalHref] = useState(href)

  useEffect(() => {
    if (href) {
      try {
        // Parse da URL do href
        const url = new URL(href)
        const hrefParams = new URLSearchParams(url.search)

        // Captura os parâmetros UTM da URL atual
        const currentUrlParams = new URLSearchParams(window.location.search)

        // Lista de parâmetros UTM
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

        // Mescla os parâmetros: parâmetros da URL atual têm prioridade
        utmKeys.forEach(key => {
          const currentValue = currentUrlParams.get(key)
          if (currentValue) {
            // Se existe na URL atual, sobrescreve o valor do href
            hrefParams.set(key, currentValue)
          }
          // Se não existe na URL atual, mantém o valor do href (se houver)
        })

        // Reconstrói a URL com os parâmetros mesclados
        url.search = hrefParams.toString()
        setFinalHref(url.toString())
      } catch (error) {
        // Se houver erro no parse da URL, usa o href original
        console.error('Erro ao processar URL:', error)
        setFinalHref(href)
      }
    }
  }, [href])

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2",
    "bg-[green] text-[white] font-semibold",
    "rounded-[14px] transition-all duration-300",
    "hover:scale-[1.02] active:scale-[0.98]",
    "shadow-[0_4px_20px_rgba(217,255,2,0.25)]",
    "hover:shadow-[0_4px_30px_rgba(217,255,2,0.4)]",
    large ? "py-[22px] px-10 text-base" : "py-[18px] px-8 text-[15px]",
    animated && "animate-pulse-glow",
    className
  )

  if (href) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, "w-full text-center")}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(baseStyles, "w-full")}>
      {children}
    </button>
  )
}
