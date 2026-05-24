"use client"

import { useEffect, useRef, useState } from "react"

interface VturbPlayerProps {
  videoId: string
  className?: string
  maxWidth?: number
}

const loadedScripts = new Set<string>()

export function VturbPlayer({ videoId, className, maxWidth = 400 }: VturbPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    const scriptUrl = `https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/${videoId}/v4/player.js`

    if (loadedScripts.has(scriptUrl)) return

    const script = document.createElement("script")
    script.src = scriptUrl
    script.async = true
    document.head.appendChild(script)
    loadedScripts.add(scriptUrl)
  }, [shouldLoad, videoId])

  return (
    <div ref={containerRef} className={className} style={{ minHeight: shouldLoad ? undefined : 200 }}>
      {shouldLoad && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-${videoId}" style="display:block;margin:0 auto;width:100%;max-width:${maxWidth}px;"></vturb-smartplayer>`,
          }}
        />
      )}
    </div>
  )
}
