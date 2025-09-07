import { blocksDocs, docs, authDocs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const blocksSource: ReturnType<typeof loader> = loader({
  baseUrl: "/blocks-docs",
  source: blocksDocs.toFumadocsSource(),
});

export const authSource: ReturnType<typeof loader> = loader({
  baseUrl: "/auth-docs",
  source: authDocs.toFumadocsSource(),
});
