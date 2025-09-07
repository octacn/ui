"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/ui/sidebar";
import { Badge } from "@/registry/ui/badge";
import { newPages, proPages, comingSoonPages } from "@/lib/page-type";

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();

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
                    const isNew = newPages.includes(item.url);
                    const isPro = proPages.includes(item.url);
                    const isComingSoonPages = comingSoonPages.includes(
                      item.url
                    );

                    return (
                      item.type === "page" && (
                        <SidebarMenuItem
                          key={item.url}
                          className="flex items-center justify-between"
                        >
                          <SidebarMenuButton
                            asChild
                            isActive={item.url === pathname}
                            className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] overflow-visible border border-transparent text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:text-orange-500 font-mono capitalize w-fit"
                          >
                            <Link href={item.url}>{item.name}</Link>
                          </SidebarMenuButton>
                          {isNew && (
                            <Badge className="capitalize bg-yellow-500 text-black py-0.5 rounded-md tracking-wide font-semibold select-none">
                              new
                            </Badge>
                          )}
                          {isPro && (
                            <Badge className="capitalize bg-green-500 text-black py-0.5 rounded-md tracking-wide font-semibold select-none">
                              Pro
                            </Badge>
                          )}
                          {isComingSoonPages && (
                            <Badge variant={"secondary"} className="bg-transparent capitalize text-muted-foreground tracking-wide font-semibold select-none font-inter italic">
                              Coming Soon
                            </Badge>
                          )}
                        </SidebarMenuItem>
                      )
                    );
                  })}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
