import { CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/registry/ui/card"

const ACCENT = "#C6FF3A"

interface PricingCardProps {
  id: string
  name: string
  time: string
  prices: string
  discount?: string
  features: string[]
  className?: string
  isPopular?: boolean
  description?: string
}

export default function PricingCard({
  name,
  time,
  prices,
  features,
  discount,
  isPopular,
  className,
  description,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 flex flex-col justify-between h-full",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -right-8 top-4 rotate-45 bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-1 text-xs font-bold text-black z-10">
          POPULAR
        </div>
      )}

      <div>
        <CardHeader>
          <h4 className="text-lg font-semibold tracking-wide text-gray-100 mb-2">
            {name}
          </h4>

          <div className="mb-4">
            <span className="text-2xl font-bold text-white">{prices}</span>
            <span className="text-sm text-gray-400 ml-2">per video</span>
          </div>

          {discount && (
            <div className="text-green-400 font-medium text-sm mb-4">
              {discount}
            </div>
          )}

          <div className="flex gap-2 mb-4">
            <Button
              className="flex-1 text-sm"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                border: "1px solid #333",
              }}
            >
              View Example
            </Button>

            <Button
              className="flex-1 text-sm"
              style={{
                backgroundColor: ACCENT,
                color: "#000",
              }}
            >
              Delivery: {time}
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {description && (
            <p className="mb-4 text-sm text-gray-300">{description}</p>
          )}

          <ul className="space-y-3">
            {features?.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: ACCENT }}
                />
                <span className="text-sm text-gray-200">{feature}</span>
              </li>
            )) ?? null}
          </ul>
        </CardContent>
      </div>

      <CardFooter>
        <Button
          className="w-full font-semibold"
          size="lg"
          style={{
            backgroundColor: ACCENT,
            color: "#000",
          }}
        >
          Select Plan
        </Button>
      </CardFooter>
    </Card>
  )
}
