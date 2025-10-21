export function AndroidFrame({
  src,
  title,
  badge,
  description,
}: {
  src: string;
  title: string;
  badge?: string;
  description: string;
}) {
  return (
    <div className="relative rounded-4xl glass-border bg-neutral-900 p-3.5 pt-7 h-fit border-3 select-none">
      <div className="w-full overflow-hidden rounded-2xl h-[590px] bg-black">
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-80 h-full object-cover"
        />

        <div className="z-10 p-3 top-0 left-0 right-0 absolute">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="pl-6 pt-4">
            <div className="text-3xl font-bold leading-snug text-background font-inter tracking-wide">
              {title}
            </div>
            <p className="text-sm text-background/70 font-inter font-medium">
              {description}
            </p>
            <div className="mt-2 inline-flex items-center rounded-full bg-yellow-300 px-2 py-0.5 text-xs uppercase tracking-wider text-foreground">
              {badge ? "ui.octacn" : badge}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IphoneFrame({
  src,
  title,
  badge,
  description,
}: {
  src: string;
  title: string;
  badge?: string;
  description: string;
}) {
  return (
    <div className="relative rounded-[58px] glass-border bg-neutral-900 py-5 px-5 h-fit border-3 select-none">
      <div className="w-full overflow-hidden rounded-[40px] bg-black">
        <video
          src={src}
          className="w-80 h-fit"
          preload="none"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="mx-auto h-5 w-24 rounded-full bg-black absolute top-7 right-0 left-0 z-20">
          <div className="relative flex items-center h-full pl-3">
            <div className="h-1 w-1 rounded-full bg-white/70" />
          </div>
        </div>
        <div className="z-10 p-3 pt-10 top-0 left-0 right-0 absolute">
          <div className="pl-6 pt-4">
            <div className="text-3xl font-bold leading-snug text-background font-inter tracking-wide">
              {title}
            </div>
            <p className="text-sm text-background/70 font-inter font-medium">
              {description}
            </p>
            <div className="mt-2 inline-flex items-center rounded-full bg-yellow-300 px-2 py-0.5 text-xs uppercase tracking-wider text-foreground">
              {badge ? "ui.octacn" : badge}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
