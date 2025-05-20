import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    asyncEntry: false,
    payloadExtraction: true,
    renderJsonPayloads: true,
    crossOriginPrefetch: true,
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      theme: 'github-dark',
      langs: ['ts','html','scss','css'],
      wrapperStyle: true
    }
  },
  plugins: [
    // '@/assets/js/front.js'
  ],

  css: [
    // '@/assets/css/style.css'
  ],

  app: {
    head: {
      title: "vue 3 + Nuxt 3 Starter",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
      ],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
  compatibilityDate: "2025-04-10",
});