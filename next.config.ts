import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows all hostnames
      },
      {
        protocol: "http",
        hostname: "**", // allows all hostnames over http
      },
    ],
    dangerouslyAllowSVG: true, // if you want SVG support
  },
};

export default nextConfig;
