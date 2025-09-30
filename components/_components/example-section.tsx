"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/registry/ui/scroll-area";

const examples = [
  {
    name: "Blocks",
    href: "/example/blocks",
  },
  {
    name: "Typography",
    href: "/example/typography",
  },
  // {
  //   name: "Dashboard",
  //   href: "/example/dashboard",
  // },
  // {
  //   name: "Playground",
  //   href: "/example/playground",
  // },
  {
    name: "Authentication",
    href: "/example/authentication",
  },
  {
    name: "Templates",
    href: "/example/templates",
  },
];

export function ExampleSection({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <ScrollArea className="max-w-[96%] md:max-w-[600px] lg:max-w-none">
        <div className="flex items-center gap-6">
          <ExampleLink
            example={{ name: "Examples", href: "/" }}
            isActive={pathname === "/"}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

function ExampleLink({
  example,
  isActive,
}: {
  example: (typeof examples)[number];
  isActive: boolean;
}) {
  return (
    <Link
      href={example.href}
      key={example.href}
      className="text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 items-center justify-center text-center font-inter font-normal tracking-wide transition-colors"
      data-active={isActive}
    >
      {example.name}
    </Link>
  );
}
