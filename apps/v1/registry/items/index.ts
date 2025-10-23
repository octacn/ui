import { registryItemSchema, type Registry } from "@/schema/shadcn"
import { z } from "zod"

import { blocks } from "@/registry/items/blocks"
import { blocksDemo } from "@/registry/items/blocks-demo"
import { components } from "@/registry/items/components"
import { componentsDemo } from "@/registry/items/components-demo"
import { lib } from "@/registry/items/lib"
import { sidebarDemo } from "@/registry/items/sidebars-demo"
import { ui } from "@/registry/items/ui"
import { uiDemo } from "@/registry/items/ui-demo"

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
} satisfies Registry
