<script setup>
const {apiBaseUrl} = useApiFetch();
const {data: category} = await useFetch(`${apiBaseUrl}/api/categories`);
const catFooter = category.value.data.footer;
const {data: booksBS} = await useFetch(`${apiBaseUrl}/api/category/best-sellers/books`);

provide('booksBS', {
    booksBS
})
provide('categories', {
    category
})
</script>

<template>
    <SharedHeader />
    <div class="main-wrapper">
        <slot/>
    </div>
    <SharedFooter :cat-footer="catFooter"/>
</template>

<style>

</style>
