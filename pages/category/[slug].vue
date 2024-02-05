<script setup>
const {apiBaseUrl} = useApiFetch();
const currentPage = ref(1);
const route = useRoute();
const booksStore = ref({});
const curCategory = route.params.slug;
const id = route.params.id;

const fetchData = async () => {
    const { data } = await useFetch(
        `${apiBaseUrl}/api/category/${curCategory}/books`,
        { cache: false,
          query: {page: currentPage.value}
        }
    );
    booksStore.value = data.value;
};

await fetchData();

const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
    fetchData();
};

</script>


<template>
    <div>
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
                        :current-page="currentPage"
                    />
                </section>
            </div>
        </main>
    </div>
</template>


<style lang="scss">

</style>