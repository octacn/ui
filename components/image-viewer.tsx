"use client";

import { imageCardSchema } from "@/schema/image-schema";
import { Button } from "@/registry/ui/button";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import z from "zod";
import { Loading } from "@/registry/components/loading";

type ImageCardContext = {
  item: z.infer<typeof imageCardSchema>;
};

const ImageViewerContext = React.createContext<ImageCardContext | null>(null);

function useImageViewer() {
  const context = React.useContext(ImageViewerContext);
  if (!context) {
    throw new Error(
      "useImageViewer must be used within a ImageViewerProvider."
    );
  }
  return context;
}

function ImageViewerProvider({
  item,
  children,
}: Pick<ImageCardContext, "item"> & {
  children: React.ReactNode;
}) {
  return (
    <ImageViewerContext.Provider
      value={{
        item,
      }}
    >
      {children}
    </ImageViewerContext.Provider>
  );
}

function ImageViewer({ item }: Pick<ImageCardContext, "item">) {
  return (
    <ImageViewerProvider item={item}>
      <ImageViewerView />
    </ImageViewerProvider>
  );
}

function ImageViewerView() {
  const { item } = useImageViewer();
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <section
        className={cn(
          "bg-code rounded-md overflow-hidden border-border border-2"
        )}
      >
        <div className="h-52 border-b-2">
          {loading && <Loading />}
          {item.type === "template" ? (
            <Image
              src={item.image || "/images/placeholder-dark.png"}
              width={1440}
              height={900}
              alt={item.title}
              loading="lazy"
              onLoad={() => setLoading(false)}
              className={cn(
                "h-full object-center w-full object-cover hover:scale-105 transition-all duration-200",
                loading ? "opacity-0" : "opacity-100"
              )}
            />
          ) : (
            <>
              <Image
                src={`/images/blocks/${item.name}-dark.png`}
                width={1440}
                height={900}
                alt={item.title}
                loading="lazy"
                onLoad={() => setLoading(false)}
                className={cn(
                  "h-full object-center w-full object-cover hover:scale-105 transition-all duration-200",
                  loading ? "opacity-0" : "opacity-100",
                  "hidden dark:block"
                )}
              />
              <Image
                src={`/images/blocks/${item.name}-light.png`}
                width={1440}
                height={900}
                alt={item.title}
                loading="lazy"
                onLoad={() => setLoading(false)}
                className={cn(
                  "h-full object-center w-full object-cover hover:scale-105 transition-all duration-200",
                  loading ? "opacity-0" : "opacity-100",
                  "dark:hidden"
                )}
              />
            </>
          )}
        </div>

        <div className="px-4 pt-4 pb-5">
          <h4 className="truncate font-medium text-base">{item.title}</h4>
          <div className="grid grid-cols-2 pt-3 gap-4">
            <Link
              href={
                item.type === "template"
                  ? (item.preview as string)
                  : `/preview/${item.name}`
              }
              target="_blank"
            >
              <Button className="w-full">Live Preview</Button>
            </Link>

            <Link href={item.docs}>
              <Button className="w-full" variant="outline">
                View Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Suggestion({ children, className }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-muted-foreground px-4 py-2 rounded-2xl text-sm font-inter border bg-surface w-fit h-fit",
        className
      )}
    >
      {children}
    </div>
  );
}

export { ImageViewer, Suggestion };
