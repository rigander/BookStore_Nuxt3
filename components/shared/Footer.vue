<script setup>
const props = defineProps(['cat-footer']);
const cardsImages = [
    {image: "Master-Card"},
    {image: "American-Express"},
    {image: "Visa"},
]

const apiBaseUrl = useRuntimeConfig().public.apiBase;
const currentPage = ref(1);
const booksStore = ref({});
const { data } = await useFetch(
    `${apiBaseUrl}/category/gay/books`,
    {   cache: false,
        query: {page: currentPage.value}
    }
);
booksStore.value = data.value;
console.log(booksStore);
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
                    <li v-for="subCategory in category.subCategories"
                    ><NuxtLink
                        :to="`/category/${subCategory.slug}`"
                    >
                        {{ subCategory.name }}
                    </NuxtLink></li>
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
                Conditions of Use Privacy Notice© 2022-2023,
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
</style>


