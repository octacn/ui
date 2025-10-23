import React from "react"

import { InteractiveBackground } from "@/registry/components/interactive-background"

export default function InteractiveBackgroundDemo() {
  return (
    <>
      <InteractiveBackground
        interactive
        className="absolute inset-0 rounded-lg"
      />
    </>
  )
}
