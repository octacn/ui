import { registryItemSchema, type Registry } from "@/schema/shadcn";
import { z } from "zod";

import { ui } from "@/registry/registry-items/ui";
import { componentsDemo } from "./registry-items/components-demo";
// import { blocks } from "@/registry/registry-items/blocks";

// const APP_STYLE = {
//   type: "registry:style",
//   dependencies: ["class-variance-authority", "lucide-react"],
//   devDependencies: ["tw-animate-css"],
//   registryDependencies: ["utils"],
//   cssVars: {},
//   files: [],
// };

export const registry = {
  name: "octacn/ui",
  homepage: "https://ui.octacn.com",
  items: z.array(registryItemSchema).parse([
    // {
    //   name: "index",
    //   ...APP_STYLE,
    // },
    // {
    //   name: "style",
    //   ...APP_STYLE,
    // },
    ...ui,
    ...componentsDemo,
    // ...blocks,
  ]),
} satisfies Registry;
