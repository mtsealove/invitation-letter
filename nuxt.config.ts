import {defineNuxtConfig} from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/reset.css','~/assets/styles/fonts.css'],
  buildModules: [
      '@nuxtjs/dotenv'
  ],
    runtimeConfig: {
        public: {
            naverClient: process.env.NAVER_MAP_CLIENT
        }
    }
})
