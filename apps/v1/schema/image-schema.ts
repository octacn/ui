import z from "zod"

export const imageCardSchema = z.object({
  docs: z.string(),
  title: z.string(),
  type: z.enum(["block", "template"]),
  name: z.string().optional(),
  image: z.string().optional(),
  preview: z.string().optional(),
})

export const imageCarouselSchema = z.object({
  images: z.array(z.object({ image: z.string() })),
  name: z.string().optional(),
  type: z.enum(["view", "docs"]),
  preview: z.string(),
  repository: z.string(),
  owner: z.string().optional(),
  branch: z.string().optional(),
})
