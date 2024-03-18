/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['barbend.com', 'images.unsplash.com', 'd3h9ln6psucegz.cloudfront.net', 'media.istockphoto.com'],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
