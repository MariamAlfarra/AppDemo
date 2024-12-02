// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
    app: {
        baseURL: "/AppDemo/"
    },
    ssr:false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@pinia/nuxt", "@nuxt/ui"],
    runtimeConfig: {
        public: {
            users: process.env.USERS
        }
    },
    css: ["@/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    vue: {
    //This tells Vue that lion-input and lion-button are custom elements and should not be treated as Vue components
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("lion-")
        }
    }
});