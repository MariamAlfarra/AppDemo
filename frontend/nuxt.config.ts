import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
    app: {
        baseURL: "/",
        head: {
            htmlAttrs: {
                lang: "en"
            }
        }
    },
    ssr: false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@pinia/nuxt", "@nuxt/ui", "nuxt-vuefire", "@nuxtjs/eslint-module"],
    css: ["@/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    vuefire: {
        auth: {
            enabled: true,
            sessionCookie: false
        },
        config: {
            apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
            measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
            databaseURL: process.env.NUXT_PUBLIC_FIREBASE_DATABASE_URL
        }
    }
});
