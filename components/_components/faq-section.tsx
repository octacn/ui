"use client";

import { Box, BoxWrapper } from "@/components/box";
import { OpenInAgency } from "../open-in-agency";
import { Heading } from "@/components/heading";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
  },
  {
    id: "item-2",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.",
  },
  {
    id: "item-3",
    question: "Can I change or cancel my order?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.",
  },
  {
    id: "item-4",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
  },
  {
    id: "item-5",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.",
  },
];

export default function FaqSection() {
  return (
    <BoxWrapper className="pb-10">
      <Heading
        heading="Frequently Asked Questions"
        description="Discover quick and comprehensive answers to common questions about our platform, services, and features"
      />

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
        <AccordionQuestion />
        <div className="relative w-full h-full hidden md:block">
          <div className="w-full h-full border bg-surface rounded-xl">
            <ContactForm />
          </div>

          <div className="absolute top-0 right-0 border-l-[20px] border-b-[20px] border-background rounded-bl-xl rounded-tr-xl w-72 shadow-[-1px_1px_0_0_#e5e5e5] dark:shadow-[-1px_1px_0_0_#262626]">
            <div className="bg-background w-2 h-2 absolute bottom-0" />
            <OpenInAgency className="rounded-tl-none rounded-br-none" />
          </div>
        </div>
      </Box>
    </BoxWrapper>
  );
}

function AccordionQuestion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-5"
      defaultValue="item-1"
    >
      {faqItems.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="bg-surface rounded-md border last:border-b"
        >
          <AccordionTrigger className="text-lg hover:no-underline font-inter font-medium tracking-wide px-4 py-3 hover:cursor-pointer">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base font-inter border-dashed text-muted-foreground border-t px-4 py-3">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function ContactForm() {
  return (
    <div className="px-8 py-6">
      <h4 className="font-inter text-foreground/90 text-xl underline underline-offset-6 decoration-1">
        Contact From
      </h4>

      <div className="mt-5 grid grid-cols-2">
        <div className="space-y-4">
          <div>
            <Label
              htmlFor={"email"}
              className="font-inter text-sm font-normal tracking-wide mb-1.5"
            >
              Email
            </Label>
            <Input
              id={"email"}
              placeholder="Email"
              type="email"
              className="focus-visible:border-orange-500 focus-visible:ring-0"
            />
          </div>

          <div>
            <Label
              htmlFor={"email"}
              className="font-inter text-sm font-normal tracking-wide mb-1.5"
            >
              Email
            </Label>
            <Input
              id={"email"}
              placeholder="Email"
              type="email"
              className="focus-visible:border-orange-500 focus-visible:ring-0"
            />
          </div>

          <div>
            <Label
              htmlFor={"email"}
              className="font-inter text-sm font-normal tracking-wide mb-1.5"
            >
              Email
            </Label>
            <Input
              id={"email"}
              placeholder="Email"
              type="email"
              className="focus-visible:border-orange-500 focus-visible:ring-0"
            />
          </div>
        </div>
      </div>

      <Button
        className="w-full mt-6 font-inter text-base tracking-wide"
        size={"lg"}
      >
        Submit
      </Button>
    </div>
  );
}
