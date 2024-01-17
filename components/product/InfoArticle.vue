<script setup>
const {basket, setBasketVisibility, addToCart} = useCartStore();
const {wishlist, toggleWishlist} = useWishListStore();

const props = defineProps(['book']);
const book = {
    image: props.book.image,
    title: props.book.title,
    price: props.book.price,
    quantity: 1
}

const heartColor = computed(() => {
    return wishlist.books.some((item) => item.title === props.book.title)
        ? "red"
        : "green";
});

const wishlistButtonText = computed(() => {
    const existingBook = wishlist.books.find((item) =>
        item.title === props.book.title
    );
    return existingBook ? "Remove from wishlist" : "Add to wishlist";
});

//price calculations
const discount = props.book.discount;
const price = props.book.price;
const originalPrice = Math.floor(price / (1 - discount/100));
</script>


<template>
    <article class="product-info__article">
        <client-only>
            <div class="article-img"><img
                :src="props.book.image"
                alt="img"
                class="jedi"
            >
                <button
                    @click="toggleWishlist(book)"
                    id="add-to-wishlist"
                >
                    <svg id="Layer_1" x="0px" y="0px"
                         width="51px" height="51px" viewBox="0 0 512 512" enable-background="new 0 0 512 512"
                         xml:space="preserve">
<g id="heart_2_">
	<polygon :fill="heartColor" points="485.328,97.383 413.328,40.055 343.531,34.633 255.656,76.57 238.336,64.586 174.43,34.633
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
                <div id="tooltip">{{ wishlistButtonText }}</div>
            </div>
        </client-only>
        <div class="wrapper-content-cart">
            <article class="content-cart">
                <div class="in-stock-wrapper">
                    <div
                        v-if="props.book.in_stock"
                        id="in-stock-text">IN STOCK</div>
                    <div class="in-stock"></div>
                </div>
                <h2 class="sw-title">{{ props.book.title }}</h2>
                <p id="star-wars1">
                    The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and
                    published on April 21,
                    1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the
                    abridged audio version
                    was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams.
                    On
                    January 31, 2012, a new
                    aperback edition was released with a new short story, End Game, by James Luceno featured
                    inside.
                    The Star Wars Episode I:
                    The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999
                    by
                    Del Rey. It is based on
                    the script of the movie of the same name. Narration for the abridged audio version was
                    performed
                    by Michael Cumpsty.
                    The unabridged version was performed by Alexander Adams. On January 31, 2012, a new
                    paperback
                    edition was released
                    with a new short story, End Game, by James Luceno featured inside. The Star Wars Episode I:
                    The
                    Phantom Menace novelization
                    was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the
                    script of the movie of the same name.
                    Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged
                    version was performed
                    by Alexander Adams. On January 31, 2012, a new paperback edition was released with a new
                    short
                    story, End Game, by James Luceno
                    featured inside. The Star Wars Episode I: The Phantom Menace novelization was written by
                    Terry
                    Brooks and published
                    on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name.
                    Narration
                    for the abridged audio
                    version was performed by Michael Cumpsty. The unabridged version was performed by Alexander
                    Adams. On January 31, 2012,
                    a new paperback edition was released with a new short story, End Game, by James Luceno
                    featured
                    inside.
                </p></article>
            <div class="cart-billing">
                <div class="price-add-to-cart">
                    <div class="our-price">
                        <p>Our price:</p>
                        <div> ${{ props.book.price }}</div>
                        <span
                            v-if="props.book.discount"
                        >Was ${{ originalPrice }} Save {{ props.book.discount }}%
                        </span>
                    </div>
                    <button
                        @click="addToCart(book, true)"
                        id="add-to-cart"
                    >Add to cart</button>
                </div>
                <div class="secure-shopping-info">
                    <div id="secure-shopping"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" fill="grey" class="bi bi-lock-fill" viewBox="2 0 14 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>Safe, Secure, Shopping</div>
                    <div id="credit-cards">
                        <img src="/img/product-page/paypal.png" alt="">
                        <img src="/img/Footer/Master-Card.png" alt="card">
                        <img src="/img/Footer/Visa.png" alt="card">
                        <img src="/img/Footer/American-Express.png" alt="card">
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.jedi{
    height: 100%;
    width: auto;
}
</style>