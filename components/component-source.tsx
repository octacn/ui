import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { getIconForLanguageExtension } from "@/components/icons";
import { readComponentSource } from "@/lib/read-component-source";
import { CopyButton } from "@/components/copy-button";
import { highlightCode } from "@/lib/highlight-code";
import { cn, convertRegistryPaths } from "@/lib/utils";
import * as React from "react";

export async function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
}) {
  if (!src || !name) {
    return (
      <div className="border border-red-200 bg-red-50 p-4 rounded-md">
        <p className="text-red-700">
          {
            "Error: Both 'src' ({src || 'missing'}) and 'name' ({name || 'missing'}) props are required."
          }
        </p>
        <p className="text-sm text-red-600 mt-2">
          {
            "Usage: &lt;ComponentSource name='Button' src='ui' title='Button.tsx' /&gt;"
          }
        </p>
      </div>
    );
  }

  try {
    const sourceCode = await readComponentSource(src, name);

    const code = convertRegistryPaths(sourceCode as string);

    if (!code) {
      return (
        <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-md">
          <p className="text-yellow-700">
            Could not find component source for: {name} in {src}
          </p>
          <p className="text-sm text-yellow-600 mt-2">
            Expected path: registry/{src}/{name}.tsx
          </p>
        </div>
      );
    }

    const lang = language ?? title?.split(".").pop() ?? "tsx";

    const highlightedCode = await highlightCode(code, lang);

    if (!collapsible) {
      return (
        <div className={cn("relative", className)} {...props}>
          <ComponentCode
            code={code}
            highlightedCode={highlightedCode}
            language={lang}
            title={title}
          />
        </div>
      );
    }

    return (
      <CodeCollapsibleWrapper className={className}>
        <ComponentCode
          code={code}
          highlightedCode={highlightedCode}
          language={lang}
          title={title}
        />
      </CodeCollapsibleWrapper>
    );
  } catch (error) {
    console.error("Error in ComponentSource:", error);
    return (
      <div className="border border-red-200 bg-red-50 p-4 rounded-md">
        <p className="text-red-700">
          Error loading component source:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string;
  highlightedCode: string;
  language: string;
  title: string | undefined;
}) {
  return (
    <figure data-rehype-pretty-code-figure="" className="[&>pre]:max-h-96">
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}
      <CopyButton value={code} />
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  );
}
