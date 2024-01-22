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

const shouldRenderMenuItem = (menuItem) => {
    return !(route.name === 'signupform' && menuItem.name === 'Sign in');
};

</script>


<template>
    <div class="account-nav-container">
        <nav class="account-nav">
            <ul>
                <li
                    v-if="shouldRenderMenuItem('Sign in')"
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
                    >Create Account</NuxtLink>
                </li>
                <li
                    class="hover_it"
                >
                    <NuxtLink
                        to="/profile"
                    >My Profile</NuxtLink>
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
    </div>
</template>

<style lang="scss">
.hover_it:hover{
    cursor: pointer;
}
</style>