import { type Registry } from "@/schema/shadcn";

export const blocksDemo: Registry["items"] = [
  {
    name: "pricing-01-demo",
    description: "A Pricing Demo of three section.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "utils", "button"],
    files: [
      {
        path: "demo/blocks/pricing-01-demo.tsx",
        type: "registry:block",
        target: "components/pricing-demo.tsx",
      },
      {
        path: "blocks/pricing-01.tsx",
        type: "registry:block",
        target: "components/pricing-01.tsx",
      },
    ],
    categories: ["pricing"],
  },
];
