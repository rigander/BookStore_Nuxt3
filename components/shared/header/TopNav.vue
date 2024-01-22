<script setup>
const modalStore = useModalStore();
const route = useRoute();
const isSignUpPage = route.name === 'signupform';
// const storedUserData = JSON.parse(localStorage.getItem('userData'));
const nav = [
    {
        name: "Sign in",
        id: "account-nav__sign-in",
        action: () => {
            if (!isSignUpPage) {
                modalStore.show = true;
            }
        },
    },
    {
        link: "/signupform",
        name: "Create Account",
        id: "account-nav__my-account"
    },
    // {
    //     link: "/",
    //     name: "My Account",
    //     id: "account-nav__my-account"
    // },
    {
        link: "/",
        name: "Order Status",
        id: "account-nav__order-status"
    },
    {
        link: "/",
        name: "Help",
        id: "account-nav__help"
    },
]
const shouldRenderMenuItem = (menuItem) => {
    return !(route.name === 'signupform' && menuItem.name === 'Sign in');
};

</script>


<template>
    <div class="account-nav-container">
        <nav class="account-nav">
            <ul>
                <li
                    v-for="n in nav"
                ><NuxtLink
                    v-if="shouldRenderMenuItem(n)"
                    class="hover_it"
                    :id="n.id"
                    :to="n.link"
                    @click="n.action"
                >{{ n.name }}</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
.hover_it:hover{
    cursor: pointer;
}
</style>