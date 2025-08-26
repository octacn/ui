import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { JSX } from "react";
import * as React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

function createText<T extends HTMLElement>(
  defaultTag: keyof JSX.IntrinsicElements,
  baseClass: string
) {
  const Comp = React.forwardRef<T, TextProps>(
    ({ className, asChild, ...props }, ref) => {
      const Tag: React.ElementType = asChild
        ? Slot
        : (defaultTag as React.ElementType);
      return <Tag ref={ref} className={cn(baseClass, className)} {...props} />;
    }
  );
  Comp.displayName = `Typography.${String(defaultTag)}`;
  return Comp;
}

// ---------------------------------------------
// Headings
// ---------------------------------------------
export const H1 = createText<HTMLHeadingElement>(
  "h1",
  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
);

export const H2 = createText<HTMLHeadingElement>(
  "h2",
  "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0"
);

export const H3 = createText<HTMLHeadingElement>(
  "h3",
  "scroll-m-20 text-2xl tracking-tight"
);

export const H4 = createText<HTMLHeadingElement>(
  "h4",
  "scroll-m-20 text-xl tracking-tight"
);

export const H5 = createText<HTMLHeadingElement>(
  "h5",
  "scroll-m-20 text-lg tracking-tight"
);

export const H6 = createText<HTMLHeadingElement>(
  "h6",
  "scroll-m-20 text-base tracking-tight"
);

// ---------------------------------------------
// Paragraph & helpers
// ---------------------------------------------
export const P = createText<HTMLParagraphElement>("p", "leading-7");

export const Lead = createText<HTMLParagraphElement>(
  "p",
  "text-xl text-muted-foreground"
);

export const Large = createText<HTMLDivElement>("div", "text-lg font-semibold");

export const Small = createText<HTMLParagraphElement>(
  "p",
  "text-sm font-medium leading-none"
);

export const Muted = createText<HTMLParagraphElement>(
  "p",
  "text-sm text-muted-foreground"
);

export const Blockquote = createText<HTMLQuoteElement>(
  "blockquote",
  "mt-6 border-l-2 pl-6 italic"
);

export const InlineCode = createText<HTMLElement>(
  "code",
  "relative rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
);

export const Kbd = createText<HTMLElement>(
  "kbd",
  "rounded border bg-muted px-1.5 py-0.5 font-mono text-[0.8rem]"
);

// ---------------------------------------------
// Lists & rules
// ---------------------------------------------
export const UL: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => (
  <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
);
UL.displayName = "Typography.UL";

export const OL: React.FC<React.OlHTMLAttributes<HTMLOListElement>> = ({
  className,
  ...props
}) => (
  <ol
    className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
    {...props}
  />
);
OL.displayName = "Typography.OL";

export const LI: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => <li className={cn("leading-7", className)} {...props} />;
LI.displayName = "Typography.LI";

export const HR: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => <hr className={cn("my-6 border-muted", className)} {...props} />;
HR.displayName = "Typography.HR";

export const Prose: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "prose prose-zinc dark:prose-invert max-w-none",
      "prose-headings:scroll-m-20 prose-h2:border-b prose-h2:pb-2",
      "prose-p:leading-7 prose-p:mt-0 prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6",
      "prose-ul:my-6 prose-ol:my-6 prose-li:mt-2",
      "prose-code:bg-muted prose-code:rounded prose-code:px-1.5 prose-code:py-0.5",
      className
    )}
    {...props}
  />
);
Prose.displayName = "Typography.Prose";
