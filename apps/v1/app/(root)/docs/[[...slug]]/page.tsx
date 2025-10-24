import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { getBreadcrumbItems } from "fumadocs-core/breadcrumb"
import type { BreadcrumbItem } from "fumadocs-core/breadcrumb"
import { findNeighbour } from "fumadocs-core/page-tree"

import { replaceComponentSource } from "@/lib/docs"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsEditButton, DocsIssueButton } from "@/components/docs-button"
import { DocsCopyPage } from "@/components/docs-copy-button"
import { DocsTableOfContents } from "@/components/docs-toc"
import { OpenInAgency } from "@/components/open-in-agency"
import ProLibraryCta from "@/components/pro-library-cta"
import { Button } from "@/registry/ui/button"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const page = source.getPage((await params).slug)

  if (!page) {
    notFound()
  }

  const doc = page.data
  const path = page.path

  const MDX = doc.body
  const neighbours = findNeighbour(source.pageTree, page.url)

  const breadcrumbs = getBreadcrumbItems(page.url, source.pageTree, {
    includeRoot: true,
    includePage: true,
  })

  const lastBreadcrumb = breadcrumbs.at(-1)

  const resolveBreadcrumbName = (item: BreadcrumbItem): string => {
    if (typeof item.name === "string") {
      return item.name
    }

    if (typeof item.name === "number") {
      return `${item.name}`
    }

    return doc.title
  }

  return (
    <div
      data-slot="docs"
      className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-9 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            {breadcrumbs.length > 1 ? (
              <nav aria-label="Breadcrumb" className="text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-1 text-sm">
                  {breadcrumbs.map((item) => {
                    const label = resolveBreadcrumbName(item)
                    const key = item.url ?? label
                    const isLast = item === lastBreadcrumb

                    return (
                      <li key={key} className="flex items-center gap-1">
                        {isLast ? (
                          <span
                            aria-current="page"
                            className="text-foreground font-medium"
                          >
                            {label}
                          </span>
                        ) : item.url ? (
                          <Link
                            href={item.url}
                            className="hover:text-foreground transition-colors"
                          >
                            {label}
                          </Link>
                        ) : (
                          <span>{label}</span>
                        )}
                        {!isLast ? <span aria-hidden="true">/</span> : null}
                      </li>
                    )
                  })}
                </ol>
              </nav>
            ) : null}
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {doc.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsCopyPage
                    page={await replaceComponentSource(
                      await doc.getText("raw")
                    )}
                    url={absoluteUrl(page.url)}
                  />
                  {neighbours.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={neighbours.previous.url}>
                        <IconArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={neighbours.next.url}>
                        <span className="sr-only">Next</span>
                        <IconArrowRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {doc.description && (
                <p className="text-muted-foreground text-[1.05rem] sm:text-base">
                  {doc.description}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
          <ProLibraryCta />
        </div>
        <div className="mx-auto hidden h-16 w-full max-w-3xl items-center gap-2 px-4 sm:flex md:px-0">
          {neighbours.previous && (
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="shadow-none"
            >
              <Link href={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button
              variant="secondary"
              size="sm"
              className="ml-auto shadow-none"
              asChild
            >
              <Link href={neighbours.next.url}>
                {neighbours.next.name} <IconArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--footer-height))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />

        <div className="grid gap-y-0.5 px-6 pt-2">
          {doc.toc?.length ? (
            <div className="no-scrollbar overflow-y-auto">
              <DocsTableOfContents toc={doc.toc} />
              <div className="h-4" />
            </div>
          ) : null}
          <h4 className="text-sm font-medium mb-2">Contribute</h4>
          <DocsEditButton path={path} />
          <DocsIssueButton path={path} />
          <OpenInAgency className="mt-8" />
        </div>
      </div>
    </div>
  )
}
