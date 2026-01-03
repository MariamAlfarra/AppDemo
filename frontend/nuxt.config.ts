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
    modules: ["@pinia/nuxt", "@nuxt/ui", [
        "nuxt-vuefire",
        {
            auth: { enabled: true, sessionCookie: false },
            config: {
                apiKey: "AIzaSyCRZB-0r7NIla2X8LWRAxzEQB6zRUKLgEs",
                authDomain: "cv-project-84361.firebaseapp.com",
                projectId: "cv-project-84361",
                storageBucket: "cv-project-84361.firebasestorage.app",
                messagingSenderId: "6512836811",
                appId: "1:6512836811:web:ccf898ae7ac5737561db4e",
                measurementId: "G-JE0H5M19E0",
                databaseURL: "https://cv-project-84361-default-rtdb.firebaseio.com"
            }
        }
    ], "@nuxtjs/eslint-module"],
    css: ["@/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
});
