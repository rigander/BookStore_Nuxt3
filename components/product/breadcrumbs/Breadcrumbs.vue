<script setup >
const props = defineProps(['data']);
const category = props.data.bookCategory;
const formattedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
const title = props.data.bookTitle;
</script>


<template>
    <div class="product-info__nav-route">
        <ul class="breadcrumbs">
            <NuxtLink
                class="breadcrumbs_link"
                to="/">
                Home
            </NuxtLink>
            <ProductBreadcrumbsDchevron/>
            <NuxtLink
                class="breadcrumbs_link"
                :to="`/category/${category}`">
                {{ formattedCategory }}
            </NuxtLink>
            <ProductBreadcrumbsDchevron/>
            <li
                class="breadcrumbs_link"
                @click="refreshNuxtData()">
                {{ title }}
            </li>
        </ul>
    </div>
</template>
