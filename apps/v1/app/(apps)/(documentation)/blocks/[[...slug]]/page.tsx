import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";
// import { absoluteUrl } from "@/lib/utils";

import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { findNeighbour } from "fumadocs-core/server";

import { blocksSource } from "@/lib/source";
import { Button } from "@/registry/ui/button";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import { DocsEditButton } from "@/components/docs-edit-button";
import ProLibraryCta from "@/components/pro-library-cta";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

// export function generateStaticParams() {
//   return blocksSource.generateParams();
// }

// export async function generateMetadata(props: PageProps) {
//   const params = await props.params;
//   let page;
//   try {
//     page = blocksSource.getPage(params.slug);
//   } catch (err) {
//     // Provide clearer logs during build so we can see the root cause
//     // of failures when Next.js collects page data.
//     // eslint-disable-next-line no-console
//     console.error("Error while collecting blocks page for generateMetadata:", err);
//     throw err;
//   }

//   if (!page) {
//     notFound();
//   }

//   const doc = page.data;

//   if (!doc.title || !doc.description) {
//     notFound();
//   }

//   return {
//     title: doc.title,
//     description: doc.description,
//     metadataBase: new URL("https://yourdomain.com"), // TODO :- Change it after
//     openGraph: {
//       title: doc.title,
//       description: doc.description,
//       type: "article",
//       url: absoluteUrl(page.url),
//       images: [
//         {
//           url: `/og?title=${encodeURIComponent(
//             doc.title
//           )}&description=${encodeURIComponent(doc.description)}`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: doc.title,
//       description: doc.description,
//       images: [
//         {
//           url: `/og?title=${encodeURIComponent(
//             doc.title
//           )}&description=${encodeURIComponent(doc.description)}`,
//         },
//       ],
//       creator: "@",
//     },
//   };
// }

export default async function Page(props: PageProps) {
  const params = await props.params;
  let page;
  try {
    page = blocksSource.getPage(params.slug);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error while collecting blocks page for Page():", err);
    throw err;
  }

  if (!page) {
    notFound();
  }

  const doc = page.data;
  const path = page.path;

  const MDX = doc.body;
  let neighbours;
  try {
    neighbours = await findNeighbour(blocksSource.pageTree, page.url);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error while finding neighbours for page", page?.url, err);
    throw err;
  }

  const links = doc.links;

  return (
    <div
      data-slot="docs"
      className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:pl-10 md:pr-8 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2 mr-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {doc.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsEditButton docs="blocks-docs" path={path} />
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
            {links ? (
              <div className="flex items-center space-x-2 pt-4">
                {links?.doc && (
                  <Badge asChild variant="secondary">
                    <Link href={links.doc} target="_blank" rel="noreferrer">
                      Docs <IconArrowUpRight />
                    </Link>
                  </Badge>
                )}
                {links?.api && (
                  <Badge asChild variant="secondary">
                    <Link href={links.api} target="_blank" rel="noreferrer">
                      API Reference <IconArrowUpRight />
                    </Link>
                  </Badge>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
          <ProLibraryCta show />
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
    </div>
  );
}
