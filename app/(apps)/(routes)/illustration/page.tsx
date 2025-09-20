import { BlockDisplay } from "@/components/block-display";
import { BoxWrapper } from "@/components/box";
import React from "react";

const Page = () => {
  return (
    <BoxWrapper className="pb-10">
      <h1>Illustration Page</h1>
      <BlockDisplay name="header-01" />
    </BoxWrapper>
  );
};

export default Page;
