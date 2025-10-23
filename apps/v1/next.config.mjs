import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/kit",
        destination: "/docs/kit",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/templates",
        destination: "/docs/templates",
        permanent: true,
      },
      {
        source: "/blocks",
        destination: "/docs/blocks",
        permanent: true,
      },
      {
        source: "/authentication",
        destination: "/docs/authentication",
        permanent: true,
      },
      {
        source: "/kit/:path*",
        destination: "/docs/kit/:path*",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/templates/:path*",
        destination: "/docs/templates/:path*",
        permanent: true,
      },

      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },

    ]
  },
  // rewrites() {
  //   return [
  //     {
  //       source: "/docs/:path*.md",
  //       destination: "/llm/:path*",
  //     },
  //   ]
  // },
}

export default withMDX(nextConfig)
