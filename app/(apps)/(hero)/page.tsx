import { ComponentSource } from "@/components/component-source";
import { Card, CardContent, CardHeader } from "@/registry/ui/card";
import React from "react";

const Page = () => {
  return (
    <Card className="bg-muted">
      <CardHeader className="text-center">Example Card</CardHeader>
      <CardContent>
        <ComponentSource
          name="button"
          src="ui"
          title="Button.tsx"
          language="tsx"
        />
      </CardContent>
    </Card>
  );
};

export default Page;
