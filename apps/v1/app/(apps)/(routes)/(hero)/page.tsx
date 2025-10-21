import React, { ComponentProps, memo, Suspense } from "react";
import {
  ScaleHoverAnimationButton,
  InteractiveGradientText,
  MagneticShimmerButton,
  PinterestLayoutDemo,
  TypewriterEffect,
  PaperBackground,
  AuthForm,
} from "./example";
import AnimatedConnectLine from "@/registry/components/animated-connect-line";
import { cn } from "@/lib/utils";
import { Loading } from "@/registry/components/loading";

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
  );
}

const TopLayout = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Box className="col-span-2">
        <h4 className="absolute top-5 left-0 right-0 text-center text-xl font-inter text-muted-foreground">
          Hover Over Text to see Animation
        </h4>

        <InteractiveGradientText text="octacn" />
      </Box>

      <div className="space-y-6">
        <Box>
          <MagneticShimmerButton>Hover Near Me!</MagneticShimmerButton>
        </Box>

        <Box className="py-12">
          <ScaleHoverAnimationButton>Hover On Me!</ScaleHoverAnimationButton>
        </Box>
      </div>
    </div>
  );
});
TopLayout.displayName = "TopLayout";

const MiddleLayout = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col gap-6">
        <Box className="h-full">
          <AnimatedConnectLine />
        </Box>
        <Box>
          <TypewriterEffect className="py-2">
            https://ui.octacn.com
          </TypewriterEffect>
        </Box>
      </div>

      <Box className="col-span-2">
        <PinterestLayoutDemo />
      </Box>
    </div>
  );
});
MiddleLayout.displayName = "MiddleLayout";

const BottomLayout = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Box className="col-span-2">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-10">
          <div className="flex items-center justify-center h-full text-center">
            <h4 className="whitespace-nowrap text-center w-full text-3xl font-medium font-inter tracking-wide">
              Zoom to see background
            </h4>
          </div>
        </div>

        <PaperBackground className="rounded-lg" />
      </Box>

      <AuthForm />
    </div>
  );
});
BottomLayout.displayName = "BottomLayout";

const MobileLayout = memo(() => {
  return (
    <div className="space-y-4">
      <Box className="text-center">
        <h4 className="text-lg font-inter text-muted-foreground mb-4">
          Tap to see Animation
        </h4>

        <InteractiveGradientText text="octacn" />
      </Box>

      <div className="grid grid-cols-1 gap-4">
        <Box>
          <MagneticShimmerButton>Hover Near Me!</MagneticShimmerButton>
        </Box>

        <Box>
          <ScaleHoverAnimationButton>Hover On Me!</ScaleHoverAnimationButton>
        </Box>
      </div>

      <Box>
        <TypewriterEffect className="py-2">
          https://ui.octacn.com
        </TypewriterEffect>
      </Box>

      <Box>
        <PinterestLayoutDemo />
      </Box>

      <Box className="relative min-h-[200px]">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h4 className="text-xl font-medium font-inter tracking-wide text-center">
            Zoom to see background
          </h4>
        </div>
        <PaperBackground className="rounded-lg" />
      </Box>

      <AuthForm />
    </div>
  );
});
MobileLayout.displayName = "MobileLayout";

export function Box({ children, className }: ComponentProps<"div">) {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className={cn(
          "relative border border-dashed bg-surface rounded-lg px-4 py-8 overflow-hidden",
          "grid place-items-center content-center justify-items-center",
          className
        )}
      >
        {children}
      </div>
    </Suspense>
  );
}
