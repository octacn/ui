import React, { memo } from "react"

import { LayoutBox } from "@/components/box"
import { AuthForm } from "@/registry/blocks/auth-form-v1"
import AnimatedConnectLine from "@/registry/components/animated-connect-line"
import { InteractiveGradientText } from "@/registry/components/interactive-gradient-text"
import { MagneticShimmerButton } from "@/registry/components/magnetic-shimmer-button"
import PaperBackground from "@/registry/components/paper-background"
import ScaleHoverAnimationButton from "@/registry/components/scale-hover-animation-button"
import { TypewriterEffect } from "@/registry/components/typewriter-effect"
import PinterestLayoutDemo from "@/registry/demo/components/pinterest-layout-demo"

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="hidden md:block space-y-6">
        <TopLayout />
        <MiddleLayout />
        <BottomLayout />
      </div>

      <div className="block md:hidden space-y-4 px-4">
        <MobileLayout />
      </div>
    </section>
  )
}

const TopLayout = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <LayoutBox className="col-span-2">
        <h4 className="absolute top-5 left-0 right-0 text-center text-xl font-inter text-muted-foreground">
          Hover Over Text to see Animation
        </h4>

        <InteractiveGradientText text="octacn" />
      </LayoutBox>

      <div className="space-y-6">
        <LayoutBox>
          <MagneticShimmerButton>Hover Near Me!</MagneticShimmerButton>
        </LayoutBox>

        <LayoutBox className="py-12">
          <ScaleHoverAnimationButton>Hover On Me!</ScaleHoverAnimationButton>
        </LayoutBox>
      </div>
    </div>
  )
})
TopLayout.displayName = "TopLayout"

const MiddleLayout = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col gap-6">
        <LayoutBox className="h-full">
          <AnimatedConnectLine />
        </LayoutBox>
        <LayoutBox>
          <TypewriterEffect className="py-2">
            https://ui.octacn.com
          </TypewriterEffect>
        </LayoutBox>
      </div>

      <LayoutBox className="col-span-2">
        <PinterestLayoutDemo />
      </LayoutBox>
    </div>
  )
})
MiddleLayout.displayName = "MiddleLayout"

const BottomLayout = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <LayoutBox className="col-span-2">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-10">
          <div className="flex items-center justify-center h-full text-center">
            <h4 className="whitespace-nowrap text-center w-full text-3xl font-medium font-inter tracking-wide">
              Zoom to see background
            </h4>
          </div>
        </div>

        <PaperBackground className="rounded-lg" />
      </LayoutBox>

      <AuthForm />
    </div>
  )
})
BottomLayout.displayName = "BottomLayout"

const MobileLayout = memo(() => {
  return (
    <div className="space-y-4">
      <LayoutBox className="text-center">
        <h4 className="text-lg font-inter text-muted-foreground mb-4">
          Tap to see Animation
        </h4>

        <InteractiveGradientText text="octacn" />
      </LayoutBox>

      <div className="grid grid-cols-1 gap-4">
        <LayoutBox>
          <MagneticShimmerButton>Hover Near Me!</MagneticShimmerButton>
        </LayoutBox>

        <LayoutBox>
          <ScaleHoverAnimationButton>Hover On Me!</ScaleHoverAnimationButton>
        </LayoutBox>
      </div>

      <LayoutBox>
        <TypewriterEffect className="py-2">
          https://ui.octacn.com
        </TypewriterEffect>
      </LayoutBox>

      <LayoutBox>
        <PinterestLayoutDemo />
      </LayoutBox>

      <LayoutBox className="relative min-h-[200px]">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h4 className="text-xl font-medium font-inter tracking-wide text-center">
            Zoom to see background
          </h4>
        </div>
        <PaperBackground className="rounded-lg" />
      </LayoutBox>

      <AuthForm />
    </div>
  )
})
MobileLayout.displayName = "MobileLayout"
