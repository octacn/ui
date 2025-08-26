import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { GitHubLink } from "./github-icon";
import { ModeSwitcher } from "./mode-switcher";
import { Separator } from "@/registry/components/separator";
import { Button } from "@/registry/components/button";
import { Icons } from "./icons";
import { MainNav } from "@/registry/src/headers/main-nav";

export function SiteHeader() {
  // const colors = getColors();
  // const pageTree = source.pageTree;

  return (
    <header className="bg-background sticky top-0 z-50 w-full py-2">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          {/* <MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          /> */}
          Mobile NAV
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden size-8 lg:flex"
          >
            <Link href="/">
              <Icons.logo className="size-5" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              {/* <CommandMenu
                tree={pageTree}
                colors={colors}
                navItems={siteConfig.navItems}
              /> */}
              Command Menu
            </div>
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <GitHubLink />
            <Separator orientation="vertical" className="3xl:flex hidden" />
            {/* <SiteConfig className="3xl:flex hidden" /> */}
            Site Cnfig
            <Separator orientation="vertical" />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
