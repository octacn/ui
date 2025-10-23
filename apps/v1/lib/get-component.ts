import { cache } from "react"

async function fetchComponentData(name: string, src: string) {
  return {
    name,
    src,
  }
}

export const getComponentData = cache(fetchComponentData)
