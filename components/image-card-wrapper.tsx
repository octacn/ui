import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "@/registry/ui/button";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export const ImageCardWrapper = ({
  className,
  children,
  viewAll,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  viewAll: string;
  title: string;
}) => {
  return (
    <section className={cn("mt-8", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-inter font-medium"> • {title}</h1>

        <Link href={viewAll}>
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
