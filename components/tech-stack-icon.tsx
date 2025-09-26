import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import React from "react";

const techStackIcons = {
  react: {
    name: FaReact,
    className: "text-blue-500",
  },
  nextjs: {
    name: RiNextjsLine,
    className: "text-black dark:text-white",
  },
  tailwind: {
    name: RiTailwindCssFill,
    className: "text-cyan-500",
  },
} as const;

type TechStackIconName = keyof typeof techStackIcons;

interface TechStackProps {
  icons: TechStackIconName[];
}

export function TechStack({ icons }: TechStackProps) {
  return (
    <div className="flex items-center mt-2 gap-2">
      {icons.map((icon) => {
        const IconComponent = techStackIcons[icon].name;

        return (
          <IconComponent
            key={icon}
            className={cn(techStackIcons[icon].className, "size-10")}
          />
        );
      })}
    </div>
  );
}
