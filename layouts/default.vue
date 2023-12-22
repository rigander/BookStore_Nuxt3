<script setup>
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const {data: category} = await useFetch(`${apiBaseUrl}/categories`);
const catFooter = category.value.data.footer;
provide('categories', {
    category
})

const show = ref(false);
const handleSignInShowEvent = (data) => {
    console.log('Received some-event from header:', data);
    show.value = data;
}
</script>


<template>
    <div class="main-wrapper">
        <SignIn :show="show"/>
        <SharedHeader
            @show-sign-in-to-layout="handleSignInShowEvent"
        />
        <slot/>
        <SharedFooter
            :cat-footer="catFooter"
        />
    </div>
</template>
