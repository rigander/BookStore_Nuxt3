// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-swiper',
    '@vee-validate/nuxt',
    '@vueuse/nuxt'
  ],
  pinia: {
    autoImports:["defineStore"]
  },
  piniaPersistedstate: {
    storage: 'localStorage'
  },
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css'
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  imports: { dirs: ["./stores"] },
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: [
    "~/assets/style/scss/main.scss",
    "~/assets/style/scss/product.scss",
    "~/assets/style/scss/books.scss",
    "~/assets/style/scss/sciencefiction.scss",
    "~/assets/style/scss/signup.scss",
    "~/assets/style/scss/logout.scss",
    "~/assets/style/scss/login.scss",
    "~/assets/style/scss/help.scss",
    "~/assets/style/scss/basket.scss"
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://api.book-store.loc/api'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
