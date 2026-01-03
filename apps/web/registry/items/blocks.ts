import { type Registry } from "@/schema/shadcn"

export const blocks: Registry["items"] = [
  {
    name: "header-v1",
    description: "A responsive header block with navigation.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["sheet", "utils", "button"],
    files: [
      {
        path: "blocks/header-v1.tsx",
        type: "registry:block",
        target: "components/header.tsx",
      },
      {
        path: "ui/sheet.tsx",
        type: "registry:component",
        target: "components/ui/sheet.tsx",
      },
      {
        path: "ui/button.tsx",
        type: "registry:component",
        target: "components/ui/button.tsx",
      },
      {
        path: "lib/utils.ts",
        type: "registry:lib",
        target: "lib/utils.ts",
      },
    ],
    categories: ["header"],
  },
  {
    name: "pricing-v1",
    description: "A Pricing section of three section.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "utils", "button"],
    files: [
      {
        path: "blocks/pricing-v1.tsx",
        type: "registry:block",
        target: "components/pricing.tsx",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "auth-form-v1",
    description: "A Authentication form with sign up and sign in section.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "utils", "button", "input", "label"],
    files: [
      {
        path: "blocks/auth-form-v1.tsx",
        type: "registry:block",
        target: "components/auth-form.tsx",
      },
    ],
    categories: ["authentication"],
  },
]
