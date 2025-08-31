import { ComponentPreview } from "@/components/component-preview";
import { Card, CardContent, CardHeader } from "@/registry/ui/card";
import React from "react";

const Page = () => {
  return (
    <Card className="bg-muted">
      <CardHeader className="text-center">Dashboard Card</CardHeader>
      <CardContent>
        <ComponentPreview
          src="ui"
          name="Button"
          className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]"
          description="An accordion with three items"
          align="start"
        />
      </CardContent>
    </Card>
  );
};

export default Page;
