"use client";

import { getLastSegment } from "@/lib/get-segment";
import type { docsSource } from "@/lib/source";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function GenerateList({
  tree,
}: {
  tree: typeof docsSource.pageTree;
}) {
  const path = usePathname();
  const name = getLastSegment(path);

  if (!name) {
    return null;
  }

  const components = tree.children.find(
    (page) => page.$id === name.toLowerCase()
  );

  if (components?.type !== "folder") {
    return;
  }

  const list = components.children.filter(
    (component) => component.type === "page"
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20 text-base/normal font-inter tracking-wide">
      {list.map((component, idx) => (
        <div key={component.$id} className="flex gap-1">
          {1 + idx}.
          <Link
            href={component.url}
            className="underline-offset-4 hover:underline hover:text-muted-foreground"
          >
            <span>{component.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
