<script setup>
const booksStore = useCategoryStore();
</script>


<template>
    <div>
        <h1>Category: {{ booksStore.selectedSlug }}</h1>
        <ul>
            <li v-for="item in booksStore.books.value">
                {{ item.slug }}
            </li>
        </ul>
    </div>
</template>