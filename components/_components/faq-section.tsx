"use client";

import { GradientBorder } from "@/components/_components/testimonials-section";
import { Box, BoxWrapper } from "@/components/box";
import { Heading } from "@/components/heading";
import { CSSProperties } from "react";
import { Plus } from "lucide-react";

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
  const style: CSSProperties = {
    "--height": "1px",
    "--width": "5px",
    "--background": "#ffffff",
    "--color": "rgba(0, 0, 0, 0.2)",
    "--fade-stop": "90%",
    "--offset": "100px",
    "--color-dark": "rgba(255, 255, 255, 0.5)",
    WebkitMaskComposite: "exclude",
    maskComposite: "exclude",
  } as CSSProperties;

  const styleVertical: CSSProperties = {
    "--height": "5px",
    "--width": "1px",
    "--background": "#ffffff",
    "--color": "rgba(0, 0, 0, 0.2)",
    "--fade-stop": "90%",
    "--offset": "80px",
    "--color-dark": "rgba(255, 255, 255, 0.5)",
    WebkitMaskComposite: "exclude",
    maskComposite: "exclude",
  } as CSSProperties;

  return (
    <BoxWrapper className="pb-10 overflow-hidden">
      <Heading
        heading="Frequently Asked Questions"
        description="Discover quick and comprehensive answers to common questions about our platform, services, and features"
      />

      <GradientBorder top left right bottom>
        <Box className="relative grid grid-cols-1 md:grid-cols-2 pt-0 md:pt-0 mt-14">
          <div
            className="absolute top-1/3 left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
            style={style}
          />
          <div
            className="absolute top-2/3 left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
            style={style}
          />
          <div
            className={
              "absolute top-[calc(var(--offset)/2*-1)] left-1/2 h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] -z-10"
            }
            style={styleVertical}
          />
          {faqItems.map((item, idx) => (
            <AccordionQuestion {...item} key={idx} />
          ))}
        </Box>
      </GradientBorder>
    </BoxWrapper>
  );
}

function AccordionQuestion({
  id,
  answer,
  question,
}: {
  id: string;
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
