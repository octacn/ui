import React from "react"
import Link, { LinkProps } from "next/link"

import { cn } from "@/lib/utils"

interface HoverAnimationProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  className?: string
  children: React.ReactNode
}

export default function HoverAnimation({
  className,
  children,
  ...props
}: HoverAnimationProps) {
  return (
    <Link
      {...props}
      className={cn(
        "transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </Link>
  )
}
