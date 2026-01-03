import { getRegistryItem } from "@/lib/registry"

export const replaceComponentSource = async (content: string) => {
  const componentSourceMatches = [
    ...content.matchAll(/<ComponentSource\s+name="([^"]+)"[^>]*>/g),
  ]
  for (const [fullMatch, name] of componentSourceMatches) {
    const component = await getRegistryItem(name)
    if (component?.files?.[0]?.content) {
      const sourceCode = component.files[0].content
      const replacement = `\`\`\`tsx\n${sourceCode}\n\`\`\``
      content = content.replace(fullMatch, replacement)
    } else {
      content = content.replace(fullMatch, fullMatch)
    }
  }

  return content
}
