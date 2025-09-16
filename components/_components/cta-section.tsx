import HoverAnimation from "@/components/animation/hover-animation";
import { Box, BoxWrapper } from "@/components/box";
import { Heading } from "@/components/heading";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";
import Image from "next/image";
import React from "react";

interface ComponentPackCardProps {
  title: string;
  count: string | number;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  href?: string;
}

export default function CtaSection() {
  const products = [
    {
      title: "Landing Pages",
      count: "12+",
      description:
        "Full landing page templates optimized for conversion and modern design trends. Each template is meticulously designed to maximize conversions with strategic placement of CTAs, social proof sections, and engaging content blocks. Built with modern web standards and optimized for speed, SEO, and accessibility to help you launch faster.",
      imageUrl: "/images/temp-1.avif",
      imageAlt: "Landing Pages Preview",
      href: "/packs/landing-pages",
    },
    {
      title: "Dashboard UI",
      count: "25+",
      description:
        "Complete dashboard components including charts, tables, and analytics widgets for professional applications. Includes comprehensive data visualization elements, interactive charts, tables, forms, and navigation components. Designed with user experience in mind, featuring clean interfaces, intuitive workflows, and customizable themes for any industry or use case.",
      imageUrl: "/images/temp-1.avif",
      imageAlt: "Dashboard UI Preview",
      href: "/packs/dashboard",
    },
    {
      title: "Navigation Bars",
      count: "18+",
      description:
        "Responsive navigation components with mobile menus and modern interactions. Features dropdown menus, mega menus, sticky navigation, mobile-first responsive designs, and smooth animations. Each navbar is carefully crafted to enhance user experience and provide seamless navigation across your entire website.",
      imageUrl: "/images/temp-2.avif",
      imageAlt: "Navigation Bars Preview",
      href: "/packs/navbars",
    },
  ];
  return (
    <BoxWrapper className="pb-10">
      <Heading
        heading="Get more done with Octacn UI Pro"
        description="Octacn UI offers free components while Pro gives you the best premium components and templates pack to help your website stand out. Professional, clean and modern components to help you get more done."
      />

      <Box className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCards key={idx} {...product} />
        ))}
      </Box>
      <div className="flex items-center justify-center py-10">
        <HoverAnimation href="/">
          <Button
            className="py-6 px-8 font-inter text-base font-medium rounded-full text-background/80"
            size={"lg"}
          >
            Browse PRO components and templates
          </Button>
        </HoverAnimation>
      </div>
    </BoxWrapper>
  );
}

function ProductCards({
  title,
  count,
  description,
  imageUrl,
}: ComponentPackCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-surface">
      <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl border-b">
        <Image
          src={imageUrl}
          width="720"
          height="450"
          loading="lazy"
          decoding="async"
          alt="ALt for image"
          className="transition duration-300 blur-0 aspect-video rounded-b-2xl object-cover object-top group-hover:scale-105 border-b"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 pt-3.5 pb-5 space-y-1">
        <h4 className="text-base font-inter font-normal flex items-center">
          {title}
          <Badge variant={"outline"} className="px-2.5 py-0.5 rounded-lg ml-2">
            {count}
          </Badge>
        </h4>

        <p className="text-sm font-normal text-muted-foreground font-inter line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
