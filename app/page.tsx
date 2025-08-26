import { Button } from "@/registry/components/button";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <Button>Project Started</Button>

      <Button>
        <code>
          pnpm dlx shadcn@latest add http://localhost:3000/r/button.json
        </code>
      </Button>
    </div>
  );
};

export default Page;
