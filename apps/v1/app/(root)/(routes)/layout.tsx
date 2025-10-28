import { ExampleSection } from "@/components/_components/example-section"
import HeroSection from "@/components/_components/hero-section"
import LogoSection from "@/components/_components/logo-section"
import { BoxWrapper } from "@/components/box"
import { PageNav } from "@/components/page-nav"
import ProLibraryCta from "@/components/pro-library-cta"
import { SiteFooter } from "@/components/site-footer"
import { ShootingStars } from "@/registry/components/shooting-stars"

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <ShootingStars />
      <>
        <HeroSection />
        <LogoSection />
        <BoxWrapper className="lg:pt-6 pt-0">
          <PageNav className="hidden md:flex">
            <ExampleSection className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
          </PageNav>
          <div className="hidden md:block">{children}</div>
        </BoxWrapper>
        <ProLibraryCta className="mb-10" marginBottom show />      
        <SiteFooter />
      </>
    </main>
  )
}
