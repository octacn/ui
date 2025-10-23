import * as React from "react"

import { BlockDisplay } from "@/components/block-display"
import { Loading } from "@/registry/components/loading"

export default function Page() {
  return (
    <React.Suspense fallback={<Loading />}>
      <BlockDisplay name="auth-form-v1" />
    </React.Suspense>
  )
}
