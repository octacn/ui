import { ImperativePanelHandle } from "react-resizable-panels";

export type BlockViewType = "code" | "preview";

export interface BlockViewerState {
  view: BlockViewType;
  iframeKey: number;
  path: string;
  title: string;
  name: string;
  src: string;
  slug: string;
  npm: string;
}

export interface BlockViewerActions {
  setIframeKey: React.Dispatch<React.SetStateAction<number>>;
  setView: (view: BlockViewType) => void;
  setPath: (path: string) => void;
  setTitle: (title: string) => void;
  setName: (name: string) => void;
  setSlug: (slug: string) => void;
  setNpm: (npm: string) => void;
  setSrc: (src: string) => void;
}

export interface BlockViewerProps {
  children?: React.ReactNode;
  title?: string;
  name: string;
  src: string;
  slug: string;
  npm: string;
  path: string;
}

export interface BlockViewerContext
  extends BlockViewerState,
    BlockViewerActions {
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null>;
}
