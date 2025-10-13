import React, { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { createBorder } from "@/components/create-border";
import HoverAnimation from "@/components/animation/hover-animation";
import { MagneticShimmerButton } from "@/registry/components/magnetic-shimmer-button";
import { siteConfig } from "@/lib/config";

export default function ProLibraryCta({
  className,
  show,
}: ComponentProps<"div"> & { show?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <section className="relative z-20 mx-auto w-full max-w-7xl bg-gradient-to-br from-gray-100 to-white  dark:from-neutral-900 dark:to-neutral-950 mt-12 flex items-center justify-between">
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

          <div className="mt-4 flex gap-4 items-center sm:gap-2">
            <HoverAnimation
              href={siteConfig.proOctacn}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium shadow-sm bg-background border text-base font-inter tracking-wide hover:cursor-pointer">
                Upgrade to Pro
              </button>
            </HoverAnimation>

            <Link
              target="_blank"
              href={siteConfig.meeting}
              rel="noopener noreferrer"
            >
              <MagneticShimmerButton>Talk to me</MagneticShimmerButton>
            </Link>
          </div>
        </div>

        {show && (
          <div className="md:flex h-72 min-w-sm flex-1 hidden">
            <div className="border-l h-full w-px" />
            <div className="flex flex-col items-center justify-center pr-10 pl-16 font-inter tracking-wide text-base text-muted-foreground">
              <div>
                <p className="">
                  I take every requirement seriously and turn it into a
                  polished, high-quality result. To anyone reading this – I
                  always strive to deliver work that exceeds expectations. You
                  can count on me to get the job done exceptionally well,
                  leaving you more than satisfied with the outcome.
                </p>

                <h4 className="mt-2 text-lg flex items-center gap-x-2 text-foreground/90">
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500/70 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                  </span>
                  Sahilkumardev
                </h4>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
