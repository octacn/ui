import { cn } from "@/lib/utils";
import React from "react";

export const Heading = ({
  heading,
  description,
  className,
}: {
  heading: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col gap-y-2 md:gap-y-3",
        className
      )}
    >
      <h1 className="font-inter md:text-4xl font-semibold tracking-wide leading-6 md:leading-10 text-2xl">{heading}</h1>
      <p className="text-muted-foreground font-inter max-w-md leading-5 md:leading-6 text-center tracking-wide text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};
