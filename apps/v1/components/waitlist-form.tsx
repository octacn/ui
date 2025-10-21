"use client";

import { useForm } from "react-hook-form";
import {
  ComponentProps,
  useActionState,
  useEffect,
  useRef,
  useTransition,
} from "react";
import * as z from "zod";
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
import { waitlistSchema } from "@/schema/waitlist-schema";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import Highlighter from "@/registry/components/highlighter";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitWaitlistForm } from "@/app/waitlist/waitlist-action";

type FormValues = z.infer<typeof waitlistSchema>;

const linkItems = [
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Blocks",
    href: "/blocks-docs/blocks",
  },
  {
    name: "Authentication",
    href: "/auth-docs/authentication",
  },
  {
    name: "Components",
    href: "/docs/components",
  },
  {
    name: "UI Elements",
    href: "/docs/ui-elements",
  },
  {
    name: "Forms",
    href: "/docs/forms",
  },
  {
    name: "Tables",
    href: "/docs/tables",
  },
  {
    name: "Charts",
    href: "/docs/charts",
  },
  {
    name: "Navigation",
    href: "/docs/navigation",
  },
  {
    name: "Layouts",
    href: "/docs/layouts",
  },
  {
    name: "Modals & Dialogs",
    href: "/docs/modals",
  },
  {
    name: "Buttons",
    href: "/docs/buttons",
  },
  {
    name: "Inputs",
    href: "/docs/inputs",
  },
  {
    name: "Alerts",
    href: "/docs/alerts",
  },
  {
    name: "Avatars",
    href: "/docs/avatars",
  },
  {
    name: "Badges",
    href: "/docs/badges",
  },
  {
    name: "Switches",
    href: "/docs/switches",
  },
  {
    name: "Tabs",
    href: "/docs/tabs",
  },
  {
    name: "Tooltips",
    href: "/docs/tooltips",
  },
];

export function WaitlistForm() {
  const [state, formAction] = useActionState(submitWaitlistForm, {
    message: "",
  });

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  useEffect(() => {
    toast.success(state.message);
  }, [state]);

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
    <div className="w-full flex flex-col gap-y-14 justify-center items-center font-inter font-medium tracking-wide text-base">
      <div className="bg-surface px-8 py-6 border rounded-lg shadow-2xl w-fit max-w-md">
        <h2 className="text-3xl text-foreground/90 underline decoration-1 decoration-wavy underline-offset-8 text-center decoration-orange-400">
          Join Our Waitlist
        </h2>

        <p className="text-muted-foreground text-center my-4">
          Be One of the First to Discover What&apos;s Coming!
        </p>

        <Form {...form}>
          <form ref={formRef} action={formAction} onSubmit={onSubmit}>
            <div className="space-y-5 my-6 text-foreground/80">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="*:not-first:mt-1">
                    <FormLabel>
                      <span className="text-destructive">*</span> Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id={"name"}
                        placeholder="Sahil Kumar Dev"
                        className="h-12 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Full Name
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="*:not-first:mt-1">
                    <FormLabel>
                      <span className="text-destructive">*</span> Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        id={"email"}
                        placeholder="ui.octacn@gmail.com"
                        className="h-12 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80"
                        required
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
            </div>

            <button
              disabled={isPending}
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium shadow-sm bg-background border text-base font-inter tracking-wide hover:cursor-pointer w-full transition-all duration-300 hover:-translate-y-1"
            >
              {isPending ? "Sending..." : "Join the Waitlist"}
            </button>
          </form>
        </Form>

        <div className="flex items-center justify-center">
          <p className="text-muted-foreground text-center mt-4 ml-4">
            Explore Pro Components{" "}
            <Link
              href="/"
              target="_blank"
              className="hover:text-orange-400 group whitespace-nowrap inline-flex items-center gap-0.5 transition-colors duration-200"
            >
              pro.octacn.com
              <RiArrowRightUpLine
                className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 size-5"
                aria-hidden="true"
              />
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        <h4 className="text-2xl text-foreground/90">
          Check Out More{" "}
          <Highlighter padding={[6, 10]} color="orange">
            Products
          </Highlighter>
        </h4>

        <div className="mt-8 gap-5 grid grid-cols-5">
          {linkItems.map((item, idx) => (
            <ExternalLink key={idx} href={item.href}>
              • {item.name}
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExternalLink({
  className,
  children,
  href,
  ...props
}: ComponentProps<"a">) {
  return (
    <Link
      href={href || "/"}
      className={cn(
        "hover:text-orange-400 group inline-flex items-center gap-0.5 transition-colors duration-200 font-medium text-muted-foreground text-nowrap",
        className
      )}
      {...props}
    >
      <div className="truncate">{children}</div>
      <RiArrowRightUpLine
        className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 size-4"
        aria-hidden="true"
      />
    </Link>
  );
}
