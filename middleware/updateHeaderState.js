export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/signupform') {
        const topNavStore = useTopNavState();
        topNavStore.show = false;
        console.log(topNavStore.show);
    }
    if (from.path === '/signupform'){
        const topNavStore = useTopNavState();
        topNavStore.true = false;
        console.log(topNavStore.show);
    }
})
