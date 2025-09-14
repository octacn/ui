export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <div className="mt-2">
      <div className="before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] before:absolute before:inset-x-0 before:-top-0 before:h-px relative w-full" />

      <div className="py-4 px-6 md:py-5 md:px-14 text-center space-y-2 md:space-y-0 md:flex items-center justify-between">
        <p className="font-inter text-muted-foreground text-xs sm:text-sm">
          © 2025 Octacn Labs LLC. All Rights Reserved.
        </p>

        <p className="text-foreground/90 font-inter  text-xs sm:text-sm tracking-wider">
          Building in public at{" "}
          <span className="text-muted-foreground">@sahilkumardev</span>
        </p>
      </div>
    </div>
  );
}
