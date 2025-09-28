interface PinterestLayoutProps {
  images: string[];
}

export function PinterestLayout({ images }: PinterestLayoutProps) {
  const getColumnClasses = () => {
    const imageCount = images.length;

    if (imageCount <= 2) return "columns-1";
    if (imageCount <= 4) return "columns-1 sm:columns-2";
    if (imageCount <= 6) return "columns-1 sm:columns-2 md:columns-3";
    if (imageCount <= 9) return "columns-2 sm:columns-3 md:columns-4";
    return "columns-2 sm:columns-3 md:columns-4 lg:columns-5";
  };

  return (
    <section className={`gap-4 ${getColumnClasses()}`}>
      {images.map((imageUrl, idx) => (
        <img
          key={imageUrl}
          className="mb-4 size-full rounded-lg object-cover"
          src={imageUrl}
          alt={`Image ${idx + 1}`}
          loading="lazy"
        />
      ))}
    </section>
  );
}
