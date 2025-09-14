import { Button } from "@/registry/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const socialLinks = [
  { name: "twitter", href: siteConfig.links.twitter },
  { name: "gitHub", href: siteConfig.links.github },
];

export function SiteFooter() {
  return (
    <div
      className="
        before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]
        before:absolute
        before:inset-x-0
        before:-top-4
        before:h-px
        relative w-full"
    >
      <div className="font-mono cursor-default flex items-center justify-between px-8 pb-3 bg-background backdrop-blur-xl">
        <h4 className="text-muted-foreground tracking-wide">
          Built by{" "}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4 hover:text-white/90"
          >
            Sahilkumardev
          </Link>
        </h4>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <SocialMediaButton
              key={link.name}
              name={link.name}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialMediaButton({ name, href }: { name: string; href: string }) {
  const Icon = Icons[name as keyof typeof Icons];

  if (!Icon) {
    console.warn(`Icon for ${name} not found`);
    return null;
  }

  return (
    <Button asChild variant="link" size={"icon"} className="shadow-none">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="size-5 fill-foreground" />
      </Link>
    </Button>
  );
}
