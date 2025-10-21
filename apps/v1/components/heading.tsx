import HoverAnimation from "@/components/animation/hover-animation";
import { Button } from "@/registry/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import React from "react";

export function Heading({
  heading,
  className,
  description,
}: {
  heading: string;
  className?: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start justify-center flex-col gap-y-1 font-inter",
        className
      )}
    >
      <h1 className="md:text-3xl font-semibold tracking-wide text-xl">
        {heading}
      </h1>
      <p className="text-muted-foreground tracking-wide text-sm md:text-base max-w-4xl">
        {description}
      </p>
    </div>
  );
}

export function SectionLink() {
  return (
    <HoverAnimation href={"/"} target="_blank" className="hidden md:block">
      <Button className="text-base">
        View All
        <Icons.ArrowRight />
      </Button>
    </HoverAnimation>
  );
}

export function HeadingWithLink({ ...props }) {
  return (
    <div className="flex items-center justify-between">
      <Heading heading={props.title} description={props.description} />
      <SectionLink />
    </div>
  );
}
