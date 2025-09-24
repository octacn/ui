import { type Registry } from "@/schema/shadcn";

export const componentsDemo: Registry["items"] = [
  {
    name: "file-uploader-demo",
    type: "registry:component",
    files: [
      {
        path: "demo/components/file-uploader-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "phone-frame-demo",
    type: "registry:component",
    files: [
      {
        path: "demo/components/phone-frame-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "paper-background-demo",
    type: "registry:component",
    files: [
      {
        path: "demo/components/paper-background-demo.tsx",
        type: "registry:component",
        target: "components/paper-background.tsx",
      },
    ],
  },
  {
    name: "scale-hover-animation-button-demo",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "demo/components/scale-hover-animation-button-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "magnetic-shimmer-button-demo",
    type: "registry:component",
    registryDependencies: ["utils"],
    files: [
      {
        path: "demo/components/magnetic-shimmer-button-demo.tsx",
        type: "registry:component",
      },
    ],
  },
];
