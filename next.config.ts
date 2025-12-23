import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // reactStrictMode: false,
  images: {
    // domains: [
    //   'hb.ru-msk.vkcloud-storage.ru', 
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hb.ru-msk.vkcloud-storage.ru', 
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
