"use client";

import { Plus } from "lucide-react";
import { Heading } from "@/components/heading";
import { Box, BoxWrapper } from "@/components/box";
import { createBorder } from "@/components/create-border";

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
    <BoxWrapper className="pb-10 overflow-hidden">
      <Heading
        heading="Frequently Asked Questions"
        description="Discover quick and comprehensive answers to common questions about our platform, services, and features"
      />

      <Box className="relative grid grid-cols-1 md:grid-cols-2 pt-0 md:pt-0 mt-14">
        <>
          {createBorder("vertical", "left", "absolute inset-y-0 left-1/2")}
          {createBorder("horizontal", "top", "absolute inset-x-0 top-1/3")}
          {createBorder("horizontal", "top", "absolute inset-x-0 top-2/3")}
        </>

        {faqItems.map((item, idx) => (
          <AccordionQuestion {...item} key={idx} />
        ))}
      </Box>
    </BoxWrapper>
  );
}

function AccordionQuestion({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) {
  return (
    <div className="bg-surface rounded-md border last:border-b mx-16 my-10 font-inter font-medium text-base text-foreground/90 tracking-wide">
      <h4 className="text-lg hover:no-underline px-4 py-3 flex justify-between items-center">
        {question} <Plus className="size-5 text-muted-foreground" />
      </h4>
      <p className="border-dashed text-muted-foreground border-t text-sm px-4 py-3">
        {answer}
      </p>
    </div>
  );
}
