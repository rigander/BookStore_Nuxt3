// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  vite: {
    define: {
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false
    }
  },

  app:{
    pageTransition: { name: 'page', mode: 'out-in' },
  },

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
    cookieOptions: {
      sameSite: 'strict'
    },
    storage: 'cookies'
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
    "@": resolve(__dirname, "/"),
  },

  css: [
    "~/assets/style/scss/main.scss",
    "~/assets/style/scss/product.scss",
    "~/assets/style/scss/books.scss",
    "~/assets/style/scss/category-slug.scss",
    "~/assets/style/scss/signup.scss",
    "~/assets/style/scss/login.scss",
    "~/assets/style/scss/help.scss",
    "~/assets/style/scss/basket.scss",
    "~/assets/style/scss/checkout.scss",
    "~/assets/style/scss/bookslist.scss",
    "~/assets/style/scss/profile.scss",
    "~/assets/style/scss/registration-successful.scss",
    "~/assets/style/scss/whishlist.scss",
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

  compatibilityDate: '2024-12-10',
})