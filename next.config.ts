import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // The pathname can be customized if needed. For Unsplash, a wildcard pathname is common.
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
