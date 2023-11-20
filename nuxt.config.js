// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: [
    "~/assets/style/scss/main.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
