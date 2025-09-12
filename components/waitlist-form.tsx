"use client";

import { useForm } from "react-hook-form";
import { useActionState, useRef, useTransition } from "react";
import * as z from "zod";
import { Button } from "@/registry/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form";
import { Input } from "@/registry/ui/input";
import { submitWaitlistForm } from "@/actions/waitlist-action";
import { waitlistSchema } from "@/schema/waitlist-schema";

type FormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [state, formAction] = useActionState(submitWaitlistForm, {
    message: "",
  });

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => {
      formAction(new FormData(formRef.current!));
      form.reset();
    });
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="max-w-sm w-full mx-auto space-y-6 border px-10 py-5 rounded-lg">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Join the Waitlist</h2>
        <p className="text-muted-foreground">
          Be the first to know when we launch.
        </p>
        {state.message && (
          <div className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
            {state.message}
          </div>
        )}
      </div>

      <Form {...form}>
        <form
          ref={formRef}
          action={formAction}
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  Your email
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Sending..." : "Join the Waitlist"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
