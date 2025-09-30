import { imageCardSchema, imageCarouselSchema } from "@/schema/image-schema";
import { z } from "zod";

type ImageCard = z.infer<typeof imageCardSchema>;
type ImageCarousel = z.infer<typeof imageCarouselSchema>;

export const ImageCardItem: Record<string, ImageCard> = {
  /**
   * Templates
   *
   * Props :- title, preview, docs, img, type
   */
  "custom-phone-case": {
    type: "template",
    preview: "https://casecobracase.vercel.app/",
    docs: "templates/custom-phone-case",
    title: "Custom Phone Case",
    image: "/images/templates/case-cobra.avif",
  },

  /**
   * Blocks
   *
   * Props :- title, name, docs, type
   */
  "header-v1": {
    type: "block",
    name: "header-v1",
    docs: "headers/header-v1",
    title: "Header",
  },
  "pricing-v1": {
    type: "block",
    name: "pricing-v1-demo",
    docs: "pricings/pricing-v1",
    title: "Pricing",
  },
};

export const ImageCarouselItem: Record<string, ImageCarousel> = {
  "case-cobra": {
    images: [
      { image: "case-cobra.avif" },
      { image: "temp-1.avif" },
      { image: "temp-2.avif" },
    ],
    type: "docs",
    preview: "https://casecobracase.vercel.app/",
    repository: "case-cobra",
  },
  "case-cobra-view": {
    name: "case-cobra-view of ImageCarouselItem",
    images: [
      { image: "case-cobra.avif" },
      { image: "temp-1.avif" },
      { image: "temp-2.avif" },
    ],
    type: "view",
    preview: "https://casecobracase.vercel.app/",
    repository: "case-cobra",
  },
};
