<script setup>
let nav;
nav = [
    {
        link: "/",
        name: "Computers",
        id: "main-nav__computers"
    },
    {
        link: "/scifi",
        name: "Cooking",
        id: "main-nav__cooking"
    },
    {
        link: "/product",
        name: "Education",
        id: "main-nav__education"
    },
    {
        link: "/",
        name: "Fiction",
        id: "main-nav__fiction"
    },
    {
        link: "/",
        name: "Health",
        id: "main-nav__health"
    },
    {
        link: "/",
        name: "Mathematics",
        id: "main-nav__math"
    },
    {
        link: "/",
        name: "Medical",
        id: "main-nav__medical"
    },
    {
        link: "/",
        name: "Reference",
        id: "main-nav__reference"
    },
    {
        link: "/",
        name: "Science",
        id: "main-nav__science"
    },
]
</script>


<template>
    <div class="main-nav-wrapper">
        <nav class="main-nav">
            <ul>
                <li>
                    <NuxtLink  v-for="n in nav"
                        :href="n.link"
                        :id="n.id"
                    >{{ n.name }}</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>