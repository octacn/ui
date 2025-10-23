import { cn } from "@/lib/utils"

export default function PaperBackground({
  className,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-background dark:bg-black overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute"
        viewBox="0 0 900 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="heroTextBlur"
            x="-50%"
            y="-50%"
            width="250%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feTurbulence baseFrequency="0.7" numOctaves="4" result="noise" />

            <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
              <feFuncA type="discrete" tableValues="0.03 0.06 0.09 0.12" />
            </feComponentTransfer>
          </filter>
        </defs>

        <g>
          <ellipse
            cx="300"
            cy="350"
            rx="400"
            ry="200"
            filter="url(#heroTextBlur)"
            opacity="0.5"
          />
          <ellipse
            cx="350"
            cy="320"
            rx="500"
            ry="250"
            filter="url(#heroTextBlur)"
            opacity="0.4"
          />
          <ellipse
            cx="400"
            cy="300"
            rx="600"
            ry="300"
            filter="url(#heroTextBlur)"
            opacity="0.2"
          />
        </g>
      </svg>
    </div>
  )
}
