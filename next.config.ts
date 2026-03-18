/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
