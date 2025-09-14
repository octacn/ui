import { TestimonialsSection } from "@/components/_components/testimonials-section";
import { StarsBackground } from "@/registry/src/backgrounds/stars-background";
import { ShootingStars } from "@/registry/src/backgrounds/shooting-stars";
import { ExampleSection } from "@/components/_components/example-section";
import { LogoSection } from "@/components/_components/logo-section";
import { HeroSection } from "@/components/_components/hero-section";
import { FaqSection } from "@/components/_components/faq-section";
import { CtaSection } from "@/components/_components/cta-section";
import { PageNav } from "@/components/page-nav";
import { TextHoverEffect } from "@/registry/src/text/text-hover-effect";

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <>
        <ShootingStars />
        <StarsBackground />
      </>
      <div>
        {/* <HeroSection /> */}

        {/* <PageNav className="hidden md:flex">
        <ExampleSection className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
        </PageNav> */}
        {/* {children}
      <LogoSection />
      <CtaSection /> */}

        <TestimonialsSection />
        <FaqSection />
        <TextHoverEffect text="Octacn" />
      </div>
    </main>
  );
}
