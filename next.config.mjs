/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ["pino", "pino-pretty", "next-logger"],
  },
};

export default nextConfig;
