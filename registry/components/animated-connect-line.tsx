"use client";

import { AnimatedPath } from "@/registry/components/animated-path";
import React, { ComponentProps, useRef } from "react";
import { Card, CardContent } from "@/registry/ui/card";
import { cn } from "@/lib/utils";
import {
  Chrome,
  Facebook,
  Framer,
  Github,
  Instagram,
  Linkedin,
  Slack,
  Twitter,
  Youtube,
} from "lucide-react";

export default function AnimatedConnectLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  return (
    <Card className="relative w-full max-w-sm bg-surface" ref={containerRef}>
      <CardContent className="grid grid-cols-3 place-items-center justify-items-center gap-x-8 gap-y-12 py-8">
        <Box ref={div1Ref} icon={Framer} label="Framer" />
        <Box ref={div2Ref} icon={Github} label="Github" />
        <Box ref={div3Ref} icon={Twitter} label="Twitter" />
        <Box ref={div4Ref} icon={Instagram} label="Instagram" />
        <Box ref={div5Ref} icon={Linkedin} label="Linkedin" />
        <Box ref={div6Ref} icon={Facebook} label="Facebook" />
        <Box ref={div7Ref} icon={Youtube} label="Youtube" />
        <Box ref={div8Ref} icon={Chrome} label="Chrome" />
        <Box ref={div9Ref} icon={Slack} label="Slack" />
      </CardContent>
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div1Ref}
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div2Ref}
        reverse
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div3Ref}
        reverse
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div4Ref}
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div6Ref}
        reverse
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div7Ref}
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div8Ref}
      />
      <AnimatedPath
        containerRef={containerRef}
        fromRef={div5Ref}
        reverse
        gradientStartColor="#f5ae51"
        gradientStopColor="#d18015"
        toRef={div9Ref}
      />
    </Card>
  );
}

function Box({
  icon: Icon,
  className,
  label,
  ref,
}: ComponentProps<"div"> & { icon: React.ElementType; label: string }) {
  return (
    <div
      className={cn(
        "font-inter font-normal tracking-wide w-fit grid justify-items-center gap-y-1 z-10",
        className
      )}
      ref={ref}
    >
      <div className="border bg-accent rounded-2xl p-4 flex items-center justify-center w-fit h-fit">
        <Icon className="size-6" />
      </div>
      <h4 className="text-xs text-muted-foreground">{label}</h4>
    </div>
  );
}
