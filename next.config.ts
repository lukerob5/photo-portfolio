import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    // default gallery and images
    "/": ["./public/_gallery/nature/**/*"],
    "/gallery/home/*": ["./public/_gallery/nature/**/*"],

    // nature gallery and images
    "/gallery/nature": ["./public/_gallery/_default/**/*"],
    "/gallery/nature/**": ["./public/_gallery/_default/**/*"],
  },
}

export default nextConfig
