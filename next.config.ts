import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? "/bhargava-julaganti/" : undefined,
  basePath: isProd ? "/bhargava-julaganti" : undefined,
};

export default nextConfig;
