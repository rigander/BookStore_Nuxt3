<script setup>
const { items, currentSlug } = defineProps(['items', 'currentSlug']);
</script>

<template>
    <ul class="fiction">
        <li
            v-for="item in items"
            class="list-title"
            :class="{ active: currentSlug === item.slug }">
            <slot :item="item"></slot>
        </li>
        <li
            v-for="item in item.subCategories"
            :class="{ active: route.params.slug === item.slug }"
        >
            <slot name="subCategory"></slot>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>