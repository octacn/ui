import { imageCardSchema } from "@/schema/image-schema";
import { ImageViewer } from "@/components/image-viewer";
import { ImageCardItem } from "@/lib/image-item";
import React from "react";

export async function ImageDisplay({ name }: { name: string }) {
  const item = await getCachedImageCardItem(name);

  if (!item) {
    return (
      <div className="text-muted-foreground px-4 py-2 rounded-2xl text-sm font-inter border bg-surface">
        No item found
      </div>
    );
  }

  return <ImageViewer item={item} />;
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
    return null;
  }

  const parsed = imageCardSchema.safeParse({
    ...result.data,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}
