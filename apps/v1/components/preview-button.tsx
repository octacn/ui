import Link from "next/link"
import { Fullscreen } from "lucide-react"

import { Button } from "@/registry/ui/button"

interface PreviewButtonProps {
  name: string
  src: string
  slug?: string
}

export function PreviewButton({ name, src, slug }: PreviewButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="size-6 rounded-sm p-0"
      asChild
      title="Open in New Tab"
    >
      <Link href={`${slug}?name=${name}&src=${src}`} target="_blank">
        <Fullscreen />
      </Link>
    </Button>
  )
}
