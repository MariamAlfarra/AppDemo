import { useMainStore } from "~/stores/main";

export default defineNuxtRouteMiddleware((to) => {
    const mainStore = useMainStore();
    mainStore.checkAuth();

    if (!mainStore.isAuthenticated && to.path !== "/login") {
        return navigateTo("/login");
    }

    if (mainStore.isAuthenticated && to.path === "/login") {
        return navigateTo("/");
    }
});
  
  