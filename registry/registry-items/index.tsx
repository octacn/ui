import { TypographyDemo } from "@/registry/demo/typography/typography-demo";
import { H1Demo } from "@/registry/demo/typography/typography-h1";
import { H2Demo } from "@/registry/demo/typography/typography-h2";
import { H3Demo } from "@/registry/demo/typography/typography-h3";
import { H4Demo } from "@/registry/demo/typography/typography-h4";
import { H5Demo } from "@/registry/demo/typography/typography-h5";
import { H6Demo } from "@/registry/demo/typography/typography-h6";
import { Button } from "@/registry/ui/button";
import { Card } from "@/registry/ui/card";
import React from "react";
import { BlockquoteDemo } from "@/registry/demo/typography/typography-blockquote";
import { InlineCodeDemo } from "@/registry/demo/typography/typography-inline-code";
import { PDemo } from "@/registry/demo/typography/typography-p";
import { Loading } from "@/registry/src/loaders/loading";

export const ComponentRegistry = {
  loading: Loading,
  button: Button,
  card: Card,
  "typography-demo": TypographyDemo,
  "typography-h1": H1Demo,
  "typography-h2": H2Demo,
  "typography-h3": H3Demo,
  "typography-h4": H4Demo,
  "typography-h5": H5Demo,
  "typography-h6": H6Demo,
  "typography-blockquote": BlockquoteDemo,
  "typography-inline-code": InlineCodeDemo,
  "typography-p": PDemo,
};

export type ComponentType = keyof typeof ComponentRegistry;

export interface types {
  component?: React.ComponentType;
  demo?: React.ComponentType;
}

export const Index: Record<ComponentType, types> = {
  loading: { component: Loading },
  button: { component: Button },
  card: { component: Card },
  "typography-demo": { component: TypographyDemo },
  "typography-h1": { component: H1Demo },
  "typography-h2": { component: H2Demo },
  "typography-h3": { component: H3Demo },
  "typography-h4": { component: H4Demo },
  "typography-h5": { component: H5Demo },
  "typography-h6": { component: H6Demo },
  "typography-blockquote": { component: BlockquoteDemo },
  "typography-inline-code": { component: InlineCodeDemo },
  "typography-p": { component: PDemo },
};

export const itemPath =  {
  button: "ui/button"
}