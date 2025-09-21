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
];
