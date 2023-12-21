<script setup>
const { category } = inject('categories');


</script>

<template>
    <aside class="categories">
        <div class="categories__content">
            <h2 id="categories">Categories</h2>
            <button>ALL</button>
            <ul
                v-for="cat in category.data.aside"
                class="fiction">
                <li class="list-title">{{ cat.name }}</li>
                <li
                    v-for="item in cat.subCategories"
                ><NuxtLink href="/"
                >
                    <div>{{ item.name }}</div></NuxtLink></li>
            </ul>
        </div>
    </aside>
</template>