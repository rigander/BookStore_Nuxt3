<script setup>
const TopNavStore = useTopNavStore();
const {apiBaseUrl} = useApiFetch();
const profileStore = useProfileStore();
const router = useRouter();
const handleSuccess = () => {
    profileStore.state.userData = null;
    profileStore.state.token = '';
    TopNavStore.toggleLogOut();
    router.push('/');
}
const csrfToken = useCookie( 'XSRF-TOKEN').value;
const submitLogOut = async () => {
    try {
         const {data, error} = await useFetch(
            `${apiBaseUrl}/api/auth/logout`,
            {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${profileStore.state.token}`,
                    'X-XSRF-TOKEN': csrfToken,
                },
                credentials: 'include'
            }
        );
        if (data) {
            handleSuccess();
        }
    }
    catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}
</script>

<template>
    <div
            @click.stop="TopNavStore.toggleLogOut"
            class="log-out_wrapper">
            <VeeForm
                    @click.stop
                    @submit="submitLogOut"
                    class="log-out_form">
                <h1>Do you wish to log out from your account ?</h1>
                <div class="log-out_yes-no">
                    <button
                            type="submit"
                    >Yes
                    </button>
                    <button
                            type="button"
                            @click.stop="TopNavStore.toggleLogOut"
                    >No
                    </button>
                </div>
            </VeeForm>
    </div>
</template>

<style lang="scss" scoped>

</style>