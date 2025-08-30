import { H2 } from "@/registry/ui/typography";
import React from "react";

import { InfinityScroll } from "@/registry/src/components/infinity-scroll";
import { cn } from "@/lib/utils";



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
    <section className="my-20">
      <H2 className="text-center my-5">Used Our By these company </H2>
      <div className="relative h-[500px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        <InfinityScroll pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </InfinityScroll>

        <div className="hidden md:block">
          <InfinityScroll
            reverse
            pauseOnHover
            vertical
            className="[--duration:22s] "
          >
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </InfinityScroll>
        </div>

        <div className="hidden lg:block">
          <InfinityScroll pauseOnHover vertical className="[--duration:24s] ">
            {thirdRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </InfinityScroll>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
      </div>
    </section>
  );
};

export const TestimonialCard = ({
  img,
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
        "relative h-full cursor-default overflow-hidden rounded-xl border px-4 py-3 pb-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 font-mono">
        {/* // TODO :- Image change to <Image /> */}
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt="user"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-1.5 text-base leading-5">{body}</blockquote>
    </figure>
  );
};
