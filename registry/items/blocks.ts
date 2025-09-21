import { type Registry } from "@/schema/shadcn";

export const blocks: Registry["items"] = [
  {
    name: "header-01",
    description: "A responsive header block with navigation.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["sheet", "utils", "button"],
    files: [
      {
        path: "blocks/header-01.tsx",
        type: "registry:block",
        target: "components/header.tsx",
      },
      {
        path: "ui/sheet.tsx",
        type: "registry:component",
        target: "components/ui/sheet.tsx",
      },
      {
        path: "ui/button.tsx",
        type: "registry:component",
        target: "components/ui/button.tsx",
      },
      {
        path: "lib/utils.ts",
        type: "registry:lib",
        target: "lib/utils.ts",
      },
    ],
    categories: ["header"],
  },
];
