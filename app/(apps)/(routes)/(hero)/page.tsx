import { cn } from "@/lib/utils";
import { FileUploader } from "@/registry/components/file-uploader";
import { InteractiveGradientText } from "@/registry/components/interactive-gradient-text";
import { Loading } from "@/registry/components/loading";
import { MagneticShimmerButton } from "@/registry/components/magnetic-shimmer-button";
import PaperBackground from "@/registry/components/paper-background";
import ScaleHoverAnimationButton from "@/registry/components/scale-hover-animation-button";
import { TypewriterEffect } from "@/registry/components/typewriter-effect";
import PinterestLayoutDemo from "@/registry/demo/components/pinterest-layout-demo";
import React, { ComponentProps, Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <section className="space-y-6 space-x-6 hidden md:block">
        <TopLayout />
        <MiddleLayout />
        <BottomLayout />
        <LastLayout />
      </section>
    </Suspense>
  );
}

function TopLayout() {
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
}

function MiddleLayout() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Box>
        <FileUploader />
      </Box>

      <Box className="col-span-2">
        <PinterestLayoutDemo />
      </Box>
    </div>
  );
}

function BottomLayout() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Box className="col-span-2">remain last components</Box>

      <Box>
        <TypewriterEffect>https://ui.octacn.com</TypewriterEffect>
      </Box>
    </div>
  );
}

function LastLayout() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Box>Registration Fom</Box>
      <Box className="col-span-2">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-10">
          <div className="flex items-center justify-centers h-full text-center">
            <h4 className="whitespace-nowrap text-center w-full text-3xl font-medium font-inter tracking-wide">
              Zoom to see background
            </h4>
          </div>
        </div>
        <PaperBackground className="rounded-lg" />
      </Box>
    </div>
  );
}

function Box({ children, className }: ComponentProps<"div">) {
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
  );
}
