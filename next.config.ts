import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/new-portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/new-portfolio/',
};

export default nextConfig;
