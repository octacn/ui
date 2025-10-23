import { registryItemSchema } from "@/schema/shadcn"
import { z } from "zod"

// Define the registry item type for better type safety
type RegistryItem = z.infer<typeof registryItemSchema>
type RegistryItemType = RegistryItem["type"]

export async function getAllBlockIds(
  types: RegistryItemType[] = ["registry:block", "registry:internal"],
  categories: string[] = []
): Promise<string[]> {
  const blocks = await getAllBlocks(types, categories)

  return blocks.map((block) => block.name)
}

export async function getAllBlocks(
  types: RegistryItemType[] = ["registry:block", "registry:internal"],
  categories: string[] = []
): Promise<RegistryItem[]> {
  try {
    const { Index } = await import("@/registry/__index__")

    // More explicit type checking for the index
    const index = z.record(z.string(), registryItemSchema).parse(Index)

    return Object.values(index).filter(
      (block): block is RegistryItem =>
        types.includes(block.type) &&
        (categories.length === 0 ||
          Boolean(
            block.categories?.some((category) => categories.includes(category))
          )) &&
        !block.name.startsWith("chart-")
    )
  } catch (error) {
    console.error("Error loading registry index:", error)
    return []
  }
}
