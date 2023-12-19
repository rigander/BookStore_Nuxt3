<script setup>
const currentPage = ref(1);
const route = useRoute();
const curCategory = route.params.slug;


let { data: booksStore } = await useFetch(
    `http://api.book-store.loc/api/category/${curCategory}/books?page=${currentPage.value}`,
    { cache: 'no-cache' }
);
const updatePage = async (newPage) => {
    const newData = await $fetch(
        `http://api.book-store.loc/api/category/${curCategory}/books?page=${newPage}`,
        {
        method: 'GET',
    });
    booksStore.value = newData;
};
</script>


<template>
    <SharedAsideNav/>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="title_sci-fi">
                    <h4>{{ booksStore.data.name }}</h4>
                </div>
                <ScifiBooks
                    @page-updated="updatePage"
                    v-model="booksStore"
                />
            </section>
        </div>
    </main>
</template>