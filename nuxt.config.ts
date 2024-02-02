// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },

  buildModules: ['@nuxtjs/pinia'],

  ssr: false,
  
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Code StackUp',
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:title', property: 'og:title', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:site_name', property: 'og:site_name', content: '' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: '' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: '' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      
    }
  },
  content: {
    // Specify your content directory
    dir: 'content'
    // Other content options can be added here
  },
  generate: {
    routes: [
      '/products/product-1', 
      '/products/product-2',
      '/about',
      '/contact',
      '/testimonials',
      '/quote',
      '/',
      '/work',
      '/talktous',
      '/portfolio'
    ],

  },
  
});
