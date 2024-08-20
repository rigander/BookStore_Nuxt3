import {storeToRefs} from "pinia";
export default defineNuxtRouteMiddleware((to, from) => {
    const profileStore = useProfileStore();
    const { isAuthorized } = storeToRefs(profileStore);

    if (!isAuthorized.value) {
                return navigateTo('/');
        }
})
