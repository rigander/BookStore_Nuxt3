<script setup>
const {apiBaseUrl} = useApiFetch();
const {data: category} = await useFetch(`${apiBaseUrl}/api/categories`);
const catFooter = category.value.data.footer;
const TopNavStore = useTopNavStore();

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
        <ModalLogIn v-model:show="dialogVisible"/>
        <ModalLogOut v-if="TopNavStore.showLogOutDialog"/>
        <slot/>
        <Teleport to="body">
            <ModalBasket/>
        </Teleport>
    </div>
    <SharedFooter :cat-footer="catFooter"/>
</template>

<style>

</style>
