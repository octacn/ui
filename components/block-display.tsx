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
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/ui/resizable";
import Image from "next/image";

type BlockViewerContext = {
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null;
  iframeKey?: number;
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>;
};

export function BlockDisplay() {
  return (
    <BlockViewer>
      <div className="bg-red-500 p-10 border">text-center</div>
    </BlockViewer>
  );
}

function BlockViewerToolbar() {
  const { setView, view, resizablePanelRef, setIframeKey } = useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <div className="hidden w-full items-center gap-2 pl-2 md:pr-6 lg:flex">
      <Tabs
        value={view}
        onValueChange={(value) => setView(value as "preview" | "code")}
      >
        <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" className="mx-2 !h-4" />

      {/* // TODO- */}
      <a
        href={`/`}
        className="flex-1 text-center text-sm font-medium underline-offset-2 hover:underline md:flex-auto md:text-left"
      >
        {"test match of data"}
      </a>

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
        <Separator orientation="vertical" className="mx-1 !h-4" />
        <Button
          variant="outline"
          className="w-fit gap-1 px-2 shadow-none"
          size="sm"
          onClick={() => {
            copyToClipboard(`npx shadcn@latest add`);
          }}
        >
          {isCopied ? <Check /> : <Terminal />}
          {/* <span>npx shadcn add {item.name}</span> */}
        </Button>
        <Separator orientation="vertical" className="mx-1 !h-4" />
      </div>
    </div>
  );
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

function BlockViewerProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview");
  const [activeFile, setActiveFile] =
    React.useState<BlockViewerContext["activeFile"]>(null);
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = React.useState(0);

  return (
    <BlockViewerContext.Provider
      value={{
        view,
        setView,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        iframeKey,
        setIframeKey,
      }}
    >
      <div
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
        style={
          {
            "--height": "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  );
}

function BlockViewerIframe({ className }: { className?: string }) {
  const { iframeKey } = useBlockViewer();

  return (
    <iframe
      key={iframeKey}
      src={`preview/ui/button?name=button&src=ui`}
      height={930}
      loading="lazy"
      className={cn("no-scrollbar relative z-20 w-full", className)}
    />
  );
}

function BlockViewerView() {
  const { resizablePanelRef } = useBlockViewer();

  return (
    <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-(--height) lg:flex">
      <div className="relative grid w-full gap-4">
        <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"></div>
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

function BlockViewer({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10">
      <BlockViewerProvider>
        <BlockViewerToolbar />
        <BlockViewerView />

        {/* // TODO- Code component */}

        {/*  */}
        <BlockViewerMobile>{children}</BlockViewerMobile>
      </BlockViewerProvider>
    </div>
  );
}

function BlockViewerMobile({ children }: { children: React.ReactNode }) {
  const yes = false;
  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="line-clamp-1 text-sm font-medium">desc</div>
        <div className="text-muted-foreground ml-auto shrink-0 font-mono text-xs">
          name
        </div>
      </div>
      {yes === false ? (
        children
      ) : (
        <div className="overflow-hidden rounded-xl border">
          <Image
            src={`/r/styles/new-york-v4/light.png`}
            alt="alt"
            data-block="com"
            width={1440}
            height={900}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
