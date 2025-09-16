import { Box, BoxWrapper } from "@/components/box";
import { Badge } from "@/registry/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeadingWithLink } from "../heading";

interface CardsProps {
  title: string;
  blocksCount: number;
  originalPrice: number;
  currentPrice: number;
  description: string;
  imageUrl: string;
  href: string;
}

export default function PremiumShowcase() {
  const products = [
    {
      title: "Hero Sections",
      blocksCount: 9,
      originalPrice: 18,
      currentPrice: 12,
      description:
        "A collection of hero sections that are modern and stand out. These carefully crafted components feature stunning visuals, compelling typography, and conversion-optimized layouts. Perfect for making a powerful first impression on your website visitors with responsive designs that work seamlessly across all devices.",
      imageUrl: "/images/temp-1.avif",
      href: "/products/temp-1",
    },
    {
      title: "Landing Pages",
      blocksCount: 12,
      originalPrice: 24,
      currentPrice: 18,
      description:
        "Beautiful landing page templates for your next project. Each template is meticulously designed to maximize conversions with strategic placement of CTAs, social proof sections, and engaging content blocks. Built with modern web standards and optimized for speed, SEO, and accessibility to help you launch faster.",
      imageUrl: "/images/temp-2.avif",
      href: "/products/temp-2",
    },
    {
      title: "Dashboard UI",
      blocksCount: 15,
      originalPrice: 30,
      currentPrice: 22,
      description:
        "Modern dashboard components and layouts for professional applications. Includes comprehensive data visualization elements, interactive charts, tables, forms, and navigation components. Designed with user experience in mind, featuring clean interfaces, intuitive workflows, and customizable themes for any industry or use case.",
      imageUrl: "/images/temp-1.avif",
      href: "/products/dashboard",
    },
    {
      title: "E-commerce Components",
      blocksCount: 18,
      originalPrice: 35,
      currentPrice: 26,
      description:
        "Complete e-commerce UI kit with everything you need to build a stunning online store. Features product Productcards, shopping carts, checkout flows, user accounts, and payment integrations. Optimized for mobile commerce with touch-friendly interactions, fast loading times, and conversion-focused design patterns that drive sales.",
      imageUrl: "/images/temp-2.avif",
      href: "/products/",
    },
    {
      title: "Blog Templates",
      blocksCount: 10,
      originalPrice: 20,
      currentPrice: 15,
      description:
        "Professional blog and content templates designed for readability and engagement. Includes various post layouts, author profiles, category pages, and subscription forms. Typography-focused designs that enhance reading experience while maintaining fast load times and excellent SEO performance for content creators and publishers.",
      imageUrl: "/images/temp-1.avif",
      href: "/products/blog-templates",
    },
    {
      title: "Portfolio Showcases",
      blocksCount: 14,
      originalPrice: 28,
      currentPrice: 20,
      description:
        "Stunning portfolio templates perfect for creatives, agencies, and freelancers. Showcase your work with elegant galleries, project case studies, testimonials, and contact forms. Features smooth animations, lightbox effects, and responsive masonry layouts that adapt beautifully to any screen size while highlighting your creative work.",
      imageUrl: "/images/temp-2.avif",
      href: "/products/portfolio",
    },
  ];

  return (
    <BoxWrapper>
      <HeadingWithLink
        title="Premium Components showcase"
        description="These are the best components that you can buy with the best features and prices."
      />
      <Box className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCards key={idx} {...product} />
        ))}
      </Box>
    </BoxWrapper>
  );
}

function ProductCards({
  title,
  blocksCount,
  originalPrice,
  currentPrice,
  description,
  imageUrl,
  href,
}: CardsProps) {
  return (
    <div className="border bg-surface rounded-lg overflow-hidden">
      <Link href={href}>
        <div className="relative overflow-hidden rounded border-b shadow-none p-2 transition duration-200 md:px-3.5 md:py-3">
          <div className="absolute inset-0 z-10 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:10px_10px] shadow-xl" />

          <div className="relative z-40">
            <Image
              src={imageUrl}
              height="500"
              width="720"
              loading="lazy"
              alt="Component Thumbnail"
              className="transition duration-300 relative aspect-video h-56 rounded-xl object-cover object-top group-hover:scale-105 group p-1 hover:scale-105 grayscale-50 "
            />
          </div>
        </div>

        <div className="px-4 py-3.5">
          <div className="flex justify-between items-center">
            <p className="text-base font-inter font-normal flex items-center">
              {title}
              <Badge
                variant={"outline"}
                className="px-2.5 py-1 rounded-2xl ml-2"
              >
                {blocksCount} blocks
              </Badge>
            </p>

            <p className="flex items-center gap-2 text-base font-inter font-medium">
              <span className="text-sm font-normal text-muted-foreground line-through">
                ${originalPrice}
              </span>
              <span>${currentPrice}</span>
            </p>
          </div>

          <p className="text-sm font-inter font-normal text-muted-foreground line-clamp-2 mt-1.5">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
