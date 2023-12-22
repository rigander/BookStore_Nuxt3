<script setup>
const currentPage = ref(1);
const route = useRoute();
const curCategory = route.params.slug;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const { data: booksStore } = await useFetch(
    `${apiBaseUrl}/category/${curCategory}/books?page=${currentPage.value}`,
    { cache: false }
);
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
                    v-model="booksStore"
                />
            </section>
        </div>
    </main>
</template>