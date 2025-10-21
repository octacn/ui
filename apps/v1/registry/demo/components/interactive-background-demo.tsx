import { InteractiveBackground } from "@/registry/components/interactive-background";
import React from "react";

export default function InteractiveBackgroundDemo() {
  return (
    <>
      <InteractiveBackground
        interactive
        className="absolute inset-0 rounded-lg"
      />
    </>
  );
}
