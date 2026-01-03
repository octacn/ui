import React from "react"

import { AndroidFrame, IphoneFrame } from "@/registry/components/phone-frame"

export const PhoneFrameDemo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <AndroidFrame
        title="Premium"
        description="Clear night. Great for render farm runs."
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
      />
      <IphoneFrame
        title="Premium"
        description="Clear night. Great for render farm runs."
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
      />
    </div>
  )
}
