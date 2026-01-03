import { z } from "zod"

export const waitlistSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  name: z.string({
    message: "Please enter your name.",
  }),
})
