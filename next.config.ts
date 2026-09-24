import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    if (process.env.NODE_ENV !== "development") {
      return { beforeFiles: [], afterFiles: [], fallback: [] };
    }
    return {
      // Must run before public/api/*.php is served as a static file.
      beforeFiles: [
        {
          source: "/api/mpurse.php",
          destination: "http://127.0.0.1:8088/mpurse.php",
        },
        {
          source: "/api/mpurse-webhook.php",
          destination: "http://127.0.0.1:8088/mpurse-webhook.php",
        },
        {
          source: "/api/submit.php",
          destination: "http://127.0.0.1:8088/submit.php",
        },
        {
          source: "/mail.php",
          destination: "http://127.0.0.1:8088/submit.php",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
