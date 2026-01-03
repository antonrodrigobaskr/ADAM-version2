import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any HTTPS domain
      },
      {
        protocol: 'http',
        hostname: '**', // Allows any HTTP domain (for development)
      },
    ],
  },
};

export default nextConfig;
