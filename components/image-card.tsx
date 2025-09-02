import { Button } from "@/registry/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * ImageCard component props
 */
interface ImageCardProps {
  className?: string;
  href: string;
  src: string;
  liveHref: string;
  title?: string;
}

/**
 * LinkButton component props
 */
interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export const ImageCard = ({
  className,
  href,
  src,
  liveHref,
  title = "Template 01 - simple card hai bhai to ho ajy jya ja",
}: ImageCardProps) => {
  return (
    <section className={cn("bg-code rounded-md overflow-hidden border-border border-2", className)}>
      <Link href={href}>
        <Image
          src={src}
          width={400}
          height={400}
          alt={src.toLowerCase()}
          className="h-2/3 w-full object-cover hover:scale-105 transition-all duration-200 hover:grayscale border-border border-b-3"
        />
      </Link>
      <div className="px-4 pt-4 pb-3">
        <h4 className="truncate font-medium text-base">{title}</h4>
        <div className="grid grid-cols-2 pt-3 gap-4">
          <LinkButton href={liveHref} target="_blank">
            Live Preview
          </LinkButton>
          <LinkButton href={href} variant="outline">
            View Docs
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

const LinkButton = ({
  children,
  href,
  variant,
  target,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      rel="noreferrer"
      className="hover:cursor-default"
      target={target}
    >
      <Button className="w-full" variant={variant} {...props}>
        {children}
      </Button>
    </Link>
  );
};
