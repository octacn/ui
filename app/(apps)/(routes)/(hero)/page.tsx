import { CodePreviewBox } from "@/components/box";
import { FileUploader } from "@/registry/components/file-uploader";
import { InteractiveGradientText } from "@/registry/components/interactive-gradient-text";
import { Loading } from "@/registry/components/loading";
import { MagneticShimmerButton } from "@/registry/components/magnetic-shimmer-button";
import PaperBackground from "@/registry/components/paper-background";
import ScaleHoverAnimationButton from "@/registry/components/scale-hover-animation-button";
import { TypewriterEffect } from "@/registry/components/typewriter-effect";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HeroPage />
    </Suspense>
  );
}

function HeroPage() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-10 grid-rows-3 md:grid-rows-12 gap-2 md:gap-5">
      <CodePreviewBox
        link=""
        title="Number hai 0"
        className="md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-3"
      >
        0
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 1"
        className="md:col-start-3 md:row-start-1 md:col-span-4 md:row-span-3"
      >
        1
      </CodePreviewBox>

      <FileUploader className="md:col-start-7 md:row-start-1 md:col-span-4 md:row-span-6 bg-surface" />

      <div className="md:content-center md:justify-items-center border border-dashed bg-surface rounded-lg hidden md:grid overflow-hidden md:col-start-1 md:row-start-4 md:col-span-6 md:row-span-3 relative w-full h-full">
        <h4 className="absolute top-5 left-0 right-0 text-center text-xl font-inter text-muted-foreground">
          Hover Over Text to see Animation
        </h4>
        <InteractiveGradientText text="octacn" />
      </div>

      <div className="md:content-center md:justify-items-center border border-dashed bg-surface rounded-lg hidden md:grid overflow-hidden md:col-start-1 md:row-start-7 md:col-span-3 md:row-span-2">
        <TypewriterEffect>https://ui.octacn.com</TypewriterEffect>
      </div>

      <CodePreviewBox
        link=""
        title="Number hai 5"
        className=" md:col-start-4 md:row-start-7 md:col-span-7 md:row-span-2"
      >
        5
      </CodePreviewBox>

      <div className="border border-dashed bg-surface rounded-lg hidden md:grid overflow-hidden md:col-start-1 md:row-start-9 md:col-span-4 md:row-span-6 relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-10">
          <div className="flex items-center justify-centers h-full text-center">
            <h4 className="whitespace-nowrap text-center w-full text-3xl font-medium font-inter tracking-wide">
              Zoom to see background
            </h4>
          </div>
        </div>
        <PaperBackground className="rounded-lg" />
      </div>

      <div className="border border-dashed bg-surface rounded-lg hidden md:grid overflow-hidden md:col-start-5 md:row-start-9 md:col-span-3 md:row-span-1 ">
        <MagneticShimmerButton>Hover Near Me!</MagneticShimmerButton>
      </div>

      <div className="md:content-center md:justify-items-center border border-dashed bg-surface rounded-lg hidden md:grid overflow-hidden md:col-start-8 md:row-start-9 md:col-span-3 md:row-span-1">
        <ScaleHoverAnimationButton>Hover On Me!</ScaleHoverAnimationButton>
      </div>

      <CodePreviewBox
        link=""
        title="Number hai 9"
        className="md:col-start-5 md:row-start-10 md:col-span-6 md:row-span-5"
      >
        9
      </CodePreviewBox>
    </div>
  );
}
