import { ImageCardItem } from "@/lib/image-card-item";
import { imageCardSchema } from "@/schema/image-card-schema";
import { ImageViewer } from "./image-viewer";
import React from "react";

export async function ImageDisplay({ name }: { name: string }) {
  const item = await getCachedImageCardItem(name);

  if (!item) {
    return <div>No item found</div>;
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
