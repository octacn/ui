import { ImageDisplay } from "@/components/image-display";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center py-10 px-20">
      <ImageDisplay name="available" />
    </div>
  );
};

export default Page;
