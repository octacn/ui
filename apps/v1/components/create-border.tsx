import React, { CSSProperties } from "react"

import { cn } from "@/lib/utils"

type BorderOrientation = "horizontal" | "vertical"
type BorderPosition = "top" | "bottom" | "left" | "right"

export const createBorder = (
  orientation: BorderOrientation,
  position: BorderPosition,
  className?: string
): React.ReactElement => {
  const style: CSSProperties = {
    "--height": "5px",
    "--width": "1px",
    "--background": "#ffffff",
    "--color": "rgba(0, 0, 0, 0.2)",
    "--fade-stop": "90%",
    "--offset": "80px",
    "--color-dark": "rgba(255, 255, 255, 0.2)",
    WebkitMaskComposite: "exclude",
    maskComposite: "exclude",
  } as CSSProperties

  const horizontal =
    "left-[calc(var(--offset)/2*-1)] h-[var(--width)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--height)_var(--width)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
  const vertical =
    "top-[calc(var(--offset)/2*-1)] w-[var(--width)] h-[calc(100%+var(--offset))] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"

  const isHorizontal =
    orientation === "horizontal" || ["top", "bottom"].includes(position)
  const baseCss = isHorizontal ? horizontal : vertical

  const positionClass =
    position === "bottom"
      ? "bottom-0"
      : position === "top"
        ? "top-0"
        : position === "right"
          ? "right-px"
          : position === "left"
            ? "left-0"
            : ""

  return (
    <div
      className={cn("absolute ", baseCss, positionClass, className)}
      style={style}
    />
  )
}
