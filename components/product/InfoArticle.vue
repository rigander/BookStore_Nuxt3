<script setup>
const props = defineProps(['book']);

//price calculations
const discount = props.book.discount;
const price = props.book.price;
const originalPrice = Math.floor(price / (1 - discount/100));
</script>


<template>
    <article class="product-info__article">
        <div class="article-img"><img
            :src="props.book.image"
            alt="img"
            class="jedi"
        ></div>
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
                        >Was ${{ originalPrice }} Save {{ props.book.discount }}%</span>
                    </div>
                    <button id="add-to-cart">Add to cart</button>
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