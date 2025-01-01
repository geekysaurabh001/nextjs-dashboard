import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   ppr: "incremental",
  // },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
