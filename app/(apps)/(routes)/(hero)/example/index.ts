import { lazy } from "react";

export const ScaleHoverAnimationButton = lazy(
  () => import("@/registry/components/scale-hover-animation-button")
);

export const InteractiveGradientText = lazy(() =>
  import("@/registry/components/interactive-gradient-text").then((module) => ({
    default: module.InteractiveGradientText,
  }))
);

export const MagneticShimmerButton = lazy(() =>
  import("@/registry/components/magnetic-shimmer-button").then((module) => ({
    default: module.MagneticShimmerButton,
  }))
);

export const PinterestLayoutDemo = lazy(
  () => import("@/registry/demo/components/pinterest-layout-demo")
);

export const TypewriterEffect = lazy(() =>
  import("@/registry/components/typewriter-effect").then((module) => ({
    default: module.TypewriterEffect,
  }))
);

export const PaperBackground = lazy(
  () => import("@/registry/components/paper-background")
);

export const AuthForm = lazy(() =>
  import("@/registry/blocks/auth-form-v1").then((module) => ({
    default: module.AuthForm,
  }))
);
