export default defineNuxtRouteMiddleware((to, from) => {
    const profileRoute = '/profile';
    const {state} = useProfileStore();
    const modalStore = useModalStore();
    const token = state.token;

    if (to.fullPath === profileRoute) {
        if (token) {
            if (to.path !== '/'){
                modalStore.showModal();
                return navigateTo('/');
            }
        }
    }
})
