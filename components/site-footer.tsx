import { TextHoverEffect } from "@/registry/src/text/text-hover-effect";
import HoverAnimation from "@/components/animation/hover-animation";
import { Separator } from "@/registry/ui/separator";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Badge } from "@/registry/ui/badge";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

interface SocialMediaLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

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
    title: "Pro Components",
    links: [
      { label: "Hover Card", href: "/" },
      { label: "Interactive Button", href: "/" },
      { label: "File Uploader", href: "/" },
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
      { label: "Hero", href: "/" },
      { label: "Header", href: "/" },
      { label: "Footer", href: "/" },
      { label: "Pricing", href: "/" },
      { label: "Accordion", href: "/" },
      { label: "Form", href: "/" },
    ],
  },
];

const socialMediaLinks: SocialMediaLink[] = [
  {
    label: "Github",
    href: siteConfig.links.github,
    icon: <Icons.gitHub className="hover:text-muted-foreground h-6 w-6" />,
  },
  {
    label: "Twitter",
    href: siteConfig.links.twitter,
    icon: (
      <Icons.twitter className="text-blue-400 hover:text-muted-foreground" />
    ),
  },
  {
    label: "Instagram",
    href: "/",
    icon: (
      <Icons.instagram className="text-red-300 hover:text-muted-foreground" />
    ),
  },
  {
    label: "LinkedIn",
    href: "/",
    icon: (
      <Icons.linkedin className="text-blue-400 hover:text-muted-foreground " />
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-code">
      <div className="before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] before:absolute before:inset-x-0 before:-top-0 before:h-px relative w-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-12">
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

              <p className="text-foreground/90 font-inter text-base tracking-wider">
                A product by{" "}
                <Link
                  href="/"
                  target="_blank"
                  className="text-muted-foreground hover:text-orange-400"
                >
                  @SahilKumarDev
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end justify-start lg:justify-end">
              <h4 className="text-sm sm:text-base font-inter tracking-wider text-foreground/90 mb-2.5">
                Social Media
              </h4>
              <div className="flex items-center gap-4">
                {socialMediaLinks.map((item) => (
                  <SocialMediaIcons key={item.label} {...item} />
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
        <TextHoverEffect text="Octacn" />
      </div>
    </footer>
  );
}

export default function ExternalLink({
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
      className="group whitespace-nowrap inline-flex items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground font-inter tracking-wider leading-4 transition-colors duration-200"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span>{text}</span>
      <RiArrowRightUpLine
        className="text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
          <h4 className="text-sm sm:text-base font-inter tracking-wider text-foreground/90 underline underline-offset-5 decoration-1 mb-1.5">
            {section.title}
          </h4>
          {section.links.map((link, idx) => (
            <div key={idx}>
              <ExternalLink text={link.label} href={link.href} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SocialMediaIcons({ href, label, icon }: SocialMediaLink) {
  return (
    <HoverAnimation
      className="w-7 h-7 rounded flex items-center justify-center"
      href={href}
      aria-label={label}
    >
      {icon}
    </HoverAnimation>
  );
}
