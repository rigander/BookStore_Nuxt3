<script setup>
const {apiBaseUrl} = useApiFetch();
const option = reactive({
    genre: 'best-sellers',
});
const emit = defineEmits(['book-clicked-to-index']);
const currentPage = ref(1);
const booksStore = ref({});
const { data: categories } = await useFetch(`${apiBaseUrl}/api/categories`);

const fetchData = async () => {
    const { data } = await useFetch(
        `${apiBaseUrl}/api/category/${option.genre}/books`,
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
const changeGenre = (event, genre) => {
    event.preventDefault();
    option.genre = genre;
    currentPage.value = 1;
    fetchData();
};

</script>


<template>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="product-list__nav_new">
                    <ul class="product-list__nav_ul">
                        <li
                                v-for="(item, index) in categories.data.featured"
                                :key="index"
                                :class="option.genre === item.slug && 'active'"
                                @click="changeGenre($event, item.slug)"
                                class="option product-list__nav__li"
                        >
                            <div><a href="">{{ item.name }}</a></div>
                        </li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                <Books
                    v-model="booksStore"
                    @page-clicked="updateCurrentPage"
                    :current-page="currentPage"
                />
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>

