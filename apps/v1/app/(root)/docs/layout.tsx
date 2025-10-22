import { DocsFooter } from "@/components/site-footer"

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <DocsFooter />
    </>
  )
}
