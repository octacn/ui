import { useState, useRef, useMemo } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { BlockViewerContext, BlockViewerState } from "@/types/block-viewer";

const DEFAULT_VALUES = {
  title: "Untitled Block",
  name: "Untitled Name",
  src: "Untitled src",
  slug: "Untitled Slug",
  npm: "Untitled Npm",
  path: "Untitled Path",
} as const;

export function useBlockViewerState(initialProps: Partial<BlockViewerState>) {
  const [view, setView] = useState<BlockViewerContext["view"]>("preview");
  const [iframeKey, setIframeKey] = useState(0);
  const [title, setTitle] = useState(
    initialProps.title || DEFAULT_VALUES.title
  );
  const [name, setName] = useState(initialProps.name || DEFAULT_VALUES.name);
  const [src, setSrc] = useState(initialProps.src || DEFAULT_VALUES.src);
  const [slug, setSlug] = useState(initialProps.slug || DEFAULT_VALUES.slug);
  const [npm, setNpm] = useState(initialProps.npm || DEFAULT_VALUES.npm);
  const [path, setPath] = useState(initialProps.path || DEFAULT_VALUES.path);

  const resizablePanelRef = useRef<ImperativePanelHandle>(null);

  const contextValue = useMemo(
    (): BlockViewerContext => ({
      view,
      setView,
      resizablePanelRef,
      iframeKey,
      setIframeKey,
      title,
      setTitle,
      name,
      setName,
      src,
      setSrc,
      slug,
      setSlug,
      npm,
      setNpm,
      path,
      setPath,
    }),
    [view, iframeKey, title, name, src, slug, npm, path]
  );

  return contextValue;
}
