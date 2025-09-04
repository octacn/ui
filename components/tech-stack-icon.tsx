import { Icons as techStackIcons } from "@/lib/icons";
import React from "react";

export type TechStackIconName = keyof typeof techStackIcons;

type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
}>;

interface TechStackIconProps {
  size?: 18 | 24 | 44;
  className?: string;
  icon: TechStackIconName | IconComponent;
}

export const TechStackIcon = ({
  className,
  size = 24,
  icon,
}: TechStackIconProps) => {
  const IconComponent = typeof icon === "string" ? techStackIcons[icon] : icon;

  return <IconComponent size={size} className={className} />;
};
