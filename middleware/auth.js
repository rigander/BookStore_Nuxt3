export default defineNuxtRouteMiddleware((to, from) => {
    const profileRoute = '/profile';
    const checkoutRoute = '/checkout';
    const {state} = useProfileStore();
    const modalStore = useModalStore();
    const token = state.token;

    if (to.fullPath === profileRoute || to.fullPath === checkoutRoute) {
        if (!token) {
            if (to.path !== '/'){
                modalStore.showModal();
                return navigateTo('/');
            }
        }
    }
})
