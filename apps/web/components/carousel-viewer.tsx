"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { imageCarouselSchema } from "@/schema/image-schema"
import { TabsTrigger } from "@radix-ui/react-tabs"
import Autoplay from "embla-carousel-autoplay"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"
import { ImperativePanelHandle } from "react-resizable-panels"
import z from "zod"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import GithubDownloadButton from "@/components/github-download-button"
import { Loading } from "@/registry/components/loading"
import { Button } from "@/registry/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel"
import { Separator } from "@/registry/ui/separator"
import { Tabs, TabsList } from "@/registry/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

type ImageCarouselItem = z.infer<typeof imageCarouselSchema>

type ImageCarouselContext = {
  item: ImageCarouselItem
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null
  iframeKey?: number
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>
}

const ImageViewerContext = React.createContext<ImageCarouselContext | null>(
  null
)

function useImageViewer() {
  const context = React.useContext(ImageViewerContext)
  if (!context) {
    throw new Error("useImageViewer must be used within a ImageViewerProvider.")
  }
  return context
}

const ImageViewerProvider = React.memo<
  Pick<ImageCarouselContext, "item"> & {
    children: React.ReactNode
  }
>(({ item, children }) => {
  // const contextValue = React.useMemo(() => ({ item }), [item])

  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null)
  const [iframeKey, setIframeKey] = React.useState(0)

  return (
    <ImageViewerContext.Provider
      value={{
        item,

        resizablePanelRef,
        iframeKey,
        setIframeKey,
      }}
    >
      {children}
    </ImageViewerContext.Provider>
  )
})

ImageViewerProvider.displayName = "ImageViewerProvider"

const CarouselViewer = ({ item }: Pick<ImageCarouselContext, "item">) => {
  return (
    <ImageViewerProvider item={item}>
      <ImageCarouselContent />
    </ImageViewerProvider>
  )
}

function ImageCarouselContent() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState<number>(0)
  const [count, setCount] = React.useState<number>(0)
  const [loading, setLoading] = React.useState(true)

  const { item, resizablePanelRef, setIframeKey } = useImageViewer()

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  if (item.type === "view") {
    return (
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="bg-surface border rounded-2xl overflow-hidden gap-0 "
      >
        <div className="flex justify-between items-center py-3 px-6">
          <div className="flex gap-x-3 items-center">
            <Link
              href={"/"}
              className="font-inter tracking-wide font-normal capitalize group whitespace-nowrap inline-flex items-center transition-colors duration-200 hover:text-orange-400 text-sm"
            >
              Live
            </Link>

            <GithubDownloadButton
              className="hover:text-orange-400/90 text-sm"
              repository={item.repository}
              branch={item.branch}
              owner={item.owner}
            >
              Docs
            </GithubDownloadButton>
          </div>

          <h4 className="font-inter tracking-wide font-normal capitalize text-sm">
            {item.name}
          </h4>

          <div className="flex gap-x-4">
            <Button
              onClick={() => api?.scrollPrev()}
              data-slot="carousel-previous"
              variant={"outline"}
              className={cn("size-8 rounded-full")}
            >
              <ArrowLeft />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              onClick={() => api?.scrollNext()}
              data-slot="carousel-previous"
              variant={"outline"}
              className={cn("size-8 rounded-full")}
            >
              <ArrowRight />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        <div className="bg-border h-px" />

        <CarouselContent className="pt-0 max-h-[46rem]">
          {item.images.map((item, index) => (
            <CarouselItem className="pt-0" key={index}>
              {loading && <Loading />}

              <Image
                src={`/images/templates/${item.image}`}
                width={1000}
                height={1000}
                alt={item.image.toLowerCase()}
                loading="lazy"
                onLoad={() => setLoading(false)}
                className={cn(
                  "w-full object-cover",
                  loading ? "opacity-0" : "opacity-100"
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    )
  }

  return (
    <section className="pt-3">
      {/* <div>
        <div className="hidden w-full items-center gap-2 pl-1 md:pr-5 lg:flex">
        

          <div className="h-8 items-center gap-1.5 rounded-md border p-1 shadow-none">
            <ToggleGroup
              type="single"
              defaultValue="100"
              onValueChange={(value) => {
                if (resizablePanelRef?.current) {
                  resizablePanelRef.current.resize(parseInt(value))
                }
              }}
              className="gap-1 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm"
            >
              <Button
                size="icon"
                variant="ghost"
                className="size-6 rounded-sm p-0"
                asChild
                title="Open in New Tab"
              >
                <Link href={`/preview/${item.name}`} target="_blank">
                  <span className="sr-only">Open in New Tab</span>
                  <Fullscreen />
                </Link>
              </Button>
              <Separator orientation="vertical" className="!h-4" />
              <Button
                size="icon"
                variant="ghost"
                className="size-6 rounded-sm p-0"
                title="Refresh Preview"
                onClick={() => {
                  if (setIframeKey) {
                    setIframeKey((k) => k + 1)
                  }
                }}
              >
                <RotateCw />
                <span className="sr-only">Refresh Preview</span>
              </Button>
            </ToggleGroup>
          </div>
        </div>

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
              <CarouselItem className="h-[27rem]" key={index}>
                {loading && (
                  <Loading className="border rounded-2xl bg-surface" />
                )}

                <Image
                  src={`/images/templates/${item.image}`}
                  width={1000}
                  height={1000}
                  alt={item.image.toLowerCase()}
                  loading="lazy"
                  onLoad={() => setLoading(false)}
                  className={cn(
                    "w-full object-cover rounded-md",
                    loading ? "opacity-0" : "opacity-100"
                  )}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
      </div> */}

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="rounded-md overflow-hidden"
      >
        <CarouselContent className="max-h-[46rem]">
          {item.images.map((item, index) => (
            <CarouselItem className="overflow-hidden" key={index}>
              {loading && <Loading />}

              <Image
                src={`/images/templates/${item.image}`}
                width={1000}
                height={1000}
                alt={item.image.toLowerCase()}
                loading="lazy"
                onLoad={() => setLoading(false)}
                className={cn(
                  "w-full object-cover rounded-md",
                  loading ? "opacity-0" : "opacity-100"
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
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

      <div className="grid grid-cols-2 pt-6 gap-4">
        <Link
          href={item.preview}
          className="bg-foreground border rounded-2xl flex items-center justify-center text-base font-medium transition-colors py-2 px-4 text-background"
        >
          Live Preview
        </Link>
        <GithubDownloadButton
          className="bg-surface border px-10 py-4 rounded-xl hover:bg-accent hover:text-accent-foreground"
          repository={item.repository}
          branch={item.branch}
          owner={item.owner}
        >
          Github Download
        </GithubDownloadButton>
      </div>
    </section>
  )
}

export { CarouselViewer }
