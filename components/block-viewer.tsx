"use client";

import * as React from "react";
import {
  Check,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

import { Button } from "@/registry/ui/button";

import { Separator } from "@/registry/ui/separator";

import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group";
import { ImperativePanelHandle } from "react-resizable-panels";
import { PreviewButton } from "./preview-button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/ui/resizable";

type BlockViewerContext = {
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null;
  iframeKey?: number;
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>;
  title?: string;
  setTitle?: (title: string) => void;
};

function BlockViewer({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return <BlockViewerProvider title={title}>{children}</BlockViewerProvider>;
}

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
  children,
  title: initialTitle,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview");
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = React.useState(0);
  const [title, setTitle] = React.useState<BlockViewerContext["title"]>(
    initialTitle || "Untitled Block"
  );

  return (
    <BlockViewerContext.Provider
      value={{
        view,
        setView,
        resizablePanelRef,
        iframeKey,
        setIframeKey,
        title,
        setTitle,
      }}
    >
      <div
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
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
  const { setView, view, resizablePanelRef, setIframeKey, title } =
    useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <div className="hidden w-full items-center gap-2 pl-2 md:pr-6 lg:flex">
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

      <h4 className="font-inter capitalize font-medium truncate">{title}</h4>
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
            <PreviewButton name="button" src="ui" slug="/preview/ui/button" />
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
            copyToClipboard(`npx shadcn@latest add header-01.json`);
          }}
        >
          {isCopied ? <Check /> : <Terminal />}
          <span className="truncate">
            npx shadcn add header-01 0192 1092 j12 1 j2 1 2j
          </span>
        </Button>
      </div>
    </div>
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
            className="bg-background relative aspect-[4/2.5] overflow-hidden rounded-lg border md:aspect-auto md:rounded-xl"
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

function BlockViewerMobile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="line-clamp-1 text-sm font-medium">desc</div>
        <div className="text-muted-foreground ml-auto shrink-0 font-mono text-xs">
          name
        </div>
      </div>
      {children}
    </div>
  );
}

function BlockViewerIframe() {
  const { iframeKey } = useBlockViewer();

  const handleLoad = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = event.currentTarget;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      const style = doc.createElement("style");
      style.textContent = `
        html { background: red; }
        html::-webkit-scrollbar { display: none; }
        html { scrollbar-width: none; -ms-overflow-style: none; }
      `;
      doc.head.appendChild(style);
    }
  };

  return (
    <iframe
      key={iframeKey}
      src={`/preview/ui/button?name=button&src=ui`}
      loading="lazy"
      onLoad={handleLoad}
      className="relative z-20 w-full h-full"
    />
  );
}

export { BlockViewer, BlockViewerMobile, BlockViewerView, BlockViewerToolbar };
