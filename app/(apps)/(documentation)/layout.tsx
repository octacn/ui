import { DocsFooter } from "@/components/site-footer";

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <DocsFooter />
    </>
  );
}
