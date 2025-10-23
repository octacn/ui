"use client"

import { useCallback, useEffect, useRef } from "react"

interface MagnifyGlassProps {
  children: React.ReactNode
  zoom?: number
  glassSize?: number
  width?: number
  height?: number
}

export default function MagnifyGlassButton({
  children,
  zoom = 1.5,
  glassSize = 150,
  width = 600,
  height = 350,
}: MagnifyGlassProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glassRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const getCursorPos = useCallback((e: MouseEvent, container: HTMLElement) => {
    const rect = container.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }, [])

  const moveGlass = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current
      const glass = glassRef.current
      const target = targetRef.current

      if (!container || !glass || !target) return

      const pos = getCursorPos(e, container)
      const { x, y } = pos

      // Position the magnifying glass
      glass.style.left = `${x}px`
      glass.style.top = `${y}px`

      // Find the image element
      const targetEl = target.querySelector("img") as HTMLImageElement

      if (targetEl && targetEl.complete && targetEl.naturalWidth > 0) {
        const rect = targetEl.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        // Calculate relative position within the image
        const relativeX = x - (rect.left - containerRect.left)
        const relativeY = y - (rect.top - containerRect.top)

        glass.style.backgroundImage = `url("${targetEl.src}")`
        glass.style.backgroundSize = `${rect.width * zoom}px ${
          rect.height * zoom
        }px`
        glass.style.backgroundPosition = `-${
          relativeX * zoom - glassSize / 2
        }px -${relativeY * zoom - glassSize / 2}px`
      }
    },
    [zoom, glassSize, getCursorPos]
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", moveGlass)

    return () => {
      container.removeEventListener("mousemove", moveGlass)
    }
  }, [moveGlass])

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className="relative overflow-hidden rounded-lg border border-gray-300 shadow-xl cursor-crosshair group"
    >
      <div
        ref={targetRef}
        className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
      >
        {children}
      </div>
      <div
        ref={glassRef}
        style={{
          width: glassSize,
          height: glassSize,
          backgroundRepeat: "no-repeat",
        }}
        className="absolute pointer-events-none rounded-full border-4 border-white opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 shadow-2xl backdrop-blur-sm bg-transparent"
      />
    </div>
  )
}
