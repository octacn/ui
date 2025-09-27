export function getLastSegment(slug: string[] | string): string | null {
  if (Array.isArray(slug)) {
    return slug[slug.length - 1] || null;
  }

  const segments = slug.split("/").filter(Boolean);
  return segments.pop() || null;
}

export function getFirstSegment(slug: string[] | string): string | null {
  if (Array.isArray(slug)) {
    return slug[0] || null;
  }

  const segments = slug.split("/").filter(Boolean);
  return segments[0] || null;
}
