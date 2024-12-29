<script setup>
const modalStore = useModalStore();
const topNavStore = useTopNavStore();
</script>


<template>
    <div class="account-nav-container">
        <client-only>
            <nav class="account-nav">
                <ul>
                    <li
                        v-if="topNavStore.showLogIn"
                        class="hover_it"
                        @click="modalStore.toggleModal('login')"
                    >
                        <button>Log in</button>
                        <Teleport to="body">
                            <Modal :modalKey="'login'">
                                <ModalLogIn/>
                            </Modal>
                        </Teleport>
                    </li>
                    <li
                        v-if="topNavStore.showLogOut"
                        @click="logout"
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
                        v-if="topNavStore.showMyAccount"
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/orderstatus"
                        >Orders Status
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