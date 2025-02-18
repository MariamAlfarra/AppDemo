import { useMainStore } from "~/stores/main";

export default defineNuxtRouteMiddleware((to) => {
    const mainStore = useMainStore();
    const token = useCookie("token"); 
    if (token.value) {
        mainStore.isAuthenticated = true;
    }
  
    if (token.value && to?.name === "login") {
        return navigateTo("/");
    }
  
    if (!token.value && to?.name !== "login") {
        abortNavigation();
        return navigateTo("/login");
    }
});

  
  
  