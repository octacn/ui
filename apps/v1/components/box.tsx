import React from "react"

import { cn } from "@/lib/utils"
import ExternalLink from "@/components/site-footer"
import { Separator } from "@/registry/ui/separator"

interface BoxProps {
  children: React.ReactNode
  className?: string
}

interface CodePreviewBoxProps extends BoxProps {
  link: string
  title: string
}

export function Box({ className, children }: BoxProps) {
  return <section className={cn("pt-6 md:pt-7", className)}>{children}</section>
}

export function BoxWrapper({ className, children }: BoxProps) {
  return (
    <section className={cn("pt-12 lg:pt-10 px-4 lg:px-10", className)}>
      {children}
    </section>
  )
}

export function CodePreviewBox({
  children,
  className,
  link,
  title,
}: CodePreviewBoxProps) {
  return (
    <section
      className={cn(
        "border border-dashed bg-surface rounded-lg hidden md:block overflow-hidden",
        className
      )}
    >
      <div className="px-4 py-3.5 flex items-center justify-between gap-x-8">
        <h4 className="font-inter font-medium truncate text-base text-muted-foreground capitalize tracking-wide">
          {title}
        </h4>
        <ExternalLink text="View Docs" href={link} />
      </div>

      <Separator />
      <div className="px-6 py-2">{children}</div>
    </section>
  )
}

export function LayoutBox({ children, className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative border border-dashed bg-surface rounded-lg px-4 py-8 overflow-hidden",
        "grid place-items-center content-center justify-items-center",
        className
      )}
    >
      {children}
    </div>
  )
}
