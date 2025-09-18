import { type Registry } from "@/schema/shadcn";

export const componentsDemo: Registry["items"] = [
  {
    name: "accordion-demo",
    type: "registry:block",
    files: [
      {
        path: "demo/components/accordion-demo.tsx",
        type: "registry:ui",
        target: "components/demo.tsx",
      },
    ],
  },
];
