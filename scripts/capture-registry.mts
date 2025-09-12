import { existsSync } from "fs";
import path from "path";
import puppeteer from "puppeteer";

const REGISTRY_PATH = path.join(process.cwd(), "public/images");

// Example block definitions
// Each block has an id (used for filename) and a url (with path + query)
const blocks = [
  {
    id: "card",
    url: "http://localhost:3000/preview/ui/card?name=card&src=ui",
  },
  {
    id: "button",
    url: "http://localhost:3000/preview/ui/button?name=button&src=ui",
  },
];

// ----------------------------------------------------------------------------
// Capture screenshots.
// ----------------------------------------------------------------------------
async function captureScreenshots() {
  const pendingBlocks = blocks.filter((block) => {
    const lightPath = path.join(REGISTRY_PATH, `${block.id}-light.png`);
    const darkPath = path.join(REGISTRY_PATH, `${block.id}-dark.png`);
    return !existsSync(lightPath) || !existsSync(darkPath);
  });

  if (pendingBlocks.length === 0) {
    console.log("✨ All screenshots exist, nothing to capture");
    return;
  }

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  });

  for (const block of pendingBlocks) {
    const page = await browser.newPage();
    await page.goto(block.url, { waitUntil: "networkidle2" });

    console.log(`- Capturing ${block.id}...`);

    for (const theme of ["light", "dark"]) {
      const screenshotPath = path.join(
        REGISTRY_PATH,
        `${block.id}${theme === "dark" ? "-dark" : "-light"}.png`
      );

      if (existsSync(screenshotPath)) {
        continue;
      }

      // Set theme and reload
      await page.evaluate((currentTheme) => {
        localStorage.setItem("theme", currentTheme);
      }, theme);

      await page.reload({ waitUntil: "networkidle2" });

      // Wait for animations to complete
      if (block.id.startsWith("chart") || block.id.startsWith("dashboard")) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Hide Tailwind indicator
      await page.evaluate(() => {
        const indicator = document.querySelector("[data-tailwind-indicator]");
        if (indicator) indicator.remove();
      });

      await page.screenshot({ path: screenshotPath as `${string}.png` });
    }

    await page.close();
  }

  await browser.close();
}

try {
  console.log("🔍 Capturing screenshots...");

  await captureScreenshots();

  console.log("✅ Done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
