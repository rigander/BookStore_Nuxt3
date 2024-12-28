<script setup>
const category = ref(null);

// Fetching a category list
const { data: categories } = await useFetchGet('/categories');

// Fetching a list of books for the selected category
const fetchBooks = async (page = 1, genre = 'best-sellers') => {
    const { data } = await useFetchGet(
        `/category/${genre}/books`,
        false,
        {
            cache: false,
            query: { page: page },
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
    <main id="books-list-wrapper">
        <div class="books-list__container">
            <section>
                <div class="books-list__nav_container">
                    <ul class="product-list__nav">
                        <li
                            v-for="(genre, index) in categories.featured"
                            :key="index"
                            :class="category.slug === genre.slug && 'active'"
                            @click="changeGenre($event, genre.slug)"
                            class="option product-list__nav__li"
                        >
                            <button>{{ genre.name }}</button>
                        </li>
                    </ul>
                    <div class="books-list__side-box"></div>
                </div>
                <Books
                    v-model="category"
                />
            </section>
        </div>
    </main>
</template>


