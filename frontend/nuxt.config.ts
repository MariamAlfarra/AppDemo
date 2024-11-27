// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      email: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD,
    },
  },
})
