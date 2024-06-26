/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.rawpixel.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "admin.muragame.id",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "192.168.5.12",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "10.10.0.109",
        pathname: "**",
      },
    ],
    // domains: ['images.rawpixel.com'],
  },
  env: {
    HOST_API: process.env.HOST_API,
    NEXT_SITE_KEY: process.env.NEXT_SITE_KEY,
    NEXTAUTH_PROVIDER_SECRET: process.env.NEXTAUTH_PROVIDER_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
