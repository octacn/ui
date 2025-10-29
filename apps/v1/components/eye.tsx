"use client"

import React, { useEffect } from "react"

const Eyes: React.FC = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll(".eye")

    const handleMouseMove = (e: MouseEvent) => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil") as HTMLElement
        if (!pupil) return

        const rect = eye.getBoundingClientRect()
        const eyeCenterX = rect.left + rect.width / 2
        const eyeCenterY = rect.top + rect.height / 2
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)
        const maxMove = 25

        const x = Math.cos(angle) * maxMove
        const y = Math.sin(angle) * maxMove

        pupil.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center gap-24">
      {/* {eye 1} */}
      <div className="eye relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden">
        <div className="pupil absolute w-10 h-10 rounded-full bg-gradient-to-b from-neutral-900 to-black transition-transform duration-75 ease-linear"></div>
        <div className="absolute top-2 left-4 w-8 h-8 bg-white/60 rounded-full blur-sm pointer-events-none"></div>
      </div>

      {/* Eye 2 */}
      <div className="eye relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden">
        <div className="pupil absolute w-10 h-10 rounded-full bg-gradient-to-b from-neutral-900 to-black transition-transform duration-75 ease-linear"></div>
        <div className="absolute top-2 left-4 w-8 h-8 bg-white/60 rounded-full blur-sm pointer-events-none"></div>
      </div>
    </div>
  )
}

export default Eyes
