"use client";

import { IconEdit } from "@tabler/icons-react";
import { Button } from "@/registry/ui/button";
import Link from "next/link";

export function DocsEditButton({
  path,
  docs = "docs",
}: {
  path: string;
  docs?: "docs" | "auth-docs" | "blocks-docs";
}) {
  return (
    <Link
      href={`https://github.com/shadwui/new-lib/blob/main/content/${docs}/${path}`}
      target="_blank"
    >
      <Button
        size="sm"
        variant="secondary"
        className="h-8 shadow-none md:h-7 md:text-[0.8rem] flex items-center gap-1.5 font-mono font-medium"
      >
        <IconEdit size={14} />
        Edit on GitHub
      </Button>
    </Link>
  );
}
