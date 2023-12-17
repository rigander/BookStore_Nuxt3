<script setup>
const booksStore = useCategoryStore();
const data = booksStore.books.value;
</script>


<template>
    <div>
        <h1>Category: {{ booksStore.selectedSlug }}</h1>
        <ul>
            <li v-for="item in data">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>