 
import { BlockDisplay } from "@/components/block-display";
import React from "react";



const FEATURED_BLOCKS = [
  "dashboard-01",
  "sidebar-07",
  "sidebar-03",
  "login-03",
  "login-04",
]

const Page = () => {
  return (
    <div>
      {FEATURED_BLOCKS.map((name) => (
        <BlockDisplay name={name} key={name} />
      ))}


       
    </div>
  );
};

export default Page;
