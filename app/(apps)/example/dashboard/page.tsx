import { Card, CardContent, CardHeader } from "@/registry/ui/card";
import React from "react";

const Page = () => {
  return (
    <Card className="bg-muted">
      <CardHeader className="text-center">Dashboard Card</CardHeader>
      <CardContent className="text-center">Here Is a Example of Dashboard components</CardContent>
    </Card>
  );
};

export default Page;
