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
  env: {
      API_URL: 'https://sbt-backend-demo-production.up.railway.app/api',
      CDN_URL: 'https://sbt-backend-demo-production.up.railway.app/cdn',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
