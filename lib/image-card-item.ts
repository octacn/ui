import { z } from "zod";
import { imageCardSchema } from "@/schema/image-card-schema";

type ImageCard = z.infer<typeof imageCardSchema>;

export const ImageCardItem: Record<string, ImageCard> = {
  /**
   * Templates
   *
   * Props :- title, preview, docs, img, type
   */
  "custom-phone-case": {
    type: "template",
    preview: "https://casecobracase.vercel.app/",
    docs: "docs/templates/custom-phone-case",
    title: "Custom Phone Case",
    image: "/images/templates/case-cobra.avif",
  },

  /**
   * Blocks
   *
   * Props :- title, name, docs, type
   */
  "header-01": {
    type: "block",
    name: "header-01",
    docs: "blocks-docs/headers/header-01",
    title: "Header",
  },
  "pricing-01": {
    type: "block",
    name: "pricing-01-demo",
    docs: "blocks-docs/pricings/pricing-01",
    title: "Header",
  },
};
