<script setup>
const currentPage = ref(1);
const route = useRoute();
const booksStore = ref({});
const curCategory = route.params.slug;
const id = route.params.id;
const apiBaseUrl = useRuntimeConfig().public.apiBase;
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
    <div class="slug-wrapper">
        <SharedAsideNav/>
        <main id="books-list-wrapper">
            <div class="books-list__container">
                <section>
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