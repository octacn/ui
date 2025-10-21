import {
  docs,
  blocksDocs,
  componentsDocs,
  authenticationDocs,
} from "@/.source";
import { loader } from "fumadocs-core/source";

export const docsSource: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const componentsSource: ReturnType<typeof loader> = loader({
  baseUrl: "/components",
  source: componentsDocs.toFumadocsSource(),
});

export const blocksSource: ReturnType<typeof loader> = loader({
  baseUrl: "/blocks",
  source: blocksDocs.toFumadocsSource(),
});

export const authenticationSource: ReturnType<typeof loader> = loader({
  baseUrl: "/authentication",
  source: authenticationDocs.toFumadocsSource(),
});
