<script setup>
const props = defineProps(['cat-footer']);
const route = useRoute();
const cardsImages = [
    {image: "Master-Card"},
    {image: "American-Express"},
    {image: "Visa"},
]
</script>

<template>
    <footer>
        <div id="list-of-themes">
            <div
                v-for="category in props.catFooter"
                :key="category.id"
                id="biography-true-stories">
                <h3>{{ category.name }}</h3>
                <ul>
                    <li
                        v-for="item in category.subCategories"
                        :class="{ active: route.params.slug === item.slug }"
                    ><NuxtLink
                        :to="`/category/${item.slug}`"
                    >
                        {{ item.name }}
                    </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="banking">
            <div id="accept">
                We accept all major Credit Card/Debit Card/Internet Banking
            </div>
            <div class="cards-container">
                <div class="cards"
                     v-for="card in cardsImages"
                >
                    <img :src="`/img/Footer/${card.image}.png`" alt="">
                </div>
            </div>
        </div>
        <div id="bottom">
            <NuxtLink href="">
                Conditions of Use Privacy Notice© 2023-2024,
                Books online, Inc. or its affiliates
            </NuxtLink></div>
    </footer>
</template>

<style lang="scss">
footer{
    :hover{
        user-select: none;
    }
}
.active_footer{
    background-color: black;
}
</style>


