import { readComponentSource } from "@/lib/read-component-source";
import { getIconForLanguageExtension } from "@/components/icons";
import { BlockViewerProps } from "@/types/block-viewer";
import { CopyButton } from "@/components/copy-button";
import { highlightCode } from "@/lib/highlight-code";
import { convertRegistryPaths } from "@/lib/utils";
import * as React from "react";
import {
  BlockViewer,
  BlockViewerMobile,
  BlockViewerToolbar,
  BlockViewerView,
} from "@/components/block-viewer";
import { ComponentImagePreview } from "./component-preview";

export const BlockDisplay = React.memo(function BlockDisplay({
  title,
  name,
  src,
  slug,
  npm,
  path,
}: BlockViewerProps) {
  return (
    <BlockViewer
      title={title}
      npm={npm}
      name={name}
      src={src}
      slug={slug}
      path={path}
    >
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode srcCode={src} title={path} name={name} />
      <BlockViewerMobile>
        <ComponentImagePreview name={name} />
      </BlockViewerMobile>
    </BlockViewer>
  );
});

async function BlockViewerCode({
  srcCode,
  title,
  name,
}: {
  name: string;
  srcCode: string;
  title: string | undefined;
}) {
  // console.log("====================================");
  // console.log(name, srcCode, title);
  // console.log("====================================");

  const sourceCode = await readComponentSource(srcCode, name);
  const code = convertRegistryPaths(sourceCode as string);

  if (!code || !sourceCode) {
    return (
      <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-md">
        <p className="text-yellow-700">
          Could not find component source for: {name} in {srcCode}
        </p>
        <p className="text-sm text-yellow-600 mt-2">
          Expected path: registry/{srcCode}/{name}.tsx
        </p>
      </div>
    );
  }

  const lang = "tsx";
  const highlightedCode = await highlightCode(code, lang);

  return (
    <div className="bg-code text-code-foreground rounded-xl border md:h-(--height) group-data-[view=preview]/block-view-wrapper:hidden relative overflow-x-auto no-scrollbar">
      <figure>
        {title && (
          <figcaption
            data-rehype-pretty-code-title=""
            className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
            data-language={lang}
          >
            {getIconForLanguageExtension(lang)}
            {title}
          </figcaption>
        )}
        <CopyButton value={code} className="top-2" />
        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </figure>
    </div>
  );
}
