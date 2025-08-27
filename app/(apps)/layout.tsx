import { TestimonialsSection } from "@/components/_components/testimonials-section";
import { LogoSection } from "@/components/_components/logo-section";
import { HeroSection } from "@/components/_components/hero-section";
import { FaqSection } from "@/components/_components/faq-section";
import { CtaSection } from "@/components/_components/cta-section";
import { PageNav } from "@/components/page-nav";
import { ExampleSection } from "@/components/_components/example-section";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeroSection />
      <PageNav className="hidden md:flex">
        <ExampleSection className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
      </PageNav>
      {children}
      <LogoSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};
