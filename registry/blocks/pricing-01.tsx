"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/registry/ui/card";
import { Button } from "@/registry/ui/button";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ACCENT = "#C6FF3A";
type Currency = "INR" | "USD";

interface PricingPlan {
  id: string;
  name: string;
  prices: Record<Currency, string>;
  features: string[];
  deliveryTime: string;
  description?: string;
  isPopular?: boolean;
  maxRevisions?: number;
  checkoutUrl?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  currency?: Currency;
  onViewExample?: (planId: string) => void;
  accentColor?: string;
  className?: string;
  showSaveText?: boolean;
  saveText?: Record<Currency, string>;
}

const DEFAULT_SAVE_TEXT: Record<Currency, string> = {
  INR: "Save Flat ₹1,500/-",
  USD: "Save $20",
};

export default function PricingCard({
  plan,
  className = "",
  currency: propCurrency,
  accentColor = ACCENT,
  showSaveText = false,
  saveText = DEFAULT_SAVE_TEXT,
}: PricingCardProps) {
  const [detectedCurrency, setDetectedCurrency] = useState<Currency>("USD");
  const currentCurrency = propCurrency || detectedCurrency;

  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300 justify-between",
        className
      )}
    >
      {plan.isPopular && (
        <div className="absolute -right-8 top-4 rotate-45 bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-1 text-xs font-bold text-black">
          POPULAR
        </div>
      )}
      <div>
        <CardHeader>
          <h4 className="text-base font-inter tracking-wide text-foreground/80">
            {plan.name}
          </h4>
          <h4>
            {plan.prices[currentCurrency]}
            <span className="pb-0.5 text-xs text-muted-foreground ml-1.5">
              per video
            </span>
          </h4>

          {showSaveText && (
            <h5 className="text-xl text-green-400 font-medium absolute top-8 right-10">
              {saveText[currentCurrency]}
            </h5>
          )}

          <div className="flex gap-2 my-4">
            <Button
              className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: "#0a0a0a",
                color: "#ffffff",
                border: "1px solid #333",
              }}
            >
              View Example
            </Button>

            <Button
              className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
              style={{ backgroundColor: accentColor }}
            >
              Delivery Time: {plan.deliveryTime}
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {plan.description && (
            <p className="mb-4 text-sm text-muted-foreground">
              {plan.description}
            </p>
          )}

          <ul className="grid gap-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                <span className="text-sm text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>

      <CardFooter>
        <Button className="w-full" size={"lg"}>
          Select
        </Button>
      </CardFooter>
    </Card>
  );
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : "";
  const tz =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "";
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || ""))
    return "INR";
  return "USD";
}
