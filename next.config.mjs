/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**', // All Firebase Storage URLs
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**', // For your dummy or fallback images
      },
    ],
  },
};

export default nextConfig;

