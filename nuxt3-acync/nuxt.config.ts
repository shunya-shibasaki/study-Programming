// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination'],
  }
})
