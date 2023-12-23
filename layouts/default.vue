<script setup>
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const {data: category} = await useFetch(`${apiBaseUrl}/categories`);
const catFooter = category.value.data.footer;
provide('categories', {
    category
})

const dialogVisible = ref(false);
const handleSignInShowEvent = (data) => {
    dialogVisible.value = data;
}
</script>


<template>
    <div class="main-wrapper">
        <SignIn v-model:show="dialogVisible"/>
        <SharedHeader
            @sign-in-visible="handleSignInShowEvent"
        />
        <slot/>
        <SharedFooter
            :cat-footer="catFooter"
        />
    </div>
</template>
