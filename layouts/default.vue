<script setup>
const {apiBaseUrl} = useApiFetch();
const {data: category} = await useFetch(`${apiBaseUrl}/categories`);
const catFooter = category.value.data.footer;

const {data: booksBS} = await useFetch(`${apiBaseUrl}/category/best-sellers/books`);

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
    <div class="main-wrapper">
        <LogIn v-model:show="dialogVisible"/>
        <LogOut/>
        <SharedHeader
            @sign-in-visible="handleSignInShowEvent"
        />
        <slot/>
        <SharedFooter
            :cat-footer="catFooter"
        />
        <Teleport to="body">
            <SharedBasket/>
        </Teleport>
    </div>
</template>
