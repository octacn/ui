import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "@/registry/ui/badge";

type InteractiveHoverBadgeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InteractiveHoverBadge = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverBadgeProps
>(({ children, className, ...props }, ref) => {
  return (
    <Badge
      ref={ref}
      variant={"outline"}
      className={cn(
        "group relative cursor-pointer overflow-hidden bg-background rounded-full text-sm font-mono px-5 py-1.5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </Badge>
  );
});

InteractiveHoverBadge.displayName = "InteractiveHoverBadge";
