<script setup>
const categoryStore = useCategoryStore();

const handlePageLoad = async () => {
    const slug = $route.params.slug;
    await categoryStore.fetchBooksByCategory(slug);
}
</script>


<template>
<div> Wow effect</div>
</template>