import MaxWidthWrapper from "@/registry/ui/max-width-wrapper";
import { ThemeProvider } from "@/registry/ui/theme-provider";
import { Geist, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "@/styles/globals.css";
// import "@/styles/new-globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
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
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} antialiased`}
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
