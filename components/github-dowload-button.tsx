import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, useMemo } from "react";

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
        "inline-flex items-center justify-center bg-surface border px-10 py-4 rounded-xl font-inter text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
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
