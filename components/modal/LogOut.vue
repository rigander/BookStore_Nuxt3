<script setup>
const TopNavStore = useTopNavStore();
const {apiBaseUrl, csrfRequest, useFetchPost} = useApiFetch();
const profileStore = useProfileStore();
const router = useRouter();
const modalStore = useModalStore();
const handleSuccess = () => {
    profileStore.state.userData = null;
    profileStore.state.token = '';
    TopNavStore.toggleLogOut();
    router.push('/');
}
const submitLogOut = async () => {
    await csrfRequest();
    const { data, error } = await useFetchPost(
            '/api/auth/logout',
            null,
            {
                headers: {
                    'Authorization': `Bearer ${profileStore.state.token}`,
                    'X-XSRF-TOKEN': useCookie( 'XSRF-TOKEN').value
                },
            }
        )
    if (data) {
        handleSuccess();
    }
}
</script>

<template>
    <Modal>
            <div
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
    </Modal>
</template>

<style lang="scss" scoped>

</style>