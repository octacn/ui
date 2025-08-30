"use client";

import { IconEdit } from "@tabler/icons-react";
import { Button } from "@/registry/ui/button";

export function DocsEditButton() {
  return (
    <Button
      size="sm"
      variant="secondary"
      className="h-8 shadow-none md:h-7 md:text-[0.8rem] flex items-center gap-1.5 font-mono font-medium"
    >
      <IconEdit size={14} />
      Edit on GitHub
    </Button>
  );
}
