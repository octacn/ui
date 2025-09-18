import TestimonialsSection from "@/components/_components/testimonials-section";
import { ExampleSection } from "@/components/_components/example-section";
import { ShootingStars } from "@/registry/src/backgrounds/shooting-stars";
import PremiumShowcase from "@/components/_components/premium-showcase";
import HeroSection from "@/components/_components/hero-section";
import LogoSection from "@/components/_components/logo-section";
import CtaSection from "@/components/_components/cta-section";
import FaqSection from "@/components/_components/faq-section";
import { PageNav } from "@/components/page-nav";
import { BoxWrapper } from "@/components/box";

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
        <PremiumShowcase />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </>
    </main>
  );
}
