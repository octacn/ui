"use client"

import { RoughNotation, RoughNotationProps } from "react-rough-notation"

import { cn } from "@/lib/utils"

interface HighlighterProps extends Omit<RoughNotationProps, "type"> {
  type?: RoughNotationProps["type"]
  className?: string
}

export default function Highlighter({
  className,
  children,
  type = "circle",
  ...props
}: HighlighterProps) {
  return (
    <span className={cn("ml-2", className)}>
      <RoughNotation type={type} {...props} show>
        {children}
      </RoughNotation>
    </span>
  )
}
