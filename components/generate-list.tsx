"use client";

import type { source } from "@/lib/source";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getLastSegment } from "@/lib/get-segment";
import { Suggestion } from "./image-viewer";

export default function GenerateList({
  tree,
}: {
  tree: typeof source.pageTree;
}) {
  const path = usePathname();
  const name = getLastSegment(path);
  // const startName = getFirstSegment(path);

  // console.log("====================================");
  // console.log(tree);
  // console.log("====================================");

  // if (startName === "blocks-docs") {
  //   return <Suggestion>Components found </Suggestion>;
  // }

  if (!name) {
    return null;
  }

  const components = tree.children.find(
    (page) => page.$id === name.toLowerCase()
  );

  if (components?.type !== "folder") {
    return;
  }

  const list = components.children.filter(
    (component) => component.type === "page"
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20 text-base/normal font-inter tracking-wide">
      {list.map((component, idx) => (
        <div key={component.$id} className="flex gap-1">
          {1 + idx}.
          <Link
            href={component.url}
            className="underline-offset-4 hover:underline hover:text-muted-foreground"
          >
            <span>{component.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

// "use client";

// import { source, authSource, blocksSource } from "@/lib/source";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useMemo } from "react";
// import { getLastSegment } from "@/lib/get-segment";
// import { Suggestion } from "./image-viewer";

// // Type for the page tree structure
// type PageTree =
//   | typeof source.pageTree
//   | typeof blocksSource.pageTree
//   | typeof authSource.pageTree;

// interface GenerateListProps {
//   tree: PageTree;
// }

// export default function GenerateList({ tree }: GenerateListProps) {
//   const path = usePathname();

//   const pageComponents = useMemo(() => {
//     const name = getLastSegment(path);

//     if (!name) return [];

//     const components = tree.children.find(
//       (page) => page.$id === name.toLowerCase()
//     );

//     if (components?.type !== "folder") return [];

//     return components.children.filter((component) => component.type === "page");
//   }, [tree.children, path]);

//   if (pageComponents.length === 0) {
//     return <Suggestion>No components found</Suggestion>;
//   }

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20 text-base/normal font-inter tracking-wide">
//       {pageComponents.map((component, idx) => (
//         <div key={component.$id} className="flex gap-1">
//           <span className="text-muted-foreground">{idx + 1}.</span>
//           <Link
//             href={component.url}
//             className="underline-offset-4 hover:underline hover:text-muted-foreground transition-colors"
//           >
//             {component.name}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
