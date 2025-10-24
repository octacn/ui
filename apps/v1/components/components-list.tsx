import Link from "next/link"

import { source } from "@/lib/source"

export function ComponentsList({ name }: { name: string }) {
  const components = source.pageTree.children.find(
    (page) => page.$id === name.toLowerCase()
  )

  if (components?.type !== "folder") {
    return
  }

  const list = components.children.filter(
    (component) => component.type === "page"
  )

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20 text-base/normal font-inter tracking-wide">
      {list.map((component, idx) => (
        <div key={component.$id} className="flex gap-1">
          {1 + idx}.
          <Link
            href={component.url}
            className="underline-offset-4 hover:underline hover:text-muted-foreground"
          >
            <span>{component.name}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export function FullComponentsList() {
  const folders = source.pageTree.children.filter(
    (item) => item.type === "folder"
  )

  return (
    <div className="space-y-8">
      {folders.map((folder) => {
        const components = folder.children.filter(
          (component) => component.type === "page"
        )

        if (components.length === 0) {
          return null
        }

        return (
          <div key={folder.$id} className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              {folder.name}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-5 xl:gap-x-20 text-base/normal font-inter tracking-wide">
              {components.map((component, idx) => (
                <div key={idx} className="flex gap-1">
                  {1 + idx}.
                  <Link
                    href={component.url}
                    className="underline-offset-4 hover:underline hover:text-muted-foreground capitalize truncate"
                  >
                    <span>{component.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
