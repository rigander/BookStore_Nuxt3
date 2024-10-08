<script setup>
const {useFetchGet} = useApiFetch();
const {toggleWishlist} = useWishListStore();
const {bookData} = useProductBookStore();
const props = defineProps(['activeCategory']);
const currentPage = ref(1);
const router = useRouter();
const books = ref([]);

// Fetching a list of books for the selected category
const fetchBooks = async (page = 1, category = 'best-sellers') => {
    const { data } = await useFetchGet(
        `/category/${category}/books`,
        false,
        {
            cache: false,
            query: { page: page }
        }
    );
    books.value = data.value.books.data;
};
fetchBooks(currentPage.value, props.activeCategory);

watch(() => props.activeCategory, (newCategory) => {
    fetchBooks(1, newCategory);
    currentPage.value = 1;
});

const navigateToProductPage = (book) => {
    router.push({
        path: `/product/${encodeURIComponent(book.id)}`,
        query: { book: JSON.stringify(book) },
    });
};
</script>

<template>
    <ClientOnly>
        <div class="books__sci-fi">
            <div
                class="books__sci-fi-div"
                v-for="book in books"
                :key="book.id"
            >
                <div v-if="book.discount"
                     class="discount">
                    <span>{{ book.discount }}%</span>
                    <span class="off">Off</span>
                </div>
                <NuxtLink
                    @click="navigateToProductPage(book)"
                >
                    <img
                        class="book-img-scifi"
                        :src="book.image"
                        alt="image"
                    >
                    <p
                        class="books-p"
                        :class="{ 'long-text': book.title.length > 20,
                              'short-text': book.title.length < 20 }"
                    >{{ book.title }}
                    </p>
                </NuxtLink>
                <span class="price-cart_wrapper">${{ book.price }}
                <span class="cart-add-to_wrapper">
                    <addto-cart :book="book"/>
                </span>
                <span class="toggle-wishlist">
                    <button
                        @click="toggleWishlist(book)"
                        id="add-to-wishlist-index"
                    >
                    <addto-liked :book="book"/>
                </button>
                </span>
            </span>
            </div>
            <div id="block"></div>
            <vue-awesome-paginate
                @click="fetchBooks(currentPage, activeCategory)"
                :total-items="100"
                v-model="currentPage"
                :items-per-page="15"
                :max-pages-shown="5"
                paginate-buttons-class="btn"
                active-page-class="btn-active"
                back-button-class="back-btn"
                next-button-class="next-btn"
                class="pagination-container"
            />
        </div>
    </ClientOnly>
</template>


