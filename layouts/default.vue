<script setup>
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const {data: category} = await useFetch(`${apiBaseUrl}/categories`);
const catFooter = category.value.data.footer;
provide('categories', {
    category
})
</script>


<template>
    <div class="main-wrapper">
        <SharedHeader/>
        <slot/>
        <SharedFooter
            v-model="catFooter"
        />
    </div>
</template>