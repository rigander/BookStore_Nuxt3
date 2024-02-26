<script setup>
const {toggleWishlist} = useWishListStore();
const {bookData} = useProductBookStore();
const props = defineProps(['modelValue', 'current-page']);
const emit = defineEmits(['page-clicked']);
const currentPage = ref(props.currentPage);
const router = useRouter();
const onClickHandler = (newPage) => {
    currentPage.value = newPage;
    emit('page-clicked', newPage);
};

const navigateToProductPage = (book) => {
    router.push({
        path: `/product/${encodeURIComponent(book.id)}`,
        query: { book: JSON.stringify(book) },
    });
};

</script>


<template>
    <div class="books__sci-fi">
        <div
            class="books__sci-fi-div"
            v-for="book in modelValue.data.books.data"
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
                    <SvgCart :book="book"/>
                </span>
                <span class="toggle-wishlist">
                    <button
                            @click="toggleWishlist(book)"
                            id="add-to-wishlist-index"
                    >
                    <SvgHeart :book="book"/>
                </button>
                </span>
            </span>
        </div>
        <div id="block"></div>
        <vue-awesome-paginate
            @click="onClickHandler"
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
</template>

<style lang="scss" scoped>

</style>

