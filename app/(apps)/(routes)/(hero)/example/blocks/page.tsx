import { BlockDisplay } from "@/components/block-display";
import { Loading } from "@/registry/components/loading";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BlockDisplay name="accordion-demo" />
    </Suspense>
  );
}
