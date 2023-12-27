<script setup>
const currentPage = ref(1);
const route = useRoute();
const booksStore = ref({});
const curCategory = route.params.slug;
const apiBaseUrl = useRuntimeConfig().public.apiBase;


const { data } = await useFetch(
    `${apiBaseUrl}/category/${curCategory}/books`,
    { cache: false,
      query: { page: currentPage.value }
    }
);
booksStore.value = data.value;
console.log(booksStore.value);
console.log(booksStore.value.data.name);


// const { data } = await useFetch(
//     `${apiBaseUrl}/category/${curCategory}/books`,
//     { cache: false,
//         query: {page: currentPage.value}
//     }
// );
// booksStore.value = data.value.data;
// console.log(booksStore);
// const fetchData = async () => {
//     const { data } = await useFetch(
//         `${apiBaseUrl}/category/${curCategory}/books`,
//         { cache: false,
//           query: {page: currentPage.value}
//         }
//     );
//     booksStore.value = data.value;
//     console.log(booksStore);
//     console.log(booksStore.value);
// };

// fetchData();

const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
    // fetchData();
};

</script>


<template>
    <SharedAsideNav/>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="title_sci-fi">
                    <h4>{{ booksStore.value.data.name }}</h4>
                </div>
<!--                <div v-for="book in booksStore.value">-->
<!--                    {{ book.id }}-->
<!--                </div>-->
<!--                <Books-->
<!--                    v-if="booksStore.value"-->
<!--                    v-model="booksStore"-->
<!--                    @page-clicked="updateCurrentPage"-->
<!--                />-->
            </section>
        </div>
    </main>
</template>


<style lang="scss">

</style>