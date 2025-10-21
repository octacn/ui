import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

export const Loading = ({ className }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "inline-flex cursor-not-allowed items-center justify-center w-full font-inter text-muted-foreground h-full",
        className
      )}
    >
      <svg
        className="animate-spin mr-2 size-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
        <path d="M17 12a5 5 0 1 0 -5 5" className="opacity-75"/>
      </svg>
      Loading...
    </div>
  );
};
