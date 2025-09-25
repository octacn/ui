import { type Registry } from "@/schema/shadcn";

export const blocksDemo: Registry["items"] = [
  {
    name: "pricing-v1-demo",
    description: "A Pricing Demo of three section.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "utils", "button"],
    files: [
      {
        path: "demo/blocks/pricing-v1-demo.tsx",
        type: "registry:block",
        target: "components/pricing-demo.tsx",
      },
      {
        path: "blocks/pricing-v1.tsx",
        type: "registry:block",
        target: "components/pricing-v1.tsx",
      },
    ],
    categories: ["pricing"],
  },
];
