import { H4 } from "@/registry/ui/typography";
import React from "react";

export const LastEditTime = ({ time }: { time: string }) => {
  const date = new Date(time).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <H4 className="flex items-center gap-2 text-base text-muted-foreground font-inter" >
      Last updated on {date}
    </H4>
  );
};
