import { type Registry } from "@/schema/shadcn";

export const components: Registry["items"] = [
  {
    name: "file-uploader",
    type: "registry:component",
    files: [
      {
        path: "src/components/file-uploader.tsx",
        type: "registry:component",
        target: "components/file-uploader.tsx",
      },
    ],
  },
];
