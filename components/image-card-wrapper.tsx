import { cn } from "@/lib/utils";
import React from "react";

export const ImageCardWrapper = ({
  children,
  title,
  grid,
}: {
  children: React.ReactNode;
  grid?: boolean;
  title: string;
}) => {
  return (
    <section>
      <h1 className="text-xl font-inter font-medium tracking-wide cursor-default">
        • {title}
      </h1>

      <div
        className={cn(
          "mt-3 grid gap-4 sm:gap-8",
          grid ? "grid-cols-3" : "grid-cols-2"
        )}
      >
        {children}
      </div>
    </section>
  );
};
