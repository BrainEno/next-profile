/** @type {import('next').NextConfig} */
const withBudleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  transpilePackages: ['three']
};

module.exports = withBudleAnalyzer(nextConfig);
