import { InteractiveHoverBadge } from "@/registry/src/badges/interactive-hover-badge";
import { Cover } from "@/registry/src/cover";
import { Highlighter } from "@/registry/src/highlighter";
import { H1, H2 } from "@/registry/ui/typography";
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
      </div>

      {/* <div className="flex gap-5">
        {routes.map((route, idx) => (
          <Link href={route.name} key={idx}>
            {route.name}
          </Link>
        ))}
      </div> */}
    </div>
  );
};
