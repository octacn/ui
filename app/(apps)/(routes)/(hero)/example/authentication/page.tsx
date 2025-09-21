import { CodePreviewBox } from "@/components/box";
import { Loading } from "@/registry/components/loading";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Authentication />
    </Suspense>
  );
}

function Authentication() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-9 grid-rows-3 md:grid-rows-10 gap-2 md:gap-2">
      <CodePreviewBox
        title="0"
        link="/"
        className="md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-5"
      >
        0
      </CodePreviewBox>
      <CodePreviewBox
        title="0"
        link="/"
        className="md:col-start-4 md:row-start-1 md:col-span-6 md:row-span-10"
      >
        1
      </CodePreviewBox>
      <CodePreviewBox
        title="0"
        link="/"
        className="md:col-start-1 md:row-start-6 md:col-span-3 md:row-span-5"
      >
        2
      </CodePreviewBox>
    </div>
  );
}
