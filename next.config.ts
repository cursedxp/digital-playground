import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash'i kaldır (Google tarafından önerilen)
  trailingSlash: false,

  // Skip trailing slash redirect to improve SEO
  skipTrailingSlashRedirect: false,

  // Redirects - eski URL'lerden yeni URL'lere yönlendirme
  async redirects() {
    return [
      // Trailing slash olan URL'leri trailing slash olmayan versiyonlara yönlendir
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
