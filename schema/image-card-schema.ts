import z from "zod";

export const imageCardSchema = z.object({
  docs: z.string(),
  title: z.string(),
  type: z.enum(["block", "template"]),
  name: z.string().optional(),
  image: z.string().optional(),
  preview: z.string().optional(),
});
