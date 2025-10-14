import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["app", "components", "public"]
  }
};

export default nextConfig;
