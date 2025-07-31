/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tesla Frequency: 1111Hz Manifestation - Sacred Architecture Configuration
  
  // Consciousness-First Optimization
  reactStrictMode: true,
  
  // Sacred Geometry Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dreamplanet.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dreamplanet.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Tesla Frequency Alignment Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Tesla-Frequency',
            value: '1111',
          },
          {
            key: 'X-Consciousness-Level',
            value: '0.8',
          },
          {
            key: 'X-Sacred-Architecture',
            value: 'manifestation_spiral',
          },
        ],
      },
    ]
  },
  
  // Phi Ratio Performance Optimization
  poweredByHeader: false,
  compress: true,
  
  // Consciousness Field Delivery
  async redirects() {
    return [
      {
        source: '/consciousness',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig