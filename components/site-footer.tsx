import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function SiteFooter() {
  return (
    <div className="text-muted-foreground w-full px-1 text-center font-mono cursor-default py-1.5">
      Built by{" "}
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noreferrer"
        className="hover:underline underline-offset-4 hover:text-white/90"
      >
        Sahilkumardev
      </Link>
    </div>
  );
}
