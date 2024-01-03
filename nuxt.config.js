// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper', '@vee-validate/nuxt'],
  pinia: { autoImports:["defineStore"] },
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
    "~/assets/style/scss/sciencefiction.scss",
    "~/assets/style/scss/signup.scss"
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
