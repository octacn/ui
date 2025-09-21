import { Loading } from "@/registry/components/loading";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}

function Dashboard() {
  return <div>Dashboard</div>;
}
