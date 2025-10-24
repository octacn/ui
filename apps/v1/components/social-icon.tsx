import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/ui/button"
import { Skeleton } from "@/registry/ui/skeleton"

export function GitHubLink() {
  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className="h-8 shadow-none hover:cursor-default"
    >
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  )
}

export function DiscordLink() {
  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className="h-8 shadow-none -ml-2 hover:cursor-default"
    >
      <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
        <Icons.discord />
      </Link>
    </Button>
  )
}

export async function StarsCount() {
  const res = await fetch("https://api.github.com/repos/octacn/ui", {
    next: { revalidate: 86400 },
  })
  const json = await res.json()

  return (
    <span className="text-muted-foreground text-sm font-inter mt-0.5">
      {json.stargazers_count >= 1000
        ? `${(json.stargazers_count / 1000).toFixed(1)}k`
        : json.stargazers_count.toLocaleString()}
    </span>
  )
}
