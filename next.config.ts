import type { NextConfig } from 'next';
import createNextPWA from '@ducanh2912/next-pwa';

const withPWA = createNextPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

export default withPWA(nextConfig);
