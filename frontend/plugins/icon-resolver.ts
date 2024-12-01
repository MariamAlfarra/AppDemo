import { resolveLionIcon } from "@/utils/icon-resolver.js";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide("resolveLionIcon", resolveLionIcon);
});
