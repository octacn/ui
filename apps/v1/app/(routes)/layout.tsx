import { SiteFooter } from "@/components/site-footer"

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  )
}
