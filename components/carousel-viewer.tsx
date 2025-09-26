"use client";

import GithubDownloadButton from "@/components/github-download-button";
import { imageCarouselSchema } from "@/schema/image-schema";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import z from "zod";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";

type ImageCarouselContext = {
  item: z.infer<typeof imageCarouselSchema>;
};

const ImageViewerContext = React.createContext<ImageCarouselContext | null>(
  null
);

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
}: Pick<ImageCarouselContext, "item"> & {
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

const CarouselViewer = ({ item }: Pick<ImageCarouselContext, "item">) => {
  return (
    <ImageViewerProvider item={item}>
      <ImageCarouselContent />
    </ImageViewerProvider>
  );
};

function ImageCarouselContent() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  const { item } = useImageViewer();

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="pt-3">
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {item.images.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  src={`/images/templates/${item.image}`}
                  width={1000}
                  height={1000}
                  alt={item.image.toLowerCase()}
                  className="w-full object-cover rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex justify-center space-x-2 mt-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                current === index + 1 ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 pt-6 gap-4">
        <Link
          href={item.preview}
          className="bg-foreground border rounded-2xl flex items-center justify-center text-base font-medium transition-colors py-2 px-4 text-background"
        >
          Live Preview
        </Link>
        <GithubDownloadButton
          repository={item.repository}
          branch={item.branch}
          owner={item.owner}
        >
          Github Download
        </GithubDownloadButton>
      </div>
    </section>
  );
}

export { CarouselViewer };
