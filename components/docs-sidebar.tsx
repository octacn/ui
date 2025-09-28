// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useMemo } from "react";

// import type { docsSource } from "@/lib/source";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/registry/ui/sidebar";
// import { Badge } from "@/registry/ui/badge";
// import { newPages, proPages, comingSoonPages } from "@/lib/page-type";
// import { siteConfig } from "@/lib/config";
// import { Icons } from "@/components/icons";
// import { RiArrowRightUpLine } from "react-icons/ri";

// const SOCIAL_ITEMS = [
//   {
//     id: 1,
//     href: siteConfig.links.linkedin,
//     title: "Linkedin",
//     icon: <Icons.linkedin className="text-[#0077B5] size-5 mr-0.5" />,
//   },
//   {
//     id: 2,
//     href: siteConfig.links.twitter,
//     title: "Twitter",
//     icon: <Icons.x className="text-foreground size-5 mr-0.5" />,
//   },
// ] as const;

// // Shared classes to avoid repetition
// const SIDEBAR_MENU_BUTTON_CLASSES = `
//   data-[active=true]:bg-accent data-[active=true]:border-accent hover:bg- 
//   3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] overflow-visible 
//   border border-transparent text-[0.8rem] after:absolute after:inset-x-0 
//   after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:text-orange-400 
//   hover:text-orange-400/90 font-inter tracking-wide font-normal capitalize 
//   w-fit group whitespace-nowrap inline-flex items-center gap-0.5 
//   transition-colors duration-200 active:text-orange-400/90
// `
//   .replace(/\s+/g, " ")
//   .trim();

// const BADGE_CLASSES = {
//   new: "capitalize bg-yellow-500 text-black py-0.5 rounded-md tracking-wide font-semibold select-none",
//   pro: "capitalize bg-green-500 text-black py-0.5 rounded-md tracking-wide font-semibold select-none",
//   comingSoon:
//     "bg-transparent capitalize text-muted-foreground tracking-wide font-semibold select-none font-inter italic",
// } as const;

// interface DocsSidebarProps extends React.ComponentProps<typeof Sidebar> {
//   tree: typeof docsSource.pageTree;
//   docs: typeof docsSource.pageTree;
// }

// interface PageBadgeProps {
//   url: string;
// }

// interface SidebarSectionProps {
//   items: typeof docsSource.pageTree.children;
//   pathname: string;
// }

// interface SocialLinksProps {
//   href: string;
//   icon: React.ReactElement;
// }

// export function DocsSidebar({ tree, docs, ...props }: DocsSidebarProps) {
//   const pathname = usePathname();

//   return (
//     <Sidebar
//       className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
//       collapsible="none"
//       {...props}
//     >
//       <SidebarContent className="px-2 pb-12 no-scrollbar">
//         <div className="h-(--top-spacing) shrink-0" />

//         <SidebarGroup className="font-inter tracking-wide">
//           <SidebarGroupLabel className="text-sm text-foreground">
//             Social Links
//           </SidebarGroupLabel>

//           <SidebarGroupContent className="text-muted-foreground px-2 space-y-2.5 mt-1.5">
//             {SOCIAL_ITEMS.map((item) => (
//               <SocialLinks key={item.id} href={item.href} icon={item.icon} />
//             ))}
//           </SidebarGroupContent>
//         </SidebarGroup>

//         <SidebarSection items={docs.children} pathname={pathname} />
//         <SidebarSection items={tree.children} pathname={pathname} />
//       </SidebarContent>
//     </Sidebar>
//   );
// }
// function PageBadge({ url }: PageBadgeProps) {
//   const badges = useMemo(() => {
//     const isNew = newPages.includes(url);
//     const isPro = proPages.includes(url);
//     const isComingSoon = comingSoonPages.includes(url);

//     const badgeList = [];

//     if (isNew) {
//       badgeList.push(
//         <Badge key="new" className={BADGE_CLASSES.new}>
//           new
//         </Badge>
//       );
//     }

//     if (isPro) {
//       badgeList.push(
//         <Badge key="pro" className={BADGE_CLASSES.pro}>
//           Pro
//         </Badge>
//       );
//     }

//     if (isComingSoon) {
//       badgeList.push(
//         <Badge
//           key="coming-soon"
//           variant="secondary"
//           className={BADGE_CLASSES.comingSoon}
//         >
//           Coming Soon
//         </Badge>
//       );
//     }

//     return badgeList;
//   }, [url]);

//   return <>{badges}</>;
// }

// function SidebarPageItem({ item, pathname }: { item: any; pathname: string }) {
//   if (item.type !== "page") return null;

//   return (
//     <SidebarMenuItem
//       key={item.url}
//       className="flex items-center justify-between"
//     >
//       <SidebarMenuButton
//         asChild
//         isActive={item.url === pathname}
//         className={SIDEBAR_MENU_BUTTON_CLASSES}
//       >
//         <Link href={item.url}>
//           {item.name}
//           <RiArrowRightUpLine
//             className="text-orange-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 data-[active=true]:group-hover:opacity-0"
//             aria-hidden="true"
//             size={16}
//           />
//         </Link>
//       </SidebarMenuButton>
//       <PageBadge url={item.url} />
//     </SidebarMenuItem>
//   );
// }

// function SidebarSection({ items, pathname }: SidebarSectionProps) {
//   return (
//     <>
//       {items.map((item) => (
//         <SidebarGroup key={item.$id}>
//           <SidebarGroupLabel className="text-muted-foreground font-inter text-sm tracking-wide">
//             {item.name}
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             {item.type === "folder" && (
//               <SidebarMenu className="gap-0.5">
//                 {item.children.map((child) => (
//                   <SidebarPageItem
//                     key={child.url}
//                     item={child}
//                     pathname={pathname}
//                   />
//                 ))}
//               </SidebarMenu>
//             )}
//           </SidebarGroupContent>
//         </SidebarGroup>
//       ))}
//     </>
//   );
// }

// function SocialLinks({ href, icon }: SocialLinksProps) {
//   return (
//     <Link
//       href={href}
//       target="_blank"
//       className="group whitespace-nowrap inline-flex items-center gap-0.5 transition-colors duration-200"
//       rel="noopener noreferrer"
//     >
//       {icon}
//       <span className="font-inter text-sm tracking-wide hover:underline underline-offset-7 decoration-wavy decoration-1 mb-0.5 hover:text-orange-400">
//         @Sahilkumardev
//       </span>
//       <RiArrowRightUpLine
//         className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 size-5"
//         aria-hidden="true"
//       />
//     </Link>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { docsSource } from "@/lib/source";
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
import { siteConfig } from "@/lib/config";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Icons } from "./icons";

const socialItems = [
  {
    id: 1,
    href: siteConfig.links.linkedin,
    title: "Linkedin",
    icon: <Icons.linkedin className="text-[#0077B5] size-5 mr-0.5" />,
  },
  {
    id: 2,
    href: siteConfig.links.twitter,
    title: "Twitter",
    icon: <Icons.x className="text-foreground size-5 mr-0.5" />,
  },
];

export function DocsSidebar({
  tree,
  docs,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: typeof docsSource.pageTree;
  docs: typeof docsSource.pageTree;
}) {
  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="px-2 pb-12 no-scrollbar">
        <div className="h-(--top-spacing) shrink-0" />

        <SidebarGroup className="font-inter tracking-wide">
          <SidebarGroupLabel className="text-sm text-foreground">
            Social Links
          </SidebarGroupLabel>

          <SidebarGroupContent className="text-muted-foreground px-2 space-y-2.5 mt-1.5">
            {socialItems.map((item) => (
              <SocialLinks key={item.id} href={item.href} icon={item.icon} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        {docs.children.map((item) => (
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
                            className="data-[active=true]:bg-accent data-[active=true]:border-accent hover:bg- 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] overflow-visible border border-transparent text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:text-orange-400 hover:text-orange-400/90 font-inter tracking-wide font-normal capitalize w-fit group whitespace-nowrap inline-flex items-center gap-0.5 transition-colors duration-200 active:text-orange-400/90"
                          >
                            <Link href={item.url}>
                              {item.name}
                              <RiArrowRightUpLine
                                className="text-orange-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 data-[active=true]:group-hover:opacity-0"
                                aria-hidden="true"
                                size={16}
                              />
                            </Link>
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
                            <Badge
                              variant={"secondary"}
                              className="bg-transparent capitalize text-muted-foreground tracking-wide font-semibold select-none font-inter italic"
                            >
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
                            className="data-[active=true]:bg-accent data-[active=true]:border-accent hover:bg- 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] overflow-visible border border-transparent text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:text-orange-400 hover:text-orange-400/90 font-inter tracking-wide font-normal capitalize w-fit group whitespace-nowrap inline-flex items-center gap-0.5 transition-colors duration-200 active:text-orange-400/90"
                          >
                            <Link href={item.url}>
                              {item.name}
                              <RiArrowRightUpLine
                                className="text-orange-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 data-[active=true]:group-hover:opacity-0"
                                aria-hidden="true"
                                size={16}
                              />
                            </Link>
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
                            <Badge
                              variant={"secondary"}
                              className="bg-transparent capitalize text-muted-foreground tracking-wide font-semibold select-none font-inter italic"
                            >
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

function SocialLinks({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactElement;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group whitespace-nowrap inline-flex items-center gap-0.5 transition-colors duration-200"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="font-inter text-sm tracking-wide hover:underline underline-offset-7 decoration-wavy decoration-1 mb-0.5 hover:text-orange-400">
        @Sahilkumardev
      </span>
      <RiArrowRightUpLine
        className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 size-5"
        aria-hidden="true"
      />
    </Link>
  );
}
