<script setup>
const {toggleWishlist} = useWishListStore();
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const currentPage = ref(1);
const router = useRouter();

// Fetching a list of books for the selected category
const fetchBooksPaginate = async (page = 1, category) => {
    const { data } = await useFetchGet(
        `/category/${category}/books`,
        false,
        {
            cache: false,
            query: { page: page },
        }
    );
    if (data.value) {
        emit('update:modelValue', data.value);
    }
};

</script>

<template>
    <ClientOnly>
        <div class="books-list">
            <div
                class="book"
                v-for="book in props.modelValue.books.data"
                :key="book.id"
            >
                <div v-if="book.discount"
                     class="book-discount">
                    <span class="discount-number">{{ book.discount }}%</span>
                    <span class="discount-text">Off</span>
                </div>
                <NuxtLink
                    class="book-link_content"
                    :to="{ name: 'product-book',
                           params: { book: book.slug },
                           query: { category: props.modelValue.slug }}">
                    <img
                        class="book-img"
                        :src="book.image"
                        alt="image"
                    >
                    <p
                        class="book-title"
                        :class="{ 'long-text': book.title.length > 20,
                              'short-text': book.title.length < 20 }"
                    >{{ book.title }}
                    </p>
                </NuxtLink>
                <div class="book-actions">
                    <div>${{ book.price }}</div>
                    <span class="cart-add-to_wrapper">
                        <addto-cart
                            :book="book"
                            :category="props.modelValue.slug"
                        />
                    </span>
                    <span class="toggle-wishlist">
                        <button
                            @click="toggleWishlist(book, props.modelValue.slug)"
                            id="add-to-wishlist-index"
                        >
                            <addto-liked
                                :book="book"
                            />
                        </button>
                    </span>
                </div>
            </div>
            <div id="block"></div>
            <vue-awesome-paginate
                @click="fetchBooksPaginate(currentPage, props.modelValue.slug)"
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


