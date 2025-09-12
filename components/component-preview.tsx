import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { ComponentType, Index } from "@/registry/registry-items";
import Image from "next/image";

export async function ComponentPreview({
  src,
  name,
  className,
  align = "center",
  hideCode = false,
  ...props
}: React.ComponentProps<"div"> & {
  src: string;
  name: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
}) {
  const Component = Index[name as ComponentType]?.component;

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not founded in registry.
      </p>
    );
  }

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      component={<Component />}
      source={<ComponentSource src={src} name={name} collapsible={false} />}
      {...props}
    />
  );
}

export function ComponentImagePreview({ name }: { name: string }) {
  return (
    <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
      <Image
        src={`/images/${name}-light.png`}
        alt={name}
        width={1440}
        height={900}
        className="bg-background absolute top-0 left-0 z-20 md:hidden dark:hidden md:dark:hidden"
      />
      <Image
        src={`/images/${name}-dark.png`}
        alt={name}
        width={1440}
        height={900}
        className="bg-background absolute top-0 left-0 z-20 hidden md:hidden dark:block md:dark:hidden"
      />
      <div className="bg-background absolute inset-0 hidden w-[1600px] md:block">
        <iframe src={`/view/${name}`} className="size-full" />
      </div>
    </div>
  );
}
