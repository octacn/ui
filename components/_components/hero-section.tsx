import { routes } from "@/data/routes";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="min-h-screen">
      HeroSection
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
