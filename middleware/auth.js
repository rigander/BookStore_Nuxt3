import {storeToRefs} from "pinia";
export default defineNuxtRouteMiddleware((to, from) => {
    const profileStore = useProfileStore();
    const modalStore = useModalStore();
    const { isAuthorized } = storeToRefs(profileStore);

    if (!isAuthorized.value) {
        modalStore.toggleModal('login');

        if (to.path !== '/') {
            return navigateTo('/');
        }
    }
})
