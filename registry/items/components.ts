import { type Registry } from "@/schema/shadcn";

export const components: Registry["items"] = [
  {
    name: "file-uploader",
    type: "registry:component",
    files: [
      {
        path: "components/file-uploader.tsx",
        type: "registry:component",
        target: "components/file-uploader.tsx",
      },
    ],
  },
  {
    name: "phone-frame",
    type: "registry:component",
    files: [
      {
        path: "components/phone-frame.tsx",
        type: "registry:component",
        target: "components/phone-frame.tsx",
      },
    ],
  },
  {
    name: "paper-background",
    type: "registry:component",
    files: [
      {
        path: "components/paper-background.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "scale-hover-animation-button",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/scale-hover-animation-button.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "magnetic-shimmer-button",
    type: "registry:component",
    registryDependencies: ["utils"],
    files: [
      {
        path: "components/magnetic-shimmer-button.tsx",
        type: "registry:component",
      },
    ],
  },
];
