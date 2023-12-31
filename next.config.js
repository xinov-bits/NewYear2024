/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pusheen.com",
            },
        ],
    },
};

module.exports = nextConfig
