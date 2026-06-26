import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Development-of-a-Responsive-Business-Website",
  assetPrefix: "/Development-of-a-Responsive-Business-Website/",
};

export default nextConfig;
