import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingRoot: __dirname,
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid corrupted dev cache artifacts causing missing chunk/module runtime errors.
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
