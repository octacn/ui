import { MagneticShimmerButton } from "@/registry/components/magnetic-shimmer-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import HoverAnimation from "./animation/hover-animation";

export default function ProLibraryCta({ className }: { className?: string }) {
  const createBorder = (
    direction: "horizontal" | "vertical",
    position: "top" | "bottom" | "left" | "right"
  ) => {
    const isHorizontal = direction === "horizontal";
    const baseClasses =
      "absolute z-30 bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]";

    const positionClasses = {
      top: "top-0 left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
      bottom:
        "bottom-0 left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
      left: "left-0 top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
      right:
        "right-0 top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
    };

    const styles: React.CSSProperties = {
      "--background": "#ffffff",
      "--color": "rgba(0, 0, 0, 0.2)",
      "--color-dark": "rgba(255, 255, 255, 0.2)",
      "--fade-stop": "90%",
      maskComposite: "exclude",
      ...(isHorizontal
        ? {
            "--height": "1px",
            "--width": "5px",
            "--offset": "200px",
          }
        : {
            "--height": "5px",
            "--width": "1px",
            "--offset": "80px",
          }),
    } as React.CSSProperties;

    const maskDirection = isHorizontal ? "left" : "top";
    const oppositeMaskDirection = isHorizontal ? "right" : "bottom";
    const backgroundSize = isHorizontal
      ? "var(--width)_var(--height)"
      : "var(--width)_var(--height)";

    return (
      <div
        className={cn(
          baseClasses,
          positionClasses[position],
          `[background-size:${backgroundSize}]`,
          `[mask:linear-gradient(to_${maskDirection},var(--background)_var(--fade-stop),transparent),_linear-gradient(to_${oppositeMaskDirection},var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]`,
          "[mask-composite:exclude]"
        )}
        style={styles}
      />
    );
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <section className="relative z-20 mx-auto w-full max-w-7xl bg-gradient-to-br from-gray-100 to-white  dark:from-neutral-900 dark:to-neutral-950 mt-12">
        <>
          {createBorder("horizontal", "top")}
          {createBorder("horizontal", "bottom")}
          {createBorder("vertical", "left")}
          {createBorder("vertical", "right")}
        </>

        <div className="p-8 md:py-12 md:px-10">
          <h2 className="text-left text-xl font-medium tracking-wide text-foreground/90 md:text-3xl font-inter">
            Unlock premium components and templates with{" "}
            <span className="font-bold text-orange-400 underline underline-offset-8 decoration-1 decoration-orange-500 decoration-wavy">
              Pro Octacn
            </span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground font-inter tracking-wide">
            Access our exclusive Pro library featuring advanced components,
            premium templates, and cutting-edge design systems. Join thousands
            of developers building exceptional interfaces with Pro Octacn&apos;s
            comprehensive toolkit.
          </p>

          <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-2">
            <HoverAnimation href="/" rel="noopener noreferrer" target="_blank">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium shadow-sm bg-background border text-base font-inter tracking-wide hover:cursor-pointer">
                Upgrade to Pro
              </button>
            </HoverAnimation>

            <Link target="_blank" href="/" rel="noopener noreferrer">
              <MagneticShimmerButton>Talk to me</MagneticShimmerButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
