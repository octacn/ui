import { type Registry } from "@/schema/shadcn";

export const ui: Registry["items"] = [
  {
    name: "alert",
    type: "registry:ui",
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
  },
];
