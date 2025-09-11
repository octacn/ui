import { ComponentPreview } from "@/components/component-preview";
import { getComponentData } from "@/lib/get-component";
import { notFound } from "next/navigation";

interface PreviewPageProps {
  searchParams?: Promise<{ name: string; src: string }>;
}

export default async function PreviewPage({ searchParams }: PreviewPageProps) {
  const params = await searchParams;
  const name = params?.name;
  const src = params?.src;

  if (!name || !src) return notFound();

  const data = await getComponentData(name, src);

  return <ComponentPreview name={data.name} src={data.src} hideCode />;
}
