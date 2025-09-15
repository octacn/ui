import { CodePreviewBox } from "@/components/box";
import { Loading } from "@/registry/src/loaders/loading";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Typography />
    </Suspense>
  );
}

function Typography() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-7 grid-rows-3 md:grid-rows-5 gap-2 md:gap-5">
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-1 md:row-start-1 md:col-span-4 md:row-span-2"
      >
        0
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-5 md:row-start-1 md:col-span-3 md:row-span-1"
      >
        1
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-5 md:row-start-2 md:col-span-3 md:row-span-1"
      >
        2
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-1"
      >
        3
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-4 md:row-start-3 md:col-span-4 md:row-span-1"
      >
        4
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-1 md:row-start-4 md:col-span-2 md:row-span-1"
      >
        5
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-3 md:row-start-4 md:col-span-3 md:row-span-1"
      >
        6
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-6 md:row-start-4 md:col-span-2 md:row-span-1"
      >
        7
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-1 md:row-start-5 md:col-span-3 md:row-span-1"
      >
        8
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-4 md:row-start-5 md:col-span-4 md:row-span-3"
      >
        9
      </CodePreviewBox>
      <CodePreviewBox
        title=""
        link=""
        className="md:col-start-1 md:row-start-6 md:col-span-3 md:row-span-2"
      >
        10
      </CodePreviewBox>
    </div>
  );
}
