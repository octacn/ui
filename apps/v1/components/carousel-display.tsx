import React from "react"
import { imageCarouselSchema } from "@/schema/image-schema"

import { ImageCarouselItem } from "@/lib/image-item"
import { CarouselViewer } from "@/components/carousel-viewer"

export async function CarouselDisplay({ name }: { name: string }) {
  const item = await getCachedCarouselItem(name)

  if (!item) {
    return (
      <div className="text-muted-foreground px-4 py-2 rounded-2xl text-sm font-inter border bg-surface w-fit my-2 mx-auto">
        No item found {`"${name}"`} in Image Carousel Item.
      </div>
    )
  }

  return <CarouselViewer item={item} />
}

const getCachedCarouselItem = React.cache(async (name: string) => {
  return await getCarouselItem(name)
})

async function getCarouselItem(name: string) {
  const item = ImageCarouselItem[name]

  if (!item) {
    return null
  }

  const result = imageCarouselSchema.safeParse(item)
  if (!result.success) {
    return null
  }

  const parsed = imageCarouselSchema.safeParse({
    ...result.data,
  })

  if (!parsed.success) {
    console.error(parsed.error.message)
    return null
  }

  return parsed.data
}
