/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    useTypeScriptCli: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
