import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { PiWarningDuotone } from "react-icons/pi";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <IssueButton />
      <SiteHeader />
      {children}
    </>
  );
}

function IssueButton() {
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <Link
        href={siteConfig.issue}
        target="_blank"
        rel="noreferrer"
        className="bg-purple-600 px-5 py-1.5 rounded-full shadow-lg hover:bg-purple-700 transition-colors cursor-pointer flex items-center justify-center gap-2 font-inter font-normal tracking-wide"
      >
        <PiWarningDuotone />
        <h4 className="">Issue</h4>
      </Link>
    </div>
  );
}
