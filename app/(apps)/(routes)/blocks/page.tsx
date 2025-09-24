import { ImageDisplay } from "@/components/image-display";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center py-10 px-20">
      <ImageDisplay name="header-01" />
      <ImageDisplay name="pricing-01" />
      <ImageDisplay name="available" />
      <ImageDisplay name="case-cobra" />
    </div>
  );
};

export default Page;
