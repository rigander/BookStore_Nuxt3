<script setup>
const show = ref(false);
const emit = defineEmits(['show-sign-in']);

const nav = [
    {
        name: "Sign in",
        id: "account-nav__sign-in",
        action: () => {
            show.value = true;
            emit('show-sign-in', show.value);
        }
    },
    {
        link: "/",
        name: "My Account",
        id: "account-nav__my-account"
    },
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
</script>


<template>
    <div class="account-nav-container">
        <nav class="account-nav">
            <ul>
                <li
                    v-for="n in nav"
                ><NuxtLink
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