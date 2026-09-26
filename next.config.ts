import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/devbysandeepkumar",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "devbysandeepkumar.github.io" },
    ],
  },
};

export default nextConfig;
