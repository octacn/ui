import Link from "next/link"
import { RiArrowRightUpLine } from "react-icons/ri"

import { source } from "@/lib/source"
import { cn } from "@/lib/utils"

export function ComponentsList({
  name,
  grid,
  folder,
}: {
  name: string
  grid?: boolean
  folder?: boolean
}) {
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
    <>
      {folder && <Heading>{components.name}</Heading>}
      <div
        className={cn(
          "grid md:gap-x-8 grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-16 xl:gap-x-20 text-base/normal font-inter tracking-wide",
          grid ? "lg:gap-y-2.5" : "md:grid-cols-3 lg:gap-y-8"
        )}
      >
        {list.map((component, idx) => (
          <ComponentLink {...{ component, idx }} key={idx} />
        ))}
      </div>
    </>
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
            <Heading>{folder.name}</Heading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-5 xl:gap-x-20 text-base/normal font-inter tracking-wide">
              {components.map((component, idx) => (
                <ComponentLink {...{ component, idx }} key={idx} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function FolderComponentsList({ names }: { names: string[] }) {
  return (
    <div className="space-y-8">
      {names.map((name) => (
        <div className="space-y-3" key={name}>
          <ComponentsList name={`kit/${name}`} folder grid />
        </div>
      ))}
    </div>
  )
}

function ComponentLink({ ...props }: { component: any; idx: number }) {
  return (
    <Link
      href={props.component.url}
      className={cn(
        "inline-flex group items-center gap-0.5",
        "font-inter tracking-wide font-normal capitalize whitespace-nowrap hover:text-muted-foreground",
        "transition-colors duration-200 w-fit"
      )}
    >
      <span className="mr-0.5">{1 + props.idx}.</span>
      {props.component.name}
      <span className="inline-flex overflow-hidden max-w-0 group-hover:max-w-[1.25rem] transition-[max-width] duration-200 ease-out align-middle data-[active=true]:group-hover:max-w-0 pr-0.5">
        <RiArrowRightUpLine
          className="text-muted-foreground size-4.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-foreground">{children}</h3>
}
