import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    domains: ['live.staticflickr.com']
  }
};


export default nextConfig;
