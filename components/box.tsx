import { cn } from "@/lib/utils";
import React from "react";

interface BoxProps  {
  children: React.ReactNode;
  className?: string;
}

export function Box({
  className,
  children,
}: BoxProps) {
  return (
    <section className={cn("pt-6 md:pt-10", className)}>
      {children}
    </section>
  );
}

export function BoxWrapper({
  className,
  children,
}: BoxProps) {
  return (
    <section className={cn("pt-12 lg:pt-24 px-4 lg:px-24", className)}>
      {children}
    </section>
  )
}
