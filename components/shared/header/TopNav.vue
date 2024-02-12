<script setup>
const modalStore = useModalStore();
const topNavStore = useTopNavStore();
const ModalVisibility = (showModal, hideModal, hideCart) => {
    modalStore.showModal();
    modalStore[showModal] = true;
    modalStore[hideModal] = false;
    modalStore[hideCart] = false;
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
                        @click="ModalVisibility('showLogin', 'showLogout', 'showCart')"
                    >
                        <NuxtLink>Log in</NuxtLink>
                    </li>
                    <li
                        v-if="topNavStore.showLogOut"
                        @click="ModalVisibility('showLogout', 'showLogin', 'showCart')"
                        class="hover_it"
                    >
                        <NuxtLink>Log out</NuxtLink>
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

<style lang="scss">
.hover_it:hover{
    cursor: pointer;
}
</style>