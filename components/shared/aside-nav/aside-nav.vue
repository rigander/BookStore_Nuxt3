<script setup>
let fiction;
let nonfiction;
let other;
fiction = [
    {
        name: "Children",
        link: "/",
        class: 1
    },
    {
        name: "Science",
        link: "/",
        class: 0
    },
    {
        name: "Fantasy",
        link: "/",
        class: 0
    },
    {
        name: "Mystery",
        link: "/",
        class: 0
    },
    {
        name: "Romance",
        link: "/scifi",
        class: 0
    },
    {
        name: "Horror",
        link: "/",
        class: 0
    },
    {
        name: "Poetry",
        link: "/",
        class: 0
    },
    {
        name: "Literature",
        link: "/",
        class: 0
    },
    {
        name: "Crime",
        link: "/",
        class: 0
    },

];
nonfiction = [
    {
        name: "Comic",
        link: ""
    },
    {
        name: "Cook",
        link: ""
    },
    {
        name: "Psychology",
        link: ""
    },
    {
        name: "Medical",
        link: ""
    },
    {
        name: "Art",
        link: ""
    },
    {
        name: "Photography",
        link: ""
    },
    {
        name: "Law",
        link: ""
    },
    {
        name: "History",
        link: ""
    },
    {
        name: "Business",
        link: ""
    },
    {
        name: "Crime",
        link: ""
    },
];
other = [
    {
        name: "Baby",
        link: ""
    },
    {
        name: "Sex",
        link: ""
    },
    {
        name: "Travel",
        link: ""
    },
    {
        name: "Science",
        link: ""
    },
    {
        name: "Sports",
        link: ""
    },
];
</script>

<template>
    <aside class="categories">
        <div class="categories__content">
            <h2 id="categories">Categories</h2>
            <button>ALL</button>
            <ul class="fiction">
                <li class="list-title">Fiction & Literature</li>
                <li
                    v-for="fic in fiction"
                ><NuxtLink :href="fic.link"
                >
                    <div>{{ fic.name }}</div></NuxtLink></li>
            </ul>
            <ul class="non-fiction">
                <li class="list-title">Non-Fiction</li>
                <li
                    v-for="non in nonfiction"
                ><NuxtLink :href="non.link"
                ><div>{{ non.name }}</div></NuxtLink></li>
            </ul>
            <div class="others-container">
                <ul class="other">
                    <li class="list-title">Other</li>
                    <li
                        v-for="oth in other"
                    ><NuxtLink
                        :href="oth.link"
                    ><div>{{ oth.name }}</div></NuxtLink></li>
                </ul>
            </div>
        </div>
    </aside>
</template>