import MaxWidthWrapper from "@/registry/ui/max-width-wrapper";
import { ThemeProvider } from "@/registry/ui/theme-provider";
import { Geist, Inter, Space_Grotesk } from "next/font/google";
import { META_THEME_COLORS } from "@/lib/config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased",
          "[--footer-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
          "[--header-height:calc(var(--spacing)*14)]",
          `${geistSans.variable} ${spaceGrotesk.variable} ${inter.variable}`
        )}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <SiteHeader />
            {children}
            <SiteFooter />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
