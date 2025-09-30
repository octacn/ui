import { waitlistSchema } from "@/schema/waitlist-schema";

type FormState = {
  message: string;
};

export async function submitWaitlistForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = waitlistSchema.safeParse(formData);

  if (!parsed.success) {
    return { message: "Invalid form data" };
  }

  try {
    const response = await fetch(
      "https://app.router.so/api/endpoints/p8hv3o0e",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ROUTER_API_KEY}`,
        },
        body: JSON.stringify(parsed.data),
      }
    );

    if (!response.ok) {
      return { message: "Failed to submit form" };
    }

    return { message: "Successfully added to waitlist!" };
  } catch {
    return { message: "Failed to submit form. Please try again." };
  }
}
