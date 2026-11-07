import type { NextConfig } from "next"

import { MODPACK_SITE_URL } from "./lib/modpack"

const nextConfig: NextConfig = {
  async redirects() {
    return ["/docs/modrinth", "/docs/curseforge", "/downloads/:path*"].map(
      (source) => ({ source, destination: MODPACK_SITE_URL, permanent: false })
    )
  },
}

export default nextConfig
