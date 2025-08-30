import { Card, CardContent, CardHeader } from "@/registry/ui/card";
import React from "react";

const Page = () => {
  return (
    <Card className="bg-muted">
      <CardHeader className="text-center">Example Card</CardHeader>
      <CardContent className="text-center">Here Is a Example of card components</CardContent>
    </Card>
  );
};

export default Page;
