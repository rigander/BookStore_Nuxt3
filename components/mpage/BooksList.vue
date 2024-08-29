<script setup>
const {useFetchGet} = useApiFetch();
const option = reactive({
    genre: 'best-sellers',
});
const emit = defineEmits(['book-clicked-to-index']);
const currentPage = ref(1);
// Fetching a category list
const { data: categories } = await useFetchGet('/categories');

const updateCurrentPage = (newPage) => {
    // currentPage.value = newPage;
    fetchBooks(newPage);
};
const changeGenre = (event, genre) => {
    event.preventDefault();
    option.genre = genre;
    fetchBooks(1, genre);
};

</script>


<template>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="product-list__nav_new">
                    <ul class="product-list__nav_ul">
                        <li
                                v-for="(item, index) in categories.featured"
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
                    :current-page="currentPage"
                    :active-category="option.genre"
                />
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>

