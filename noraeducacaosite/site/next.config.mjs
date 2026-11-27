/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // `sharp`'s AVIF/WebP encoding hangs in this environment (its native
    // build script didn't run during install), which stalls every
    // next/image request served through the /_next/image optimizer.
    // Serving the original files directly avoids the hang.
    unoptimized: true,
  },
};

export default nextConfig;
