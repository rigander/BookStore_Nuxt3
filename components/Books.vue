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
        <div class="books__sci-fi">
            <div
                class="books__sci-fi-div"
                v-for="book in props.modelValue.books.data"
                :key="book.id"
            >
                <div v-if="book.discount"
                     class="discount">
                    <span>{{ book.discount }}%</span>
                    <span class="off">Off</span>
                </div>
                <NuxtLink
                    :to="{ name: 'product-book',
                           params: { book: book.slug },
                           query: { category: props.modelValue.slug }}">
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
            </span>
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


