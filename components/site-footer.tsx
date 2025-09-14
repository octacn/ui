import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { Separator } from "@/registry/ui/separator";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Badge } from "@/registry/ui/badge";

const footerNavigation = [
  {
    title: "Components",
    links: [
      { label: "Alert", href: "/" },
      { label: "Button", href: "/" },
      { label: "Card", href: "/" },
      { label: "Dialog", href: "/" },
      { label: "Input", href: "/" },
      { label: "Select", href: "/" },
    ],
  },
  {
    title: "Templates",
    links: [
      { label: "Dashboard", href: "/" },
      { label: "Landing", href: "/" },
      { label: "E-commerce", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Portfolio", href: "/" },
      { label: "Pricing", href: "/" },
    ],
  },
  {
    title: "Blocks",
    links: [
      { label: "Documentation", href: "/" },
      { label: "Examples", href: "/" },
      { label: "Changelog", href: "/" },
      { label: "Roadmap", href: "/" },
      { label: "Support", href: "/" },
      { label: "FAQ", href: "/" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "About", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Privacy", href: "/" },
      { label: "Terms", href: "/" },
    ],
  },
];

const socialMediaLinks = [
  { label: "Github", href: siteConfig.links.github },
  { label: "Twitter", href: siteConfig.links.twitter },
  { label: "Instagram", href: "/" },
  { label: "LinkedIn", href: "/" },
];

export function SiteFooter() {
  return (
    <footer className="bg-code">
      <div className="before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] before:absolute before:inset-x-0 before:-top-0 before:h-px relative w-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <section className="pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icons.nameLogo className="h-8 sm:h-10 w-auto" />
                <Badge
                  variant="secondary"
                  className="font-mono text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 border border-code-foreground"
                >
                  UI
                </Badge>
              </div>

              <p className="text-muted-foreground font-inter text-sm sm:text-base leading-relaxed">
                Access an ever-growing collection of premium, meticulously
                crafted templates and Component Blocks. Built by the founders of
                Octacn UI.
              </p>

              <div className="text-foreground/90 font-inter text-sm tracking-wider space-y-1">
                <p>
                  A product by{" "}
                  <span className="text-muted-foreground">Octacn</span>
                </p>
                <p>
                  Building in public at{" "}
                  <span className="text-muted-foreground">@sahilkumardev</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end justify-start lg:justify-end">
              <div className="flex flex-wrap gap-x-3 gap-y-2 lg:flex-col lg:gap-y-1.5 lg:items-end">
                {socialMediaLinks.map((link) => (
                  <ExternalLink
                    key={link.label}
                    text={link.label}
                    href={link.href}
                    isExternal
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="border-1" />

        <section className="py-6 sm:py-8 lg:py-10">
          <NavigationLinksGrid />
        </section>

        <Separator className="border-1 border-muted-foreground/20" />

        <section className="pt-4 sm:pt-6">
          <p className="font-inter text-muted-foreground text-xs sm:text-sm">
            © 2025 Octacn Labs LLC. All Rights Reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}

function ExternalLink({
  text,
  href,
  isExternal = false,
}: {
  text: string;
  href: string;
  isExternal?: boolean;
}) {
  return (
    <Link
      className="group inline-flex items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground font-inter tracking-wider leading-4 transition-colors duration-200"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span>{text}</span>
      <RiArrowRightUpLine
        className="text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-y-0.5"
        aria-hidden="true"
        size={16}
      />
    </Link>
  );
}

function NavigationLinksGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-10">
      {footerNavigation.map((section) => (
        <div key={section.title}>
          <h4 className="text-sm sm:text-base font-inter tracking-wider font-medium text-foreground underline underline-offset-4 mb-1.5">
            {section.title}
          </h4>
          {section.links.map((link) => (
            <div key={link.label}>
              <ExternalLink text={link.label} href={link.href} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
