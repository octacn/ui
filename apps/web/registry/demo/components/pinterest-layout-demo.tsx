import React from "react"

import { PinterestLayout } from "@/registry/components/pinterest-layout"

export default function PinterestLayoutDemo() {
  const defaultImages = Array.from({ length: 15 }, (_, i) => {
    const isLandscape = i % 2 === 0
    const width = isLandscape ? 800 : 600
    const height = isLandscape ? 600 : 800
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`
  })
  return <PinterestLayout images={defaultImages} />
}
