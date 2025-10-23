import Link from "next/link"
import { ArrowLeft, Book, LucideBlocks } from "lucide-react"
import { FaTwitter } from "react-icons/fa6"
import { MdKeyboardArrowRight, MdSecurity } from "react-icons/md"

import { Icons } from "@/components/icons"
import { Badge } from "@/registry/ui/badge"

const docsItems = [
  {
    title: "Documentation",
    description: "Learn how to integrate tools with your web apps",
    icon: Book,
    href: "/docs",
  },
  {
    title: "Authentication",
    description: "Explore our authentication methods",
    icon: MdSecurity,
    href: "/auth-docs/auth",
  },
  {
    title: "Blocks",
    description: "Check out our pre-built blocks",
    icon: LucideBlocks,
    href: "/blocks-docs/blocks",
  },
  {
    title: "Pro Octacn",
    description: "Discover the features of Octacn Pro",
    icon: FaTwitter,
    href: "https://pro.octacn.com",
  },
]

export default function NotFound() {
  return (
    <section className="font-inter font-medium text-base tracking-wide min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden px-6 py-10 grid grid-cols-1 place-items-center-safe">
      <div className="max-w-3xl w-full">
        <div className="flex items-center justify-center py-2 md:py-0">
          <Icons.nameLogo className="h-8 sm:h-10 w-auto" />
          <Badge
            variant="secondary"
            className="font-mono text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 border border-code-foreground"
          >
            UI
          </Badge>
        </div>

        <div className="text-center pt-4 pb-2">
          <h3 className="text-orange-400 font-bold tracking-widest">404</h3>
          <h4 className="text-4xl md:text-5xl font-bold mt-0.5 mb-3">
            This page does not exist
          </h4>
          <p className="text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <ContentLinks />
      </div>
    </section>
  )
}

function ContentLinks() {
  return (
    <div className="max-w-md mx-auto px-6 sm:px-0 ">
      {docsItems.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className="border-b flex items-center justify-between py-7 gap-x-8"
        >
          <div className="flex items-start gap-4">
            <div className="border border-orange-400 bg-orange-400/60 rounded-md p-2 mt-1">
              <item.icon className="size-4" />
            </div>

            <div>
              <h4 className="text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground mt-1.5 line-clamp-1">
                {item.description}
              </p>
            </div>
          </div>

          <MdKeyboardArrowRight className="size-5 text-muted-foreground" />
        </Link>
      ))}

      <div className="flex items-center justify-center text-orange-500/80 text-sm mt-6 hover:underline underline-offset-6 decoration-1 decoration-orange-500 hover:text-orange-500/80">
        <Link href={"/"} className="flex items-center gap-x-1">
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </div>
  )
}
