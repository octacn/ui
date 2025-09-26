"use client";

import { Loading } from "@/registry/components/loading";
import React, { CSSProperties, Suspense } from "react";
import { Heading } from "@/components/heading";
import { BoxWrapper } from "@/components/box";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

interface GradientBorderProps {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface TestimonialsCardProps {
  name: string;
  username: string;
  body: string;
}

const testimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "This product completely exceeded my expectations. I’ve never experienced anything quite like it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I’m honestly blown away. The design and experience are just incredible.",
  },
  {
    name: "John",
    username: "@john",
    body: "Every detail feels so well thought out. Using it has been an absolute delight.",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "It’s rare to find something that feels this seamless. I truly love it.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "The experience is smooth, simple, and powerful. I’d recommend it to anyone.",
  },
];

export default function TestimonialsSection() {
  return (
    <Suspense fallback={<Loading />}>
      <GradientTestimonials />
    </Suspense>
  );
}

const GradientTestimonials = () => {
  const [visibleCount, setVisibleCount] = React.useState(7);
  const [isLoading, setIsLoading] = React.useState(false);

  const testimonialsToShow = [
    testimonials[4],
    testimonials[3],
    testimonials[1],
    testimonials[2],
    testimonials[4],
    testimonials[1],
    testimonials[3],
    testimonials[2],
    testimonials[4],
    testimonials[1],
    testimonials[3],
    testimonials[2],
    testimonials[2],
    testimonials[4],
    testimonials[1],
    testimonials[3],
    // Add more if needed
  ].filter(Boolean);

  const handleLoadMore = () => {
    setIsLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, testimonialsToShow.length));
      setIsLoading(false);
    }, 500);
  };

  const hasMoreToLoad = visibleCount < testimonialsToShow.length;

  const featuredTestimonial = testimonialsToShow[0];
  const gridTestimonials = testimonialsToShow.slice(1, visibleCount);

  return (
    <BoxWrapper className="bg-gradient-to-b from-white/20 to-[125%] pt-10 ring-1 ring-gray-900/5 sm:pt-32 dark:from-gray-500/20 dark:ring-gray-950/5 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05)] shadow-inner-[0_1px_0_rgba(255,255,255,0.1)] overflow-hidden pb-6 md:pb-20 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Heading
          heading="Premium Components showcase"
          description="These are the best components that you can buy with the best features and prices."
        />

        {featuredTestimonial && <TestimonialsCard {...featuredTestimonial} />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
        {gridTestimonials.map((testimonial, index) => (
          <div
            key={`testimonial-${index}`}
            className="animate-in fade-in duration-500"
            style={{ animationDelay: `${(index % 6) * 100}ms` }}
          >
            <TestimonialsCard {...testimonial} />
          </div>
        ))}
      </div>

      {hasMoreToLoad && (
        <div className="flex justify-center mt-12">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            variant="outline"
            size="lg"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                Loading...
              </>
            ) : (
              <>Load more</>
            )}
          </Button>
        </div>
      )}
    </BoxWrapper>
  );
};

export const GradientBorder: React.FC<GradientBorderProps> = ({
  top = false,
  left = false,
  right = false,
  bottom = false,
  children,
  className,
}) => {
  const styleVertical: CSSProperties = {
    "--height": "5px",
    "--width": "1px",
    "--background": "#ffffff",
    "--color": "rgba(0, 0, 0, 0.2)",
    "--fade-stop": "90%",
    "--offset": "80px",
    "--color-dark": "rgba(255, 255, 255, 0.5)",
    WebkitMaskComposite: "exclude",
    maskComposite: "exclude",
  } as CSSProperties;

  const styleHorizontal: CSSProperties = {
    "--height": "1px",
    "--width": "5px",
    "--background": "#ffffff",
    "--color": "rgba(0, 0, 0, 0.2)",
    "--fade-stop": "90%",
    "--offset": "100px",
    "--color-dark": "rgba(255, 255, 255, 0.5)",
    WebkitMaskComposite: "exclude",
    maskComposite: "exclude",
  } as CSSProperties;

  const cssHorizontal =
    "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] -z-10";
  const cssVertical =
    "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] -z-10";

  return (
    <div className={cn("relative", className)}>
      {top && <div className={cn(cssHorizontal)} style={styleHorizontal} />}
      {left && <div className={cn(cssVertical)} style={styleVertical} />}
      {children}
      {bottom && (
        <div
          className={cn("bottom-0", cssHorizontal)}
          style={styleHorizontal}
        />
      )}
      {right && (
        <div className={cn("right-px", cssVertical)} style={styleVertical} />
      )}
    </div>
  );
};

function TestimonialsCard({ body, name, username }: TestimonialsCardProps) {
  return (
    <GradientBorder top right bottom left className="w-fit">
      <figure
        className={cn(
          "relative h-fit cursor-default select-none overflow-hidden rounded-2xl border px-5 py-5 pb-4 md:px-8 md:py-5 md:pb-4",
          "bg-surface space-y-4"
        )}
      >
        <Icons.google className="absolute top-5 right-5 size-4" />

        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="36"
            height="36"
            alt="user"
            src={"/avatar.png"}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium font-inter tracking-wide text-foreground/90">
              {name}
            </figcaption>
            <p className="text-xs font-medium font-inter text-muted-foreground">
              {username}
            </p>
          </div>
        </div>

        <blockquote className="text-base text-foreground/90 font-inter leading-5 tracking-wide font-light">
          {body}
        </blockquote>
      </figure>
    </GradientBorder>
  );
}
