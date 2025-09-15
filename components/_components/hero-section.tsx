import { ArrowRight, Mail, SendHorizontal } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { BoxWrapper } from "@/components/box";
import { Icons } from "@/components/icons";
import React from "react";
import { Badge } from "@/registry/ui/badge";

export const HeroSection = () => {
  return (
    <BoxWrapper>
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block -z-10"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />

        <div className="w-140 h-320 -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
      </div>

      <div className="mx-auto flex flex-col items-center gap-y-4 mt-14">
        <ChangelogBadge />
        <h1 className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text text-transparent dark:from-neutral-800 dark:via-white dark:to-white text-4xl md:text-5xl lg:text-6xl font-semibold [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] text-center">
          <span>Build Stunning Websites</span>
          <br />
          <span>Fast & Precision with Octacn</span>
        </h1>
        <h2 className="mx-auto max-w-5xl text-center text-base md:text-xl font-normal mt-2 inline-block align-top text-balance leading-relaxed text-foreground/70">
          Access a continuously expanding library of premium, thoughtfully
          designed templates and component blocks. Save valuable time and focus
          on what truly matters creating impactful websites that inspire your
          audience.
        </h2>
        <div className="flex items-center justify-center gap-10 my-2">
          <Button className="font-inter has-[>svg]:px-8 h-10">
            Browser Components
            <ArrowRight />
          </Button>
          <Button
            className="font-inter has-[>svg]:px-8 h-10 hover:translate-y-[-2px] transition-all duration-300 "
            variant={"outline"}
          >
            Explore Templates
            <ArrowRight />
          </Button>
        </div>
        <div className="flex items-center gap-x-14 mt-2">
          <NewsLatter />
          <TechStack />
        </div>
      </div>
    </BoxWrapper>
  );
};

const TechStack: React.FC = () => {
  const techStackItems = [
    {
      icon: (
        <Icons.nextjs className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10" />
      ),
      name: "Next.js",
    },
    {
      icon: (
        <Icons.react className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10" />
      ),
      name: "React",
    },
    {
      icon: (
        <Icons.tailwind className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10" />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <Icons.motion className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10" />
      ),
      name: "Motion",
    },
  ];

  return (
    <div className="no-visible-scrollbar relative flex flex-wrap items-center justify-center gap-4 mt-4">
      {techStackItems.map(({ icon, name }) => (
        <div key={name} className="mr-4 flex items-center space-x-2">
          {icon}
          <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

function NewsLatter() {
  return (
    <div>
      <h4 className="font-inter text-sm text-muted-foreground mb-2">
        Subscribe to our newsletter
      </h4>
      <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
        <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

        <input
          placeholder="Your mail address"
          className="h-14 w-full bg-transparent pl-12 focus:outline-none"
          type="email"
        />

        <div className="md:pr-1.5 lg:pr-0">
          <Button aria-label="submit" className="rounded-(--radius)">
            <span className="hidden md:block">Get Started</span>
            <SendHorizontal
              className="relative mx-auto size-5 md:hidden"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ChangelogBadge() {
  return (
    <a href={"/changelog"} className="">
      <Badge
        variant={"outline"}
        className="mt-6 rounded-full border transition-all duration-300 hover:translate-y-[-2px] hover:border-muted-foreground/20 hover:bg-muted-foreground/10 text-muted-foreground px-3 py-1.5 hover:text-foreground/80 font-inter text-xs font-normal tracking-wider gap-1.5 [&>svg]:size-3.5"
      >
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-500/70 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-500" />
        </span>

        <span className="pointer-events-none select-none">
          Changelog 15th Sept - 4 new Navbar
        </span>

        <Icons.ArrowRight className="stroke-1 ml-0.5" />
      </Badge>
    </a>
  );
}
