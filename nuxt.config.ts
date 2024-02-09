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
        { hid: 'description', name: 'description', content: 'At CodeStackUp, we are all about building your digital dreams into reality. Whether you are a startup looking to establish your online presence or a seasoned business aiming to elevate your digital strategy, we have got the tools, expertise, and passion to make it happen.' },
        { hid: 'og:title', property: 'og:title', content: 'Code StackUp' },
        { hid: 'og:description', property: 'og:description', content: 'At CodeStackUp, we are all about building your digital dreams into reality. Whether you are a startup looking to establish your online presence or a seasoned business aiming to elevate your digital strategy, weve got the tools, expertise, and passion to make it happen.' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Code StackUp' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: '/icon/meta_logo.png'},
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: '/icon/meta_logo.png' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.icon' },
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
