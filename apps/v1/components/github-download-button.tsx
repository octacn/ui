import { ComponentProps, useMemo } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GithubDownloadButtonProps
  extends Omit<ComponentProps<"a">, "children"> {
  children: React.ReactNode;
  repository: string;
  branch?: string;
  owner?: string;
}

export default function GithubDownloadButton({
  children,
  className,
  repository,
  branch = "master",
  owner = "sahilkumardev",
  ...props
}: GithubDownloadButtonProps) {
  const url = useMemo(
    () =>
      `https://github.com/${owner}/${repository}/archive/refs/heads/${branch}.zip`,
    [owner, repository, branch]
  );

  const fileName = `${repository}-${branch}.zip`;

  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center font-inter text-base font-normal tracking-wide transition-colors",
        className
      )}
      href={url}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
