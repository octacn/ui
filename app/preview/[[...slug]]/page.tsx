import { cn } from "@/lib/utils"
import * as React from "react"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false
 

export default async function PreviewPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params

  return (
      <div className={cn("")}>
       Preview Page with slugs {slug}
      </div>
  )
}