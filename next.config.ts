// next.config.js (or next.config.mjs/ts)
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow ALL external image hosts
      },

    ],
    
  },
  reactStrictMode:false,
}

export default nextConfig
