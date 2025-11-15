/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow common external image sources used by our pipeline (OG/Unsplash/etc.)
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'ph-files.imgix.net' },
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'media.dev.to' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'cdn.hashnode.com' },
    ],
  },
};

module.exports = nextConfig;
