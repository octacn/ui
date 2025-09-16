import { Icons } from "@/components/icons";
import React from "react";

export default function LogoSection() {
  return (
    <section className="mt-6">
      <h2 className="font-inter font-normal text-foreground/80 text-center text-base md:text-xl tracking-wide">
        <span className="inline-block vertical-align-top text-balance max-w-lg">
          Our Technology Stack for Building Websites
        </span>
      </h2>

      <div className="max-w-3xl mx-auto flex items-center justify-center">
        <LogoCard />
      </div>
    </section>
  );
}

function LogoCard() {
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
    <div className="no-visible-scrollbar relative flex flex-wrap items-center justify-center gap-4 mt-3">
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
}
