import { InfinityScroll } from "@/registry/src/components/infinity-scroll";
import { Box, BoxWrapper } from "@/components/box";
import { Heading } from "@/components/heading";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export const testimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);
const thirdRow = testimonials.slice(testimonials.length / 3);

export const TestimonialsSection = () => {
  return (
    <BoxWrapper>
      <Heading
        heading="Trusted by Developers"
        description="See how Octacn UI helps developers ship faster and build better UIs."
      />

      <Box className="">
        <div className="relative h-[500px] md:h-[700px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4">
          <InfinityScroll
            pauseOnHover
            vertical
            className="[--duration:20s] [--gap:2rem]"
          >
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </InfinityScroll>

          <div className="hidden md:block">
            <InfinityScroll
              reverse
              pauseOnHover
              vertical
              className="[--duration:22s] [--gap:2rem]"
            >
              {secondRow.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </InfinityScroll>
          </div>

          <div className="hidden lg:block">
            <InfinityScroll
              pauseOnHover
              vertical
              className="[--duration:24s] [--gap:2rem]"
            >
              {thirdRow.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </InfinityScroll>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
        </div>
      </Box>
    </BoxWrapper>
  );
};

export const TestimonialCard = ({
  // img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-fit cursor-default select-none overflow-hidden rounded-xl border px-5 py-5 pb-4 md:px-8 md:py-6 md:pb-5",
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

      <blockquote className="text-base font-inter leading-5">{body}</blockquote>
    </figure>
  );
};
