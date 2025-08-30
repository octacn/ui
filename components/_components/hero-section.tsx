import { InteractiveHoverBadge } from "@/registry/src/badges/interactive-hover-badge";
import { RainbowButton } from "@/registry/src/buttons/rainbow-button";
import { ShinyButton } from "@/registry/src/buttons/shiny-button";
import { Cover } from "@/registry/src/cover";
import { Highlighter } from "@/registry/src/highlighter";
import { ArrowRight } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-y-4">
        <InteractiveHoverBadge>New built in templates</InteractiveHoverBadge>

        <h2 className="text-center text-4xl">
          Introducing Built In
          <Cover className="font-medium text-4xl/tight">
            <Highlighter action="underline" color="#FF9800">
              Components
            </Highlighter>
            ,{" "}
            <Highlighter action="underline" color="#FF9800">
              Block
            </Highlighter>
            , and{" "}
            <Highlighter action="underline" color="#FF9800">
              Authentication
            </Highlighter>
          </Cover>
        </h2>
        
        <div className="flex items-center justify-center flex-wrap gap-9 mt-6">
          <RainbowButton className="font-mono" size={"lg"}>
            Browser Components
            <ArrowRight />
          </RainbowButton>
          <ShinyButton className="font-mono">Browse Templates </ShinyButton>
        </div>
      </div>
    </div>
  );
};
