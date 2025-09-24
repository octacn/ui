"use client";

import { imageCardSchema } from "@/schema/image-card-schema";
import { Button } from "@/registry/ui/button";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import z from "zod";

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

  if (item.type === "template") {
    return <ImageViewerTemplate />;
  }

  return <ImageViewerBlock />;
}

function ImageViewerTemplate() {
  const { item } = useImageViewer();
  return (
    <section
      className={cn(
        "bg-code rounded-md overflow-hidden border-border border-2"
      )}
    >
      <Image
        src={item.image || "/images/placeholder.png"}
        width={1440}
        height={900}
        alt={item.title}
        className="h-2/3 w-full object-cover hover:scale-105 transition-all duration-200 border-border border-b-3"
      />
      <ImageCardContent title={item.title}>
        <LinkButton href={item.preview} target="_blank">
          Live Preview
        </LinkButton>
        <LinkButton href={item.docs} variant="outline">
          View Docs
        </LinkButton>
      </ImageCardContent>
    </section>
  );
}

function ImageViewerBlock() {
  const { item } = useImageViewer();

  return (
    <section
      className={cn(
        "bg-code rounded-md overflow-hidden border-border border-2"
      )}
    >
      <Image
        width={1440}
        height={900}
        alt=""
        src={`/images/blocks/${item.name}-dark.png`}
        className="h-2/3 w-full object-cover hover:scale-105 transition-all duration-200 border-border border-b-3 hidden dark:block"
      />
      <Image
        width={1440}
        height={900}
        alt=""
        src={`/images/blocks/${item.name}-light.png`}
        className="h-2/3 w-full object-cover hover:scale-105 transition-all duration-200 border-border border-b-3 dark:hidden"
      />
      <ImageCardContent title={item.title}>
        <LinkButton href={`/preview/${item.name}`}>
          Live Preview
        </LinkButton>
        <LinkButton href={item.docs} variant="outline">
          View Docs
        </LinkButton>
      </ImageCardContent>
    </section>
  );
}

function ImageCardContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 pt-4 pb-3">
      <h4 className="truncate font-medium text-base">{title}</h4>
      <div className="grid grid-cols-2 pt-3 gap-4">{children}</div>
    </div>
  );
}

function LinkButton({
  children,
  href,
  ...props
}: ComponentProps<"a"> & ComponentProps<typeof Button>) {
  if (!href) {
    return (
      <Button className="w-full" disabled>
        {children}
      </Button>
    );
  }

  return (
    <Link href={href} className="hover:cursor-default" {...props}>
      <Button className="w-full" {...props}>{children}</Button>
    </Link>
  );
}

export { ImageViewer };
