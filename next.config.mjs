/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sbt-backend-demo-production.up.railway.app',
        port: '8080',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
