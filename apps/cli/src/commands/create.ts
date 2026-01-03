import { log } from "console"
import { clearRegistryContext } from "@/src/registry/context"
import { handleError } from "@/src/utils/handle-error"
import { logger } from "@/src/utils/logger"
// import path from "path"
// import { getPreset, getPresets, getRegistryItems } from "@/src/registry/api"
// import { configWithDefaults } from "@/src/registry/config"
// import { isUrl } from "@/src/registry/utils"
// import { Preset } from "@/src/schema"
// import { addComponents } from "@/src/utils/add-components"
// import { highlighter } from "@/src/utils/highlighter"
// import { ensureRegistriesInConfig } from "@/src/utils/registries"
// import { updateFiles } from "@/src/utils/updaters/update-files"
import { Command } from "commander"

import { highlighter } from "../utils/highlighter"

// import dedent from "dedent"
// import open from "open"
// import prompts from "prompts"

// import { initOptionsSchema, runInit } from "./init"

const OCTACN_URL = "https://ui.octacn.com"

const CREATE_TEMPLATES = {
  next: "Next.js",
  vite: "Vite",
  start: "TanStack Start",
} as const

type Template = keyof typeof CREATE_TEMPLATES

export const create = new Command()
  .name("create")
  .description("create a new project with shadcn/ui")
  .argument("[name]", "the name of your project")
  .option(
    "-t, --template <template>",
    "the template to use. e.g. next, start or vite"
  )
  .option("-p, --preset [name]", "use a preset configuration")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option(
    "--src-dir",
    "use the src directory when creating a new project.",
    false
  )
  .option(
    "--no-src-dir",
    "do not use the src directory when creating a new project."
  )
  .option("-y, --yes", "skip confirmation prompt.", true)
  .action(async (name, opts) => {
    try {
     
      log("done in try")
    } catch (error) {
      logger.break()
      handleError(error)
    } finally {
      clearRegistryContext()
    }
  })

// function buildInitUrl(preset: Preset) {
//   const params = new URLSearchParams({
//     base: preset.base,
//     style: preset.style,
//     baseColor: preset.baseColor,
//     theme: preset.theme,
//     iconLibrary: preset.iconLibrary,
//     font: preset.font,
//     menuAccent: preset.menuAccent,
//     menuColor: preset.menuColor,
//     radius: preset.radius,
//   })

//   return `${getOctacnInitUrl()}?${params.toString()}`
// }

// async function handlePresetOption(presetArg: string | boolean) {
//   // If --preset is used without a name, show interactive list.
//   if (presetArg === true) {
//     const presets = await getPresets()

//     const { selectedPreset } = await prompts({
//       type: "select",
//       name: "selectedPreset",
//       message: `Which ${highlighter.info("preset")} would you like to use?`,
//       choices: [
//         ...presets.map((preset) => ({
//           title: preset.title,
//           description: preset.description,
//           value: preset.name,
//         })),
//         {
//           title: "Custom",
//           description: "Build your own on https://ui.shadcn.com",
//           value: "custom",
//         },
//       ],
//     })

//     if (!selectedPreset) {
//       return null
//     }

//     if (selectedPreset === "custom") {
//       const url = getOctacnCreateUrl()
//       logger.info(`\nOpening ${highlighter.info(url)} in your browser...\n`)
//       await open(url)
//       return null
//     }

//     return presets.find((p) => p.name === selectedPreset) ?? null
//   }

//   // If --preset NAME or URL is provided.
//   if (typeof presetArg === "string") {
//     // Check if it's a URL.
//     if (isUrl(presetArg)) {
//       return { _isUrl: true, url: presetArg } as const
//     }

//     // Otherwise, fetch that preset by name.
//     const preset = await getPreset(presetArg)

//     if (!preset) {
//       const presets = await getPresets()
//       const presetNames = presets.map((p) => p.name).join(", ")
//       logger.error(
//         `Preset "${presetArg}" not found. Available presets: ${presetNames}`
//       )
//       process.exit(1)
//     }

//     return preset
//   }

//   return null
// }

// function getTemplateFiles(template: Template) {
//   switch (template) {
//     case "vite":
//       return [
//         {
//           type: "registry:file" as const,
//           path: "src/App.tsx",
//           target: "src/App.tsx",
//           content: dedent`import { ComponentExample } from "@/components/component-example";

// export function App() {
//   return <ComponentExample />;
// }

// export default App;
// `,
//         },
//       ]
//     case "next":
//       return [
//         {
//           type: "registry:page" as const,
//           path: "app/page.tsx",
//           target: "app/page.tsx",
//           content: dedent`import { ComponentExample } from "@/components/component-example";

// export default function Page() {
//   return <ComponentExample />;
// }
// `,
//         },
//       ]
//     case "start":
//       return [
//         {
//           type: "registry:file" as const,
//           path: "src/routes/index.tsx",
//           target: "src/routes/index.tsx",
//           content: dedent`import { createFileRoute } from "@tanstack/react-router";
// import { ComponentExample } from "@/components/component-example";

// export const Route = createFileRoute("/")({ component: App });

// function App() {
//   return (
//     <ComponentExample />
//   );
// }
// `,
//         },
//       ]
//     default:
//       return []
//   }
// }

function getOctacnCreateUrl() {
  return `${OCTACN_URL}/create`
}

function getOctacnInitUrl() {
  return `${OCTACN_URL}/init`
}
