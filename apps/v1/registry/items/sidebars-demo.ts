import { type Registry } from "@/schema/shadcn";

export const sidebarDemo: Registry["items"] = [
  {
    name: "sidebar-demo",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-header",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-header.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-footer",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-footer.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-group.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group-collapsible",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-group-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group-action",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-group-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-menu.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-action",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-menu-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-sub",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-menu-sub.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-collapsible",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-menu-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-badge",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-menu-badge.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-rsc",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-rsc.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-controlled",
    type: "registry:example",
    files: [
      {
        path: "demo/sidebars/sidebar-controlled.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-07",
    type: "registry:block",
    description: "A sidebar that collapses to icons.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "demo/sidebars/sidebar-07/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "demo/sidebars/sidebar-07/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "demo/sidebars/sidebar-07/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "demo/sidebars/sidebar-07/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "demo/sidebars/sidebar-07/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "demo/sidebars/sidebar-07/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
];
