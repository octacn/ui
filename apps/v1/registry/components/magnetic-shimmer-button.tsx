"use client";

import React, { CSSProperties, ComponentPropsWithoutRef, useRef } from "react";
import { cn } from "@/lib/utils";

export interface MagneticShimmerButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  strength?: number;
  className?: string;
  children?: React.ReactNode;
}

export const MagneticShimmerButton = React.forwardRef<
  HTMLButtonElement,
  MagneticShimmerButtonProps
>(
  (
    {
      shimmerColor = "oklch(75% 0.183 55.934)",
      shimmerSize = "0.2em",
      shimmerDuration = "4s",
      borderRadius = "100px",
      strength = 5,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = btnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    };

    const handleMouseLeave = () => {
      const btn = btnRef.current;
      if (!btn) return;

      btn.style.transform = "translate(0,0)";
    };

    return (
      <button
        className="px-4 py-3 cursor-pointer"
        ref={(node) => {
          btnRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          style={
            {
              "--spread": "90deg",
              "--shimmer-color": shimmerColor,
              "--radius": borderRadius,
              "--speed": shimmerDuration,
              "--cut": shimmerSize,
            } as CSSProperties
          }
          className={cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none shadow-xs aria-invalid:border-destructive group relative z-0 cursor-pointer overflow-hidden px-6 py-3",
            "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
            "[border-radius:var(--radius)] bg-foreground",
            "text-background font-medium font-inter text-base tracking-wide",
            className
          )}
        >
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]"
            )}
          >
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>

          <span className="relative z-10 flex h-full w-full items-center justify-center">
            {children}
          </span>

          <div
            className={cn(
              "absolute -z-20 [border-radius:var(--radius)] [inset:var(--cut)]",
              "bg-foreground"
            )}
          />
        </div>
      </button>
    );
  }
);

MagneticShimmerButton.displayName = "MagneticShimmerButton";
