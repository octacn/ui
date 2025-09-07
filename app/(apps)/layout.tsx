import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
};
