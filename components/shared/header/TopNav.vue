<script setup>
const modalStore = useModalStore();
const topNavStore = useTopNavStore();
const {csrfRequest, useFetchPost} = useApiFetch();
const profileStore = useProfileStore();
const show = ref(false);
const handleSuccess = () => {
    profileStore.state.userData = null;
    profileStore.state.token = '';
    modalStore.closeModalAndNavigate('/');
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
    <div class="account-nav-container">
        <client-only>
            <nav class="account-nav">
                <ul>
                    <li
                        v-if="topNavStore.showLogIn"
                        class="hover_it"
                        @click="modalStore.showLogin = true"
                    >
                        <button>Log in</button>
                        <Teleport to="body">
                            <ModalLogIn v-if="modalStore.showLogin"/>
                        </Teleport>
                    </li>
                    <li
                        v-if="topNavStore.showLogOut"
                        @click="submitLogOut"
                        class="hover_it"
                    >
                        <button>Log out</button>
                    </li>
                    <li
                        v-if="topNavStore.showSignUp"
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/signupform"
                        >Sign up
                        </NuxtLink>
                    </li>
                    <li
                        v-if="topNavStore.showMyAccount"
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/profile"
                        >My Account
                        </NuxtLink>
                    </li>
                    <li
                        v-if="topNavStore.showBooksInCart"
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/checkout"
                        >Order Status
                        </NuxtLink>
                    </li>
                    <li
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/help"
                        >Help
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </client-only>
    </div>
</template>

<style lang="scss" >
.hover_it:hover{
    cursor: pointer;
}
</style>