import { MdKeyboardArrowRight } from "react-icons/md";
import { ArrowLeft, Book } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Icons } from "@/components/icons";
import Link from "next/link";

const docsLinks = [
  { title: "Documentation", href: "/docs" },
  { title: "GitHub", href: "https://github.com/" },
  { title: "Discord", href: "https://discord.com/" },
  { title: "Twitter", href: "https://twitter.com/" },
];

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
  );
}

function ContentLinks() {
  return (
    <div className="max-w-md mx-auto px-6 sm:px-0 ">
      {docsLinks.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className="border-b flex items-center justify-between py-7 gap-x-8"
        >
          <div className="flex items-start gap-4">
            <div className="border border-orange-400 bg-orange-400/60 rounded-md p-2 mt-1">
              <Book className="size-4" />
            </div>

            <div>
              <h4 className="text-foreground">Documentation</h4>
              <p className="text-sm text-muted-foreground mt-1.5 line-clamp-1">
                Learn how to integrate our tools with your web apps
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
  );
}
