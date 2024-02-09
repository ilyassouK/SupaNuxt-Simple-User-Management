export default defineNuxtRouteMiddleware((to, from)=>{
    const {$authStore} = useNuxtApp();
    $authStore.authState();

    if(!$authStore.isAuthenticated && to.path !== '/') return navigateTo('/')
});