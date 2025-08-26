export default function RoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-green-500">{children}</div>;
}
