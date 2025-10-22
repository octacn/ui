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
}

export default withMDX(nextConfig)


// import { createMDX } from 'fumadocs-mdx/next';

// /** @type {import('next').NextConfig} */
// const config = {
//   reactStrictMode: true,
// };

// const withMDX = createMDX({
//   // customise the config file path
//   // configPath: "source.config.ts"
// });

// export default withMDX(config);