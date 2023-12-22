<script setup lang="ts">
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const {data: category} = await useFetch(`${apiBaseUrl}/categories`);

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