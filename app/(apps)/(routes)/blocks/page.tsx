import React from "react";
import ProLibraryCta from "@/components/pro-library-cta";
import { MagneticShimmerButton } from "@/registry/components/magnetic-shimmer-button";
 
const Page = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center py-10">
      <ProLibraryCta />

 <MagneticShimmerButton>
  Click Me
</MagneticShimmerButton>
    </div>
  );
};

export default Page;
