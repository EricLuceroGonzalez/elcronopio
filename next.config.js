/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    // styledComponents: {
    //   // Enable display of the component name along with the generated className (needed for debugging).
    //   displayName: true,
    //   // Enable SSR support
    //   ssr: true,
    //   // Optional
    //   fileName: false,
    // },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
module.exports = nextConfig;
