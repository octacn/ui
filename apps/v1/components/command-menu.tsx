"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import registryData from "@/registry.json"
import { SearchablePageItem } from "@/schema/shadcn"
import { IconArrowRight } from "@tabler/icons-react"
import { CornerDownLeftIcon, LucideBlocks, SearchIcon } from "lucide-react"
import { LuLayoutTemplate } from "react-icons/lu"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"

export function CommandMenu({
  navItems,
}: {
  navItems?: { href: string; label: string }[]
}) {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  const searchItems = React.useMemo(() => {
    const items = registryData.items

    const grouped: Record<string, SearchablePageItem["items"]> = {}

    items.forEach((item) => {
      const category = item.type.replace("registry:", "")

      if (!grouped[category]) {
        grouped[category] = []
      }

      const filterUrl =
        category === "ui"
          ? "components"
          : category === "block"
            ? "blocks"
            : "kit"

      if (!filterUrl) {
        return
      }

      grouped[category].push({
        name: item.name,
        url: `/docs/${filterUrl}/${item.name}`,
      })
    })

    const pageItems = Object.entries(grouped).map(([type, items]) => ({
      name: type,
      type: type,
      items: items,
    }))

    return pageItems.map((item) => [item.type, [item]] as const)
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        onClick={() => setOpen(true)}
        className={cn(
          "py-2 rounded-full md:min-w-3xs relative pl-7",
          "md:dark:bg-input/30 border-input flex md:border bg-transparent md:shadow-xs md:focus:outline-app/30 md:focus:outline-1"
        )}
      >
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
          <SearchIcon size={16} aria-hidden="true" />
        </div>
        <span className="hidden lg:block text-muted-foreground text-xs max-w-[11.5rem] whitespace-nowrap truncate">
          Get Template, blocks, & layout..
        </span>

        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3">
          <kbd className="text-muted-foreground hidden md:inline-flex font-[inherit] text-sm font-medium">
            <span className="opacity-70">⌘</span>K
          </kbd>
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search documentation...</DialogTitle>
          <DialogDescription>Search for a command to run...</DialogDescription>
        </DialogHeader>
        <Command className="**:data-[slot=command-input-wrapper]:bg-input/50 **:data-[slot=command-input-wrapper]:border-input rounded-none bg-transparent **:data-[slot=command-input]:!h-9 **:data-[slot=command-input]:py-0 **:data-[slot=command-input-wrapper]:mb-0 **:data-[slot=command-input-wrapper]:!h-9 **:data-[slot=command-input-wrapper]:rounded-md **:data-[slot=command-input-wrapper]:border">
          <CommandInput placeholder="Search documentation..." />
          <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
            <CommandEmpty className="text-muted-foreground py-12 text-center text-sm">
              No results found.
            </CommandEmpty>
            {navItems && navItems.length > 0 && (
              <CommandGroup
                heading="Pages"
                className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
              >
                {navItems.map((item) => (
                  <CommandMenuItem
                    key={item.href}
                    value={`Navigation ${item.label}`}
                    keywords={["nav", "navigation", item.label.toLowerCase()]}
                    onSelect={() => {
                      runCommand(() => router.push(item.href))
                    }}
                  >
                    <IconArrowRight />
                    {item.label}
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            )}

            {searchItems.map(([type, pageItemGroups], idx) => {
              const displayName =
                type === "component"
                  ? "Components"
                  : type === "block"
                    ? "Blocks"
                    : type === "ui"
                      ? "Ui"
                      : type.charAt(0).toUpperCase() + type.slice(1) + "s"

              return (
                <CommandGroup
                  key={idx}
                  heading={displayName}
                  className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
                >
                  {pageItemGroups.flatMap((pageItem) =>
                    pageItem.items.map((item, itemIdx) => (
                      <CommandMenuItem
                        key={`${idx}-${itemIdx}`}
                        value={item.name}
                        keywords={[displayName, type]}
                        onSelect={() => runCommand(() => router.push(item.url))}
                      >
                        {type === "component" ? (
                          <IconArrowRight />
                        ) : type === "block" ? (
                          <LucideBlocks />
                        ) : type === "ui" ? (
                          <div className="border-muted-foreground aspect-square size-4 rounded-full border border-dashed" />
                        ) : (
                          <LuLayoutTemplate />
                        )}
                        {item.name.replaceAll("-", " ")}
                      </CommandMenuItem>
                    ))
                  )}
                </CommandGroup>
              )
            })}
          </CommandList>
        </Command>
        <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium dark:border-t-neutral-700 dark:bg-neutral-800">
          <div className="flex items-center gap-2">
            <CommandMenuKbd>
              <CornerDownLeftIcon />
            </CommandMenuKbd>
            Go to Page
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CommandMenuItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof CommandItem>) {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <CommandItem
      ref={ref}
      className={cn(
        "data-[selected=true]:border-input data-[selected=true]:bg-input/50 h-9 rounded-md border border-transparent !px-3 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </CommandItem>
  )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}
