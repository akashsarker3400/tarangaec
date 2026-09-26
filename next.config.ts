import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/brands", destination: "/channels", permanent: true }];
  },
  // Self-hosted on Coolify via the Dockerfile
  output: "standalone",
};

export default nextConfig;
