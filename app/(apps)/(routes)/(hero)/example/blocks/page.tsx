import { BlockDisplay } from "@/components/block/block-display";
import { Loading } from "@/registry/src/loaders/loading";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BlockDisplay name="header-01" />
    </Suspense>
  );
}
