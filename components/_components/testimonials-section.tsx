"use client";

import { Loading } from "@/registry/components/loading";
import React, { Suspense } from "react";
import { Heading } from "@/components/heading";
import { BoxWrapper } from "@/components/box";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import { createBorder } from "../create-border";

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
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
    <BoxWrapper className="bg-gradient-to-b from-white/20 to-[100%] pt-10 sm:pt-32 dark:from-foreground/5 overflow-hidden pb-6 md:pb-20 mt-16">
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
function TestimonialsCard({ body, name, username }: TestimonialsCardProps) {
  return (
    <div className="relative">
      <>
        {createBorder("horizontal", "top")}
        {createBorder("horizontal", "bottom")}
        {createBorder("vertical", "left")}
        {createBorder("vertical", "right")}
      </>

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
    </div>
  );
}
