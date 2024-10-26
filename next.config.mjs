/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jsonplaceholder.typicode.com",
      },
    ],
  },
}

export default nextConfig
