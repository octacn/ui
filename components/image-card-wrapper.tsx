import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "@/registry/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const ImageCardWrapper = ({
  className,
  children,
  viewAll,
  title,
  hide,
}: {
  children: React.ReactNode;
  className?: string;
  viewAll: string;
  title: string;
  hide?: boolean;
}) => {
  const count = React.Children.count(children);
  const adjustCount = hide ? count : count - 1;

  return (
    <section className={cn("mt-8", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-inter font-medium tracking-wide cursor-default">
          • {title} ({adjustCount})
        </h1>

        <Link href={viewAll} className={cn(hide && "hidden")}>
          <Button size={"sm"}>
            View All
            <MdOutlineArrowOutward />
          </Button>
        </Link>
      </div>

      <div className="mt-3 grid gap-4 sm:grid-cols-2 sm:gap-8">{children}</div>
    </section>
  );
};
