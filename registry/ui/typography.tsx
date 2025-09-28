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

/**
 * Heading Are as Follow `H1, H2, H3, H4, H5, H6`
 */
export const H1 = createText<HTMLHeadingElement>(
  "h1",
  "scroll-m-20 text-4xl font-inter tracking-wide font-medium text-balance"
);

export const H2 = createText<HTMLHeadingElement>(
  "h2",
  "scroll-m-20 text-3xl font-inter tracking-wide first:mt-0"
);

export const H3 = createText<HTMLHeadingElement>(
  "h3",
  "scroll-m-20 text-2xl font-inter tracking-wide"
);

export const H4 = createText<HTMLHeadingElement>(
  "h4",
  "scroll-m-20 text-xl font-inter tracking-wide"
);

export const H5 = createText<HTMLHeadingElement>(
  "h5",
  "scroll-m-20 text-lg font-inter tracking-wide"
);

export const H6 = createText<HTMLHeadingElement>(
  "h6",
  "scroll-m-20 text-base font-inter tracking-wide"
);

/**
 * Paragraph & helpers Are as Follow p, Lead, Large, Small, Muted, BlackQuote, InlineCode, Kbd
 */
export const P = createText<HTMLParagraphElement>(
  "p",
  "leading-7 [&:not(:first-child)]:mt-6 text-base font-inter tracking-wide"
);

export const Lead = createText<HTMLParagraphElement>(
  "p",
  "text-xl text-muted-foreground"
);

export const Large = createText<HTMLDivElement>(
  "div",
  "text-lg font-inter font-normal tracking-wide"
);

export const Small = createText<HTMLParagraphElement>(
  "p",
  "text-sm font-inter font-normal leading-none tracking-wide"
);

export const Muted = createText<HTMLParagraphElement>(
  "p",
  "text-base text-muted-foreground font-inter tracking-wide"
);

export const Blockquote = createText<HTMLQuoteElement>(
  "blockquote",
  "mt-6 border-l-3 pl-3 italic font-inter text-foreground/70 tracking-wide text-base"
);

export const InlineCode = createText<HTMLElement>(
  "code",
  "relative rounded bg-muted px-2.5 py-1 rounded-md font-inter text-sm flex-inline items-center justify-center tracking-wide font-normal"
);

export const Kbd = createText<HTMLElement>(
  "kbd",
  "rounded border bg-muted px-1.5 py-0.5 font-mono text-[0.8rem]"
);

/**
 * Lists & rules Are as Follow Ul, Ol, Li, Hr, Prose
 */
export const Ul: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => (
  <ul
    className={cn(
      "my-6 ml-6 list-disc [&>li]:mt-1.5 font-inter tracking-wide text-left",
      className
    )}
    {...props}
  />
);
Ul.displayName = "Typography.Ul";

export const Ol: React.FC<React.OlHTMLAttributes<HTMLOListElement>> = ({
  className,
  ...props
}) => (
  <ol
    className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
    {...props}
  />
);
Ol.displayName = "Typography.Ol";

export const Li: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => <li className={cn("leading-5", className)} {...props} />;
Li.displayName = "Typography.Li";

export const Hr: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => <hr className={cn("my-6 border-muted", className)} {...props} />;
Hr.displayName = "Typography.Hr";

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
