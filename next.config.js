const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [process.env.NEXT_PUBLIC_ASSETS_BUCKET_URL],
  },
};

module.exports = withMDX(nextConfig);
