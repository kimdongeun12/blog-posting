/** @type {import('next').NextConfig} */

// next.js gh-page css, img 셋팅
const debug = process.env.NODE_ENV !== "production";
const repository = "blog-posting-page";

const nextConfig = {
  reactStrictMode: true,
  basePath: '/blog-posting',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
}

module.exports = nextConfig
