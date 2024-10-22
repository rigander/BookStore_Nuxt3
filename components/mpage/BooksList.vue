<script setup>
const {useFetchGet} = useApiFetch();
const category = reactive({ });

// Fetching a category list
const { data: categories } = await useFetchGet('/categories');

// Fetching a list of books for the selected category
const fetchBooks = async (page = 1, genre = 'best-sellers') => {
    const { data } = await useFetchGet(
        `/category/${genre}/books`,
        false,
        {
            cache: false,
            query: { page: page }
        }
    );
    if (data.value) {
        category.value = data.value;
    }
};
await fetchBooks();

// Choose desired category
const changeGenre = (event, genreSlug) => {
    event.preventDefault();
    category.option = genreSlug;
    fetchBooks(1, genreSlug);
};
</script>


<template>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="product-list__nav_new">
                    <ul class="product-list__nav_ul">
                        <li
                                v-for="(genre, index) in categories.featured"
                                :key="index"
                                :class="category.value.slug === genre.slug && 'active'"
                                @click="changeGenre($event, category.slug)"
                                class="option product-list__nav__li"
                        >
                            <div><a href="">{{ genre.name }}</a></div>
                        </li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                <Books
                    v-model="category"
                />
            </section>
        </div>
    </main>
</template>


