import HoverAnimation from "@/components/animation/hover-animation";
import { Button } from "@/registry/ui/button";
import { BoxWrapper } from "@/components/box";
import { Badge } from "@/registry/ui/badge";
import { Icons } from "@/components/icons";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <BoxWrapper>
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block -z-10"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />

        <div className="w-140 h-320 -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
      </div>

      <div className="mx-auto flex flex-col items-center md:gap-y-4 mt-6 md:mt-10">
        <ChangelogBadge />
        <h1 className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text text-transparent dark:from-neutral-800 dark:via-white dark:to-white text-3xl md:text-5xl lg:text-6xl font-semibold [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] text-center">
          <span>Build Stunning Websites</span>
          <br />
          <span>Fast & Precision with Octacn</span>
        </h1>
        <h2 className="mx-auto max-w-5xl text-center text-base md:text-xl font-normal mt-2 inline-block align-top text-balance leading-relaxed text-foreground/70 space">
          Access a continuously expanding library of premium, thoughtfully
          designed templates and component blocks. Save valuable time and focus
          on what truly matters creating impactful websites that inspire your
          audience.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 gap-x-8 mt-4 md:my-2 w-full px-4 md:w-fit">
          <Link href={"/components/components"}>
            <Button className="font-inter has-[>svg]:px-8 h-10 w-full md:w-fit px-10 py-6 rounded-2xl">
              Browser Components
            </Button>
          </Link>
          <Link href={"/components/templates"}>
            <Button
              className="font-inter has-[>svg]:px-8 h-10 hover:translate-y-[-2px] transition-all duration-300 w-full md:w-fit px-10 py-6 rounded-2xl"
              variant={"outline"}
            >
              Explore Templates
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </BoxWrapper>
  );
}

function ChangelogBadge() {
  return (
    <HoverAnimation href={"/docs/changelog"}>
      <Badge
        variant={"outline"}
        className="mb-8 md:mt-6 md:mb-2 rounded-full border hover:border-muted-foreground/20 hover:bg-muted-foreground/10 text-muted-foreground px-3 py-1.5 hover:text-foreground/80 font-inter text-xs font-normal tracking-wider gap-1.5 [&>svg]:size-3.5"
      >
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-500/70 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-500" />
        </span>

        <span className="pointer-events-none select-none">
          Changelog 15th Oct - Version 1.0.0 Released!
        </span>

        <Icons.ArrowRight className="stroke-1 ml-0.5" />
      </Badge>
    </HoverAnimation>
  );
}
