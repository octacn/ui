"use client";
import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "@/registry/ui/button";

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

export const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="pt-3">
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src={`/images/temp-${index + 1}.avif`}
                  width={1000}
                  height={1000}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full object-cover rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex justify-center space-x-2 mt-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                current === index + 1 ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 pt-6 gap-4">
        <LinkButton href={"/"} target="_blank">
          Live Preview
        </LinkButton>
        <LinkButton href={"/"} variant="outline">
          Github Download
        </LinkButton>
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
      <Button className="w-full text-lg py-6" variant={variant} {...props}>
        {children}
      </Button>
    </Link>
  );
};
