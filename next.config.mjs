/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
  env: {
    API_URL: 'http://localhost:8080/api',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
