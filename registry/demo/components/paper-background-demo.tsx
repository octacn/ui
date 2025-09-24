import PaperBackground from "@/registry/components/paper-background";
import React from "react";

export default function PaperBackgroundDemo() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 right-0 left-0 bottom-0 z-10">
        <div className="flex items-center justify-centers h-full text-center">
          <h4 className="whitespace-nowrap text-center w-full text-3xl font-medium font-inter tracking-wide">
            Zoom to see background
          </h4>
        </div>
      </div>
      <PaperBackground className="rounded-lg" />
    </div>
  );
}
