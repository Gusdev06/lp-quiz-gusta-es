"use client"

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar container */}
      <div className="h-[3px] bg-gray-200 relative">
        {/* Progress fill */}
        <div
          className="h-full gradient-bg transition-all duration-600 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Glow effect */}
          <div
            className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#00FF88]/50 to-transparent"
          />
        </div>

        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] gradient-bg blur-sm transition-all duration-600 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress indicator */}
      <div className="absolute top-3 right-4 text-xs font-mono text-gray-500">
        {current}/{total}
      </div>
    </div>
  )
}
