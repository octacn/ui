import { ModeSwitcher } from "@/components/mode-switcher";
import { routes } from "@/data/routes";
import { Button } from "@/registry/components/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <Button>Project Started This Is example page</Button>

      <Button>
        <code>
          pnpm dlx shadcn@latest add http://localhost:3000/r/button.json
        </code>
      </Button>

      <ModeSwitcher />

      <div className="flex gap-5">
        {routes.map((route, idx) => (
          <Link href={route.name} key={idx}>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
