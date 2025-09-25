import { Button } from "@/registry/ui/button";
import Link from "next/link";
import { Icons } from "./icons";
import React from "react";
import { siteConfig } from "@/lib/config";

export function DiscordLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none -ml-2">
      <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
        <Icons.discord />
      </Link>
    </Button>
  );
}
