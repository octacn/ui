import { BlockDisplay } from "@/components/block-display";
import { configs } from "@/registry/registry-items/__index__";
import React from "react";

const Page = () => {
  return (
    <div className="px-10 py-10 space-y-3">
      <BlockDisplay {...configs.button} />

      <h1>Card</h1>
      <BlockDisplay {...configs.card} />
    </div>
  );
};

export default Page;
