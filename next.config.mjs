/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.rawpixel.com',
                pathname: '**'
            },
            {
                protocol: 'http',
                hostname: '192.168.5.12',
                pathname: '**'
            }
        ],
        // domains: ['images.rawpixel.com'],
    },
};

export default nextConfig;
