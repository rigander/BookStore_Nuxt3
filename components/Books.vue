<script setup>
const {basket, setBasketVisibility, addToCart} = useCartStore();
const {wishlist, toggleWishlist} = useWishListStore();
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

const heartColor = (book) =>  {
    return wishlist.books.some((item) => item.title === book.title)
        ? "#e55053"
        : "#3a7ca8";
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
                >{{ book.title }}</p>
            </NuxtLink>
            <span class="price-cart_wrapper">${{ book.price }}
                <span class="cart-add-to_wrapper">
                <svg
                        @click="addToCart({
                        image: book.image,
                        price: book.price,
                        quantity: 1,
                        title: book.title }, false)"
                        id="cart_1" x="0px" y="0px"
                     viewBox="0 0 128 128"  xml:space="preserve">
                    <g>
	<ellipse class="st0" cx="57.8" cy="115.4" rx="11.6" ry="11.6"/>
                        <ellipse class="st0" cx="106.9" cy="115.4" rx="11.6" ry="11.6"/>
                        <path class="st0" d="M124.5,91.6H42.3L26.5,3.1C26.3,1.9,25.3,1,24.1,1H3.5C2.1,1,1,2.1,1,3.5S2.1,6,3.5,6H22l15.7,88.5
		c0.2,1.2,1.3,2.1,2.5,2.1h84.3c1.4,0,2.5-1.1,2.5-2.5C127,92.7,125.9,91.6,124.5,91.6z"/>
                        <polygon class="st0" points="112.2,81.5 126.4,17.8 39.3,17.8 50.7,81.5 	"/>
                        <polygon class="st0" points="104.2,12.8 99.1,4.9 92.6,9.1 94.9,12.8 	"/>
                        <polygon class="st0" points="82.7,3.1 67.8,12.8 88.9,12.8 	"/>
</g>
</svg>
            </span>
                <span class="toggle-wishlist">
                    <button
                            @click="toggleWishlist(book)"
                            id="add-to-wishlist-index"
                    >
                    <svg id="Layer_1" x="0px" y="0px"
                         width="20px" height="20px" viewBox="0 0 512 512" enable-background="new 0 0 512 512"
                         xml:space="preserve">
<g id="heart_2_" :fill="heartColor(book)">
	<polygon points="485.328,97.383 413.328,40.055 343.531,34.633 255.656,76.57 238.336,64.586 174.43,34.633
		114.516,38.008 35.961,83.945 12.656,157.164 19.32,227.727 93.875,337.57 164.453,414.773 261.648,479.352 313.578,436.742
		439.406,325.555 501.312,181.758 	"/>
    <g>
		<path d="M362.656,21.336c-41.781,0-79.562,17.172-106.656,44.828c-27.109-27.656-64.883-44.828-106.672-44.828
			C66.852,21.336,0,88.195,0,170.664c0,170.672,256,320,256,320s256-149.328,256-320C512,88.195,445.141,21.336,362.656,21.336z
			 M370.141,378.43c-46.469,42.688-93.547,74.156-114.141,87.203c-20.594-13.047-67.68-44.516-114.148-87.203
			c-35.625-32.734-63.891-65.516-84.023-97.484c-24.219-38.438-36.5-75.531-36.5-110.281c0-34.188,13.312-66.328,37.492-90.5
			c24.18-24.188,56.32-37.5,90.508-37.5c17.516,0,34.484,3.469,50.422,10.312c15.414,6.625,29.203,16.094,41,28.125L256,96.664
			l15.234-15.562c11.797-12.031,25.594-21.5,41-28.125c15.953-6.844,32.906-10.312,50.422-10.312
			c34.203,0,66.344,13.312,90.516,37.5c24.172,24.172,37.484,56.312,37.484,90.5c0,34.75-12.281,71.844-36.5,110.281
			C434.031,312.914,405.766,345.695,370.141,378.43z"/>
        <path d="M149.328,64.008L149.328,64.008c-58.906,0-106.664,47.75-106.664,106.656l0,0c0,2.734,1.039,5.469,3.125,7.547
			c4.164,4.172,10.914,4.172,15.086,0c2.078-2.078,3.125-4.812,3.125-7.547l0,0c0-22.781,8.875-44.219,24.992-60.344
			c16.117-16.109,37.547-24.984,60.336-24.984l0,0c2.734,0,5.461-1.047,7.547-3.125c4.164-4.172,4.164-10.922,0-15.078
			C154.789,65.039,152.062,64.008,149.328,64.008z"/>
	</g>
</g>
</svg>
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

