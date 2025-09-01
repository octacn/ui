declare module "fumadocs-core/source" {
  /** Convenience: async or sync */
  export type Awaitable<T> = T | Promise<T>;

  /** MDX/React body component type */
  export type PageBody = React.ComponentType<Record<string, unknown>>;

  /** Table of contents entry */
  export interface TocItem {
    depth: number;
    title: string;
    url: string;
    /** Optional stable id for headings */
    id?: string;
  }

  /** Link targets shown on a page header/footer */
  export interface PageLinks {
    /** Link to related doc page */
    doc?: string;
    /** Link to API reference */
    api?: string;
    /** Link to the source repository/file */
    source?: string;
    /** Allow custom keys while preserving type safety */
    [key: string]: string | undefined;
  }

  /** File metadata attached by the loader */
  export interface FileMeta {
    /** Relative path from project root (e.g. "docs/intro.mdx") */
    path: string;
    /** Absolute path on disk */
    absolutePath: string;
  }

  /** Structured data produced by parsers (MDX/remark) */
  export interface StructuredData {
    /** Raw or normalized content blocks */
    contents: unknown[];
    /** Headings extracted for navigation */
    headings: Array<{
      depth: number;
      url: string;
      title: unknown;
    }>;
  }

  /** Minimal shape describing a rendered page */
  export interface PageData {
    /** Page title used in headings and <title> */
    title: string;
    /** Short summary for meta/SEO */
    description: string;
    /** React component that renders the MDX/body */
    body: PageBody;
    /** Optional pre-rendered string content */
    content?: string;
    /** Table of contents */
    toc?: TocItem[];
    /** Optional external/internal links */
    links?: PageLinks;
    /** Last modified time—Date or ISO string for serialization */
    lastModified?: Date | string;
    /** Parser-provided blocks/headings */
    structuredData?: StructuredData;
    /** File metadata from the loader */
    _file?: FileMeta;
    /** Named exports collected from MDX (if any) */
    _exports?: unknown;
    /** Allow extensions without forcing `any` everywhere */
    [key: string]: unknown;
  }

  /** A concrete page record known to the source */
  export interface Page<T extends PageData = PageData> {
    data: T;
    url: string;
    path: string;
    file: {
      /** Filename with extension, e.g. "intro.mdx" */
      name: string;
      /** Directory containing the file, e.g. "/docs/getting-started" */
      dirname: string;
      /** Path relative to project root, e.g. "docs/getting-started/intro.mdx" */
      path: string;
    };
  }

  /** Tree of pages for navigation */
  export interface PageTree {
    /** Unique internal identifier (added by fumadocs) */
    $id?: string;
    /** Display name of the group/page */
    name: string;
    /** URL path if type === "page" */
    url?: string;
    /** Recursive children if type === "folder" */
    children?: PageTree[];
    /** Whether it’s a folder or single page */
    type: "folder" | "page";
  }

  /** Parameter object for Next.js dynamic routes */
  export interface SlugParam {
    slug: string[];
  }

  /** Source interface used by the loader */
  export interface Source<TPage extends PageData = PageData> {
    /** Retrieve a page by an array of slugs. Omit/empty for index page. */
    getPage(slugs?: string[]): Page<TPage> | undefined;
    /** All pages known to this source */
    getPages(): Array<Page<TPage>>;
    /** Tree used to render sidebars, etc. */
    pageTree: PageTree;
    /** Dynamic route params for Next.js ([...slug]) */
    generateParams(): SlugParam[];
  }

  export interface LoaderConfig<TSource = unknown> {
    /** Base pathname where the docs will be served (e.g. "/docs") */
    baseUrl: string;
    /** The underlying content source (filesystem, virtual map, etc.) */
    source: TSource;
  }

  /**
   * Create a typed Source from a given provider.
   * Keep this generic so projects can extend PageData and still get strong typing.
   */
  export function loader<TPage extends PageData = PageData, TSource = unknown>(
    config: LoaderConfig<TSource>
  ): Source<TPage>;
}

declare module "fumadocs-mdx" {
  /** A generic key/value map used by createMDXSource */
  export type MDXMap = Record<string, unknown>;

  export interface MDXOptions {
    /** Options forwarded to the MDX compiler/remark/rehype plugins */
    mdxOptions?: unknown;
    /** Allow extension for library-specific flags */
    [key: string]: unknown;
  }

  /**
   * Construct a source from an MDX map. The exact shape depends on fumadocs internals,
   * so we keep this intentionally generic while remaining typed.
   */
  export function createMDXSource(map: MDXMap, options?: MDXOptions): unknown;
}

declare module "fumadocs-core/server" {
  export interface Neighbour {
    name: string;
    url: string;
  }

  export interface Neighbours {
    previous?: Neighbour;
    next?: Neighbour;
  }

  /**
   * Find the previous/next neighbours for a given URL within a tree.
   * The promise form allows implementations that perform I/O.
   */
  export function findNeighbour(
    tree: import("fumadocs-core/source").PageTree,
    url: string
  ): Promise<Neighbours>;
}

declare module "*.mdx" {
  const MDXComponent: (props: Record<string, unknown>) => React.ReactElement;
  export default MDXComponent;
}

declare module "*.json" {
  const value: unknown;
  export default value;
}
