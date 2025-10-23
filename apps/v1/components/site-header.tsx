import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { DiscordLink, GitHubLink } from "@/components/social-icon"
import { Separator } from "@/registry/ui/separator"

import { CommandMenu } from "./command-menu"

export function SiteHeader() {
  const pageTree = source.pageTree

  return (
    <header
      className={cn(
        "bg-background/50 backdrop-blur-lg sticky top-0 z-50 w-full py-3 border-b"
      )}
    >
      <div className="container-wrapper 3xl:fixed:px-0 pl-3 pr-5 md:px-7">
        <div className="3xl:fixed:container flex items-center gap-1.5 **:data-[slot=separator]:!h-4">
          <button className="lg:flex py-0 flex h-10 items-center justify-center hover:bg-input/50 px-2 rounded-sm hover:cursor-default select-none">
            <Link href="/" className="hover:cursor-default select-none">
              <Icons.nameLogo className="size-30 h-10" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </button>

          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu navItems={siteConfig.navItems} />
            </div>
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <GitHubLink />
            <DiscordLink />
            <Separator orientation="vertical" className="3xl:flex hidden" />
            <Separator orientation="vertical" />
            <ModeSwitcher />
          </div>
          <Separator orientation="vertical" className="lg:hidden block mr-2" />
          <MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
        </div>
      </div>
    </header>
  )
}
