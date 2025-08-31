import { Button } from "@/registry/ui/button";
import { Card } from "@/registry/ui/card";

export const ComponentRegistry = {
  Button,
  Card,
};

export type ComponentType = keyof typeof ComponentRegistry;

export const Index: Record<ComponentType, { component: React.ComponentType }> =
  {
    Button: { component: Button },
    Card: { component: Card },
  };
