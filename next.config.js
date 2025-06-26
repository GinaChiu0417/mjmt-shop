/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mjmt-shop', // 改為你的 repo 名稱
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
