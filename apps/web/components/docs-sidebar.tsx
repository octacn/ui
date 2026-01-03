"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiArrowRightUpLine } from "react-icons/ri"

import { newPages, proPages } from "@/lib/page-type"
import type { source } from "@/lib/source"
import { Badge } from "@/registry/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/ui/sidebar"

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: typeof source.pageTree
}) {
  const pathname = usePathname()

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="px-2 pb-12 no-scrollbar">
        <div className="h-(--top-spacing) shrink-0" />

        {tree.children.map((item) => (
          <SidebarGroup key={item.$id}>
            <SidebarGroupLabel className="text-muted-foreground font-inter text-sm tracking-wide">
              {item.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.type === "folder" && (
                <SidebarMenu className="gap-0.5">
                  {item.children.map((item) => {
                    if (item.type !== "page") return null

                    const isNew = newPages.includes(item.url)
                    const isPro = proPages.includes(item.url)

                    return (
                      <SidebarMenuItem
                        key={item.url}
                        className="flex items-center justify-between"
                      >
                        <SidebarMenuButton
                          asChild
                          isActive={item.url === pathname}
                          className="data-[active=true]:bg-accent data-[active=true]:border-accent hover:bg- 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] overflow-visible border border-transparent text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:text-orange-400 hover:text-orange-400/90 font-inter tracking-wide font-normal capitalize w-fit group whitespace-nowrap inline-flex items-center gap-0.5 transition-colors duration-200 active:text-orange-400/90"
                        >
                          <Link
                            href={item.url}
                            className="inline-flex justify-center"
                          >
                            {item.name}
                            <span className="inline-flex overflow-hidden max-w-0 group-hover:max-w-[1.25rem] transition-[max-width] duration-200 ease-out align-middle data-[active=true]:group-hover:max-w-0 pr-0.5">
                              <RiArrowRightUpLine
                                className="text-orange-400/90 size-4.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                                aria-hidden="true"
                              />
                            </span>

                            {isNew && (
                              <div className="relative inline-flex h-2.5 w-2.5 ml-0.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/70 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                              </div>
                            )}
                          </Link>
                        </SidebarMenuButton>

                        {isPro && (
                          <Badge className="capitalize bg-green-500 text-black py-0.5 rounded-md tracking-wide font-semibold select-none">
                            Pro
                          </Badge>
                        )}
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
