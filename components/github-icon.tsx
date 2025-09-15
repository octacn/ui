import { Skeleton } from "@/registry/ui/skeleton";
import { Button } from "@/registry/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import * as React from "react";
import Link from "next/link";

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  );
}

export async function StarsCount() {
  // const data = await fetch("https://api.github.com/repos/shadcn-ui/ui", {
  //   next: { revalidate: 86400 },
  // });
  // const json = await data.json();

  return (
    <span className="text-muted-foreground w-8 text-xs font-inter">
      {/* {json.stargazers_count >= 1000
        ? `${(json.stargazers_count / 1000).toFixed(1)}k`
        : json.stargazers_count.toLocaleString()} */}
      0.0k
    </span>
  );
}
