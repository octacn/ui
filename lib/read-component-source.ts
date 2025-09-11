import { promises as fs } from "fs";
import path from "path";

export const readComponentSource = async (
  sourcePath: string,
  componentName: string
) => {
  // Handle different path formats
  let normalizedPath = sourcePath;

  // Remove @/ prefix if present
  if (normalizedPath.startsWith("@/")) {
    normalizedPath = normalizedPath.replace(/^@\//, "");
  }

  // Ensure we're looking in the registry directory
  if (!normalizedPath.startsWith("registry/")) {
    normalizedPath = `registry/${normalizedPath}`;
  }

  // Build the file path
  const fileName = `${componentName}.tsx`;
  const filePath = path.join(process.cwd(), normalizedPath, fileName);

  console.log(`Attempting to read: ${filePath}`); // Debug log

  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);

    // Try alternative paths
    const alternativePaths = [
      path.join(process.cwd(), "components", "ui", `${componentName}.tsx`),
      path.join(
        process.cwd(),
        "src",
        "components",
        "ui",
        `${componentName}.tsx`
      ),
      path.join(process.cwd(), normalizedPath, `${componentName}.ts`),
      path.join(process.cwd(), normalizedPath, `index.tsx`),
    ];

    for (const altPath of alternativePaths) {
      try {
        console.log(`Trying alternative path: ${altPath}`);
        const source = await fs.readFile(altPath, "utf8");
        return source;
      } catch {
        // Continue to next alternative
      }
    }

    return null;
  }
};

export const readComponentPath = async (
  sourcePath: string,
  componentName: string
) => {
  try {
    const Component = (
      await import(`@/registry/${sourcePath}/${componentName}.tsx`)
    ).default;
    return Component;
  } catch (error) {
    console.error(`Error reading file ${sourcePath}:`, error);
    return null;
  }
};
