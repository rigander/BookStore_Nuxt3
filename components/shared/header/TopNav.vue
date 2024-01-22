<script setup>
const modalStore = useModalStore();
const route = useRoute();
const isSignUpPage = route.name === 'signupform';
const showModal = () => {
    if (!isSignUpPage) {
        modalStore.show = true;
    }
}
const checkIfLoggedIn = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('userData')) {
        return true;
    }
    return false;
}

const shouldRenderMenuItem = () => {
     return !(route.name === 'signupform');
};

</script>


<template>
    <div class="account-nav-container">
        <client-only>
            <nav class="account-nav">
                <ul>
                    <li
                        v-if="shouldRenderMenuItem()"
                        class="hover_it"
                        @click="showModal"
                    >
                        <NuxtLink>Sign in</NuxtLink>
                    </li>
                    <li
                        v-if="checkIfLoggedIn()"
                        class="hover_it"
                    >
                        <NuxtLink>Sign out</NuxtLink>
                    </li>
                    <li
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/signupform"
                        >Create Account
                        </NuxtLink>
                    </li>
                    <li
                        class="hover_it"
                    >
                        <NuxtLink
                            to="/profile"
                        >My Account
                        </NuxtLink>
                    </li>
                    <li
                        class="hover_it"
                    >
                        <NuxtLink>Order Status</NuxtLink>
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