export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const loggedIn = localStorage.getItem('loggedIn') === 'true';

      if (!loggedIn && to.path !== '/login') {
        return navigateTo('/login');
      }
  
      if (loggedIn && to.path === '/login') {
        return navigateTo('/');
      }
    } else {
        return
    }
  });
  
  
  