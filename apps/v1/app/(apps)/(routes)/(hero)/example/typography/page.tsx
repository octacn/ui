import { Loading } from "@/registry/components/loading";
import { BlockquoteDemo } from "@/registry/demo/ui/typography-blockquote";
import { H1Demo } from "@/registry/demo/ui/typography-h1";
import { H2Demo } from "@/registry/demo/ui/typography-h2";
import { H3Demo } from "@/registry/demo/ui/typography-h3";
import { H4Demo } from "@/registry/demo/ui/typography-h4";
import { H5Demo } from "@/registry/demo/ui/typography-h5";
import { H6Demo } from "@/registry/demo/ui/typography-h6";
import { InlineCodeDemo } from "@/registry/demo/ui/typography-inline-code";
import TypographyLarge from "@/registry/demo/ui/typography-large";
import TypographyList from "@/registry/demo/ui/typography-list";
import TypographyMuted from "@/registry/demo/ui/typography-muted";
import { PDemo } from "@/registry/demo/ui/typography-p";
import TypographySmall from "@/registry/demo/ui/typography-small";
import React, { ComponentProps, Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Typography />
    </Suspense>
  );
}

function Typography() {
  const typographyDemos = [
    { component: <H1Demo />, label: "Heading 1" },
    { component: <H2Demo />, label: "Heading 2" },
    { component: <H3Demo />, label: "Heading 3" },
    { component: <H4Demo />, label: "Heading 4" },
    { component: <H5Demo />, label: "Heading 5" },
    { component: <H6Demo />, label: "Heading 6" },
    { component: <PDemo />, label: "Paragraph" },
    { component: <TypographyLarge />, label: "Large Text" },
    { component: <TypographySmall />, label: "Small Text" },
    { component: <TypographyMuted />, label: "Muted Text" },
    { component: <TypographyList />, label: "List Text" },
    { component: <BlockquoteDemo />, label: "Blockquote" },
    { component: <InlineCodeDemo />, label: "Inline Code" },
  ];

  return (
    <div className="border bg-surface rounded-lg relative grid grid-cols-2 gap-0">
      {typographyDemos.map((demo, index) => (
        <DemoBox key={index} label={demo.label}>
          {demo.component}
        </DemoBox>
      ))}
    </div>
  );
}

function DemoBox({
  children,
  label,
}: ComponentProps<"div"> & {
  label: string;
}) {
  return (
    <div className="relative border-r border-b border-dashed last:border-r-0">
      <h4 className="absolute top-0 left-0 px-3 py-2 border-b border-r rounded-br-lg font-inter text-xs tracking-wide bg-accent text-foreground/90 z-10">
        {label}
      </h4>
      <div className="px-8 flex items-center justify-center min-h-36">
        <div className="text-center truncate max-w-full">{children}</div>
      </div>
    </div>
  );
}
