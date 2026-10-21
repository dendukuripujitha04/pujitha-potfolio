import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Ensure Three.js and R3F work correctly in SSR context
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
