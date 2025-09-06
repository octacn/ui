import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function convertRegistryPaths(content: string) {
  return (
    content
      // Registry ui path
      .replace(/@\/registry\/ui/g, "@/components/ui")

      // Registry src path
      .replace(/@\/registry\/src\/components\/ui/g, "@/components/ui")
      .replace(/@\/registry\/src\/hooks/g, "@/hooks")
      .replace(/@\/registry\/src\/lib/g, "@/lib")
  );
}
