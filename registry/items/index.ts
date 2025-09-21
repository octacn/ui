import { registryItemSchema, type Registry } from "@/schema/shadcn";
import { z } from "zod";

import { componentsDemo } from "@/registry/items/components-demo";
import { sidebarDemo } from "@/registry/items/sidebars-demo";
import { blocksDemo } from "@/registry/items/blocks-demo";
import { components } from "@/registry/items/components";
import { uiDemo } from "@/registry/items/ui-demo";
import { blocks } from "@/registry/items/blocks";
import { lib } from "@/registry/items/lib";
import { ui } from "@/registry/items/ui";

export const registry = {
  name: "octacn/ui",
  homepage: "https://ui.octacn.com",
  items: z
    .array(registryItemSchema)
    .parse([
      ...ui,
      ...lib,
      ...blocks,
      ...components,

      ...uiDemo,
      ...blocksDemo,
      ...sidebarDemo,
      ...componentsDemo,
    ]),
} satisfies Registry;
