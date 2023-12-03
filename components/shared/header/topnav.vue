<script setup>
let nav;
nav = [
    {
        link: "/",
        name: "Sign in",
        id: "account-nav__sign-in"
    },
    {
        link: "/scifi",
        name: "My Account",
        id: "account-nav__my-account"
    },
    {
        link: "/product",
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
                ><a
                    :id="n.id"
                    :href="n.link"
                >{{ n.name }}</a></li>
            </ul>
        </nav>
    </div>
</template>