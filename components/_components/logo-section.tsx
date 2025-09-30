import { Icons } from "@/components/icons";
import React from "react";

export default function LogoSection() {
  return (
    <section className="mt-8">
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
      icon: Icons.nextjs,
      name: "Next.js",
    },
    {
      icon: Icons.react,
      name: "React",
    },
    {
      icon: Icons.tailwind,
      name: "Tailwind CSS",
    },
    {
      icon: Icons.motion,
      name: "Motion",
    },
  ];

  return (
    <div className="no-visible-scrollbar relative flex flex-wrap items-center justify-center gap-4 mt-4">
      {techStackItems.map(({ icon: Icon, name }) => (
        <div
          key={name}
          className="mr-4 flex items-center space-x-1.5 text-neutral-500"
        >
          <Icon className="size-10 flex-shrink-0 stroke-1" />
          <span className="flex-shrink-0 text-base font-inter font-medium">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
