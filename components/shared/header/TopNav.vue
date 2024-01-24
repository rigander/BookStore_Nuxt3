<script setup>
const modalStore = useModalStore();
const topNavStore = useTopNavStore();
const showModal = () => {
        modalStore.show = true;
}
</script>


<template>
    <div class="account-nav-container">
        <client-only>
            <nav class="account-nav">
                <ul>
                    <li
                        v-if="topNavStore.showSignIn"
                        class="hover_it"
                        @click="showModal"
                    >
                        <NuxtLink>Log in</NuxtLink>
                    </li>
                    <li
                        v-if="topNavStore.showSignOut"
                        @click="topNavStore.toggleLogOut"
                        class="hover_it"
                    >
                        <NuxtLink>Log out</NuxtLink>
                    </li>
                    <li
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
                        <NuxtLink>Help</NuxtLink>
                    </li>
                </ul>
            </nav>
        </client-only>
    </div>
</template>

<style lang="scss">
.hover_it:hover{
    cursor: pointer;
}
</style>