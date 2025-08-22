import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/helical-antenna-calculator' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/helical-antenna-calculator/' : '',
};

export default nextConfig;
