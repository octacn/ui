import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";

export function OpenInAgency({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-2 rounded-lg border p-4 text-sm",
        className
      )}
    >
      <div className="text-balance text-lg font-semibold leading-tight group-hover:underline">
        Get your personal website or landing page
      </div>
      <div>
        we provide a custom website or landing page at affordable price
      </div>
      <Button size="sm" className="mt-2 w-fit">
        Explore now
      </Button>
      <Link
        href="https://axisbuddy.com/meeting"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">Connect</span>
      </Link>
    </div>
  );
}
