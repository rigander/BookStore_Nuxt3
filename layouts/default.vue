<script setup lang="ts">
const uri = 'http://api.book-store.loc/api/categories'
const {data: category} = await useFetch(uri);
provide('categories', {
    category
})
</script>


<template>
    <div class="main-wrapper">
        <SharedHeader/>
        <slot/>
        <SharedFooter/>
    </div>
</template>