import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel auto-detects Next.js — `output: "standalone"` is for Docker/Cloudflare.
  // Leave default for Vercel.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Disable the Next.js dev overlay (the circular "N" button in bottom-left).
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
