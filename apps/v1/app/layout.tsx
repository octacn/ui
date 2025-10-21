import MaxWidthWrapper from "@/registry/ui/max-width-wrapper";
import { ThemeProvider } from "@/registry/ui/theme-provider";
import { Geist, Inter, Space_Grotesk } from "next/font/google";
import { META_THEME_COLORS, siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Toaster } from "@/registry/ui/sonner";

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
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: [
    "Tailwind CSS",
    "Components",
    "ui.octacn",
    "Next.js",
    "octacn",
    "React",
  ],
  authors: [
    {
      name: "octacn",
      url: "https://octacn.com",
    },
  ],
  creator: "sahilkumardev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.png`],
    creator: "@sahilkumardev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
          <MaxWidthWrapper>{children}</MaxWidthWrapper>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
