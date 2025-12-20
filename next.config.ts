import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zieshw3nltg9jhte.public.blob.vercel-storage.com', // замените на ID вашего хранилища
        pathname: '/**', // разрешает любые пути
      },
    ],
  },
};

export default nextConfig;
