/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['files.stripe.com'],
    },
    output: 'standalone',
};

module.exports = nextConfig;