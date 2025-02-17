/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: [
      "pino",
      "pino-pretty",
      "next-logger",
      "pino-roll",
    ],
  },
};

export default nextConfig;
