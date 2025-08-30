import { cn } from "@/lib/utils";
import { InfinityScroll } from "@/registry/src/components/infinity-scroll";
import { H2 } from "@/registry/ui/typography";
import React from "react";

const logo = [
  {
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = logo.slice(0, logo.length / 2);

const LogoCard = ({ img, body }: { img: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-row items-center gap-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const LogoSection = () => {
  return (
    <section className="my-20">
      <H2 className="text-center my-5">Used Our By these company </H2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <InfinityScroll pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <LogoCard key={review.body} {...review} />
          ))}
        </InfinityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
