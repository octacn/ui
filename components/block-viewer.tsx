"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Clipboard,
  File,
  Folder,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { registryItemFileSchema, registryItemSchema } from "@/schema/shadcn";
import { z } from "zod";

import { trackEvent } from "@/lib/events";
import { createFileTreeForRegistryItemFiles, FileTree } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { getIconForLanguageExtension } from "@/components/icons";
import { Button } from "@/registry/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/ui/resizable";
import { Separator } from "@/registry/ui/separator";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group";

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>;
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null;
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null;
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string;
      })[]
    | null;
  iframeKey?: number;
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>;
};

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null);

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext);
  if (!context) {
    throw new Error(
      "useBlockViewer must be used within a BlockViewerProvider."
    );
  }
  return context;
}

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview");
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null);
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = React.useState(0);

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
        iframeKey,
        setIframeKey,
      }}
    >
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-3 overflow-hidden md:flex-col"
        style={
          {
            "--height": "456px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  );
}

function BlockViewerToolbar() {
  const { setView, view, item, resizablePanelRef, setIframeKey } =
    useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <div className="hidden w-full items-center gap-2 pl-1 md:pr-5 lg:flex">
      <Tabs
        value={view}
        onValueChange={(value) => setView(value as "preview" | "code")}
      >
        <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs font-inter">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" className="!h-4" />

      <h4 className="font-inter capitalize font-medium truncate max-w-48">
        {item.name.replace(/-/g, " ")}
      </h4>

      <div className="ml-auto flex items-center gap-2">
        <div className="h-8 items-center gap-1.5 rounded-md border p-1 shadow-none">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              setView("preview");
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(parseInt(value));
              }
            }}
            className="gap-1 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm"
          >
            <ToggleGroupItem value="100" title="Desktop">
              <Monitor />
            </ToggleGroupItem>
            <ToggleGroupItem value="60" title="Tablet">
              <Tablet />
            </ToggleGroupItem>
            <ToggleGroupItem value="30" title="Mobile">
              <Smartphone />
            </ToggleGroupItem>
            <Separator orientation="vertical" className="!h-4" />
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
                  setIframeKey((k) => k + 1);
                }
              }}
            >
              <RotateCw />
              <span className="sr-only">Refresh Preview</span>
            </Button>
          </ToggleGroup>
        </div>
        <Separator orientation="vertical" className="!h-4" />
        <Button
          variant="outline"
          className="w-fit gap-1 px-2 shadow-none max-w-50"
          size="sm"
          onClick={() => {
            copyToClipboard(`npx shadcn@latest add ${item.name}`);
          }}
        >
          {isCopied ? <Check /> : <Terminal />}
          <span className="truncate">npx shadcn add {item.name}</span>
        </Button>
      </div>
    </div>
  );
}

function BlockViewerIframe({ className }: { className?: string }) {
  const { item, iframeKey } = useBlockViewer();

  // const handleLoad = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
  //   const iframe = event.currentTarget;
  //   const doc = iframe.contentDocument || iframe.contentWindow?.document;
  //   if (doc) {
  //     const style = doc.createElement("style");
  //     style.textContent = `
  //       html { background: red; }
  //       html::-webkit-scrollbar { display: none; }
  //       html { scrollbar-width: none; -ms-overflow-style: none; }
  //     `;
  //     doc.head.appendChild(style);
  //   }
  // };

  return (
    <iframe
      key={iframeKey}
      src={`/preview/${item.name}`}
      // height={item.meta?.iframeHeight ?? 930}
      //  onLoad={handleLoad}
      loading="lazy"
      className={cn("relative z-20 w-full h-full no-scrollbar", className)}
    />
  );
}

function BlockViewerView() {
  const { resizablePanelRef } = useBlockViewer();

  return (
    <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-(--height) lg:flex">
      <div className="relative grid w-full gap-4">
        <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

        <ResizablePanelGroup
          direction="horizontal"
          className="after:bg-surface/50 relative z-10 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl"
        >
          <ResizablePanel
            ref={resizablePanelRef}
            className="bg-background relative aspect-[4/2.5] overflow-hidden rounded-lg border md:aspect-auto md:rounded-lg"
            defaultSize={100}
            minSize={30}
          >
            <BlockViewerIframe />
          </ResizablePanel>
          <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

function BlockViewerMobile() {
  const { item } = useBlockViewer();

  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="line-clamp-1 text-sm font-normal">{item.name}</div>
        <div className="text-muted-foreground ml-auto shrink-0 font-mono text-xs">
          {item.files![0]?.target || `components/ui/${item.name}.tsx`}
        </div>
      </div>
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <Image
          src={`/images/blocks/${item.name}-light.png`}
          alt="name"
          width={1440}
          height={900}
          className="bg-background absolute top-0 left-0 z-20 md:hidden dark:hidden md:dark:hidden"
        />
        <Image
          src={`/images/blocks/${item.name}-dark.png`}
          alt="name"
          width={1440}
          height={900}
          className="bg-background absolute top-0 left-0 z-20 hidden md:hidden dark:block md:dark:hidden"
        />
      </div>
    </div>
  );
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer();

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile);
  }, [highlightedFiles, activeFile]);

  if (!file) {
    return null;
  }

  const language = file.path.split(".").pop() ?? "tsx";

  return (
    <div className="hidden bg-code text-code-foreground mr-[14px] lg:flex overflow-hidden rounded-lg border group-data-[view=preview]/block-view-wrapper:hidden md:h-(--height)">
      <div className="w-48">
        <BlockViewerFileTree />
      </div>
      <figure
        data-rehype-pretty-code-figure=""
        className="!mx-0 mt-0 flex min-w-0 flex-1 flex-col rounded-xl border-none"
      >
        <figcaption
          className="text-code-foreground [&_svg]:text-code-foreground flex h-10 shrink-0 items-center gap-2 border-b px-4 py-2 [&_svg]:size-3 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {file.target}
          <div className="ml-auto flex items-center gap-2">
            <BlockCopyCodeButton />
          </div>
        </figcaption>
        <div
          key={file?.path}
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          className="no-scrollbar overflow-y-auto"
        />
      </figure>
    </div>
  );
}

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer();

  if (!tree) {
    return null;
  }

  return (
    <SidebarProvider className="flex !min-h-full flex-col border-r">
      <Sidebar collapsible="none" className="w-full flex-1">
        <SidebarGroupLabel className="h-10 rounded-none border-b px-4 text-sm font-mono font-normal">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="translate-x-0 gap-1.5">
              {tree.map((file, index) => (
                <Tree key={index} item={file} index={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  );
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer();

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) whitespace-nowrap font-inter"
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.0 : 1.2)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="h-2 w-2" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) whitespace-nowrap"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="transition-transform" />
            <Folder />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile);
  }, [activeFile, item.files]);

  const content = file?.content;

  if (!content) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-7"
      onClick={() => {
        copyToClipboard(content);
        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file.path,
          },
        });
      }}
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  );
}

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  ...props
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles">) {
  return (
    <BlockViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      {...props}
    >
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
      <BlockViewerMobile />
    </BlockViewerProvider>
  );
}

export { BlockViewer };
