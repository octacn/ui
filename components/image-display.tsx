import { Suggestion, ImageViewer } from "@/components/image-viewer";
import { imageCardSchema } from "@/schema/image-schema";
import { ImageCardItem } from "@/lib/image-item";
import { cn } from "@/lib/utils";
import React from "react";

export async function ImageDisplay({
  name,
  title,
  grid = false,
}: {
  name: string[];
  grid?: boolean;
  title: string;
}) {
  if (!Array.isArray(name)) {
    return <Suggestion>Please pass the name as an array</Suggestion>;
  }

  if (name.length == 0) {
    return <Suggestion>No name added right now</Suggestion>;
  }

  const items = await Promise.all(
    name.map((name) => getCachedImageCardItem(name))
  );

  return (
    <section>
      <h1 className="text-xl font-inter font-medium tracking-wide cursor-default">
        • {title}
      </h1>

      <div
        className={cn(
          "mt-3 grid gap-4 sm:gap-8",
          grid ? "grid-cols-3" : "grid-cols-2"
        )}
      >
        {name.map((name, idx) => {
          const item = items[idx];

          return item ? (
            <ImageViewer key={name} item={item} />
          ) : (
            <Suggestion key={name}>Item not found: {name}</Suggestion>
          );
        })}
      </div>
    </section>
  );
}

const getCachedImageCardItem = React.cache(async (name: string) => {
  return await getImageCardItem(name);
});

async function getImageCardItem(name: string) {
  const item = ImageCardItem[name];

  if (!item) {
    return null;
  }

  const result = imageCardSchema.safeParse(item);

  if (!result.success) {
    console.error(`Failed to parse item "${name}":`, result.error.message);
    return null;
  }

  return result.data;
}
