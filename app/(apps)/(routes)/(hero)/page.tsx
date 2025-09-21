import { CodePreviewBox } from "@/components/box";
import { FileUploader } from "@/registry/components/file-uploader";
import { Loading } from "@/registry/components/loading";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HeroPage />
    </Suspense>
  );
}

function HeroPage() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-10 grid-rows-3 md:grid-rows-12 gap-2 md:gap-5">
      <CodePreviewBox
        link=""
        title="Number hai 0"
        className="md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-3"
      >
        0
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 1"
        className="md:col-start-3 md:row-start-1 md:col-span-4 md:row-span-3"
      >
        1
      </CodePreviewBox>

      <FileUploader className="md:col-start-7 md:row-start-1 md:col-span-4 md:row-span-6 bg-surface" />

      <CodePreviewBox
        link=""
        title="Number hai 3"
        className="md:col-start-1 md:row-start-4 md:col-span-6 md:row-span-3"
      >
        3
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 4"
        className="md:col-start-1 md:row-start-7 md:col-span-3 md:row-span-2"
      >
        4
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 5"
        className="md:col-start-4 md:row-start-7 md:col-span-7 md:row-span-2"
      >
        5
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 6"
        className="md:col-start-1 md:row-start-9 md:col-span-4 md:row-span-6"
      >
        6
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 7"
        className="md:col-start-5 md:row-start-9 md:col-span-3 md:row-span-1"
      >
        7
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 8"
        className="md:col-start-8 md:row-start-9 md:col-span-3 md:row-span-1"
      >
        8
      </CodePreviewBox>

      <CodePreviewBox
        link=""
        title="Number hai 9"
        className="md:col-start-5 md:row-start-10 md:col-span-6 md:row-span-5"
      >
        9
      </CodePreviewBox>
    </div>
  );
}
