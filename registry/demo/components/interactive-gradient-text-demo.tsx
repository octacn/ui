import { InteractiveGradientText } from "@/registry/components/interactive-gradient-text";
import React from "react";

export default function InteractiveGradientTextDemo() {
  return (
    <div className="relative w-full h-full">
      <h4 className="absolute top-10 left-0 right-0 text-center text-2xl font-inter text-muted-foreground">
        Hover Over Text to see Animation
      </h4>

      <InteractiveGradientText text="octacn" />
    </div>
  );
}
