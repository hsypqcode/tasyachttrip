// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  nitro: {
    preset: 'vercel-static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/zh/',
        '/zh-hant/',
        '/products',
        '/products/sightseeing-fishing-cruise',
        '/products/private-charters',
        '/products/half-day-hook-dive-grill',
        '/about',
        '/gallery',
        '/news',
        '/news/how-to-catch-lobster-tasmania',
        '/contact',
        '/faq',
        '/zh/products',
        '/zh/products/sightseeing-fishing-cruise',
        '/zh/products/private-charters',
        '/zh/products/half-day-hook-dive-grill',
        '/zh/about',
        '/zh/gallery',
        '/zh/news',
        '/zh/news/how-to-catch-lobster-tasmania',
        '/zh/contact',
        '/zh/faq',
        '/zh-hant/products',
        '/zh-hant/products/sightseeing-fishing-cruise',
        '/zh-hant/products/private-charters',
        '/zh-hant/products/half-day-hook-dive-grill',
        '/zh-hant/about',
        '/zh-hant/gallery',
        '/zh-hant/news',
        '/zh-hant/news/how-to-catch-lobster-tasmania',
        '/zh-hant/contact',
        '/zh-hant/faq',
      ],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://oss.tasyachttrip.com.au' },
        { rel: 'preconnect', href: 'https://booking-now.oss-accelerate.aliyuncs.com' },
      ],
      meta: [
        { name: 'theme-color', content: '#1a365d' },
        { name: 'google-site-verification', content: '3Yhap5RTt-MkNzxI0Tw7YNC4wjqJ83CynRu8aH9vq68' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "Diver's Fishing Charters Hobart" },
        { property: 'og:image', content: 'https://www.tasyachttrip.com.au/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@tasyachttrip' },
      ],
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-AU', name: 'English', file: 'en.json' },
      { code: 'zh', iso: 'zh-CN', name: '简体中文', file: 'zh.json' },
      { code: 'zh-hant', iso: 'zh-TW', name: '繁體中文', file: 'zh-hant.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    seo: true,
  },

  css: ['~/assets/css/main.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
        },
      },
    },
  },

  compatibilityDate: '2024-11-01',
})
