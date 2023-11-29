/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
  },
  env: {
    apiDomain: 'https://apiadmin.inckd.com/web/api',
    googlePlacesApiKey: "AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo",
  },

  i18n: {
    localeDetection: false,
   

  },
};


module.exports = nextTranslate({
  webpack: (nextConfig) => {
    return { ...nextConfig, ...nextConfig };
  },
  ...nextConfig,
});
