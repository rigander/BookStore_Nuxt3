export default defineNuxtRouteMiddleware((to, from) => {
    const profileRoute = '/profile';
    const checkoutRoute = '/checkout';
    const {apiBaseUrl} = useApiFetch();
    const {state} = useProfileStore();
    const profileStore = useProfileStore();
    const modalStore = useModalStore();
    const token = state.token;
    const handleSuccess = (responseData) => {
        profileStore.setUserData(responseData);
    }
    const handleError = (error) => {
        const serverErrors = error.value.data.errors;
        console.log(serverErrors);
    };
    const submitGetUser = async () => {
        try {
            const {data: responseData, error} = await useFetch(
                `${apiBaseUrl}/user`,
                {
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${profileStore.state.token}`
                    }
                }
            );
            if (!error.value) {
                handleSuccess(responseData);
            } else {
                handleError(error);
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
        }
    }
    if (to.fullPath === profileRoute || to.fullPath === checkoutRoute) {
        if (!token) {
            if (to.path !== '/'){
                modalStore.showModal();
                return navigateTo('/');
            }
        }
        else {
            submitGetUser();
        }
    }
})
