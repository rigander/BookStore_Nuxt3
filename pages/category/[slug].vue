<script setup>
const currentPage = ref(1);
const route = useRoute();
const booksStore = ref({});
const curCategory = route.params.slug;
const apiBaseUrl = useRuntimeConfig().public.apiBase;


// const { data } = await useFetch(
//     `${apiBaseUrl}/category/${curCategory}/books`,
//     { cache: false,
//       query: { page: currentPage.value }
//     }
// );
// booksStore.value = data.value;

const fetchData = async () => {
    const { data } = await useFetch(
        `${apiBaseUrl}/category/${curCategory}/books`,
        { cache: false,
          query: {page: currentPage.value}
        }
    );
    booksStore.value = data.value;
};

fetchData();

const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
    fetchData();
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
                <Books
                    v-model="booksStore"
                    @page-clicked="updateCurrentPage"
                />
            </section>
        </div>
    </main>
</template>


<style lang="scss">

</style>