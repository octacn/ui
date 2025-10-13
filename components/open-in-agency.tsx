import { Button } from "@/registry/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function OpenInAgency({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-2 rounded-lg border p-4 bg-surface cursor-default",
        className
      )}
    >
      <div className="text-lg font-inter group-hover:underline underline-offset-4 text-center group-hover:text-orange-400 group-hover:cursor-default cursor-default">
        Build Your Professional Online Presence
      </div>
      <div className="text-balance text-sm/snug font-inter text-muted-foreground mt-1">
        Launch a custom designed website or landing page for your brand for
        performance, design, and affordability.
      </div>
      <Button size="sm" className="mt-2 w-full group-hover:cursor-pointer">
        Explore Now
      </Button>

      <Link
        href={siteConfig.agency}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 group-hover:cursor-default cursor-default"
      >
        <span className="sr-only">Connect</span>
      </Link>
    </div>
  );
}
