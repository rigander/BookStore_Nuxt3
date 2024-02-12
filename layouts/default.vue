<script setup>
const {apiBaseUrl} = useApiFetch();
const {data: category} = await useFetch(`${apiBaseUrl}/api/categories`);
const catFooter = category.value.data.footer;
const TopNavStore = useTopNavStore();
const modalStore = useModalStore();

const {data: booksBS} = await useFetch(`${apiBaseUrl}/api/category/best-sellers/books`);

provide('booksBS', {
    booksBS
})
provide('categories', {
    category
})

const dialogVisible = ref(false);
const handleSignInShowEvent = (data) => {
    dialogVisible.value = data;
}

</script>

<template>
    <SharedHeader @sign-in-visible="handleSignInShowEvent"/>
    <div class="main-wrapper">
        <Teleport to="body">
            <ModalLogIn v-if="modalStore.showLogin"/>
        </Teleport>
        <Teleport to="body">
            <ModalCart v-if="modalStore.showCart"/>
        </Teleport>
        <slot/>
    </div>
    <SharedFooter :cat-footer="catFooter"/>
</template>

<style>

</style>
