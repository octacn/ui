import { BlockDisplay } from "@/components/block-display";
import React from "react";

const Page = () => {
  return (
    <div>
      <BlockDisplay title="header hai">
        <div className="bg-red-500 p-10 border">text-center</div>
      </BlockDisplay>
    </div>
  );
};

export default Page;
