importScripts("https://cdn.ampproject.org/sw/amp-sw.js");

AMP_SW.init({
  assetCachingOptions: [
    {
      regexp: /\.(png|jpg|webp|woff2|woff|css|js|pdf|vcf)/,
      cachingStrategy: "CACHE_FIRST",
    },
  ],
  offlinePageOptions: {
    url: "/offline.html",
    assets: ["/css/style.css"],
  },
});
