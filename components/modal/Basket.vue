<script setup>
const {
    basket, removeFromCart, increaseQuantity,
    reduceQuantity, hideCart } = useCartStore();

const totalCost = computed(() => {
    return basket.books.reduce((total, book) => total + book.price * book.quantity, 0);
});
</script>

<template>
    <div
        v-if="basket.showBasket"
        class="basket-dialog"
        @click="hideCart"
    >
        <div
            @click.stop
            class="basket-dialog_content">
            <div class="cart-image_box">
                <img src="/img/cart_icon2.svg" alt="cart">
                <a
                    @click="hideCart"
                    href="#" class="close-modal"/>
            </div>
            <section class="modal-basket">
                <div class="added-item_cont">
                    <div
                        v-for="book in basket.books"
                        :key="book.title"
                        class="added-item">
                        <img class="book-mini-img" :src="book.image" width="33" height="33" alt="img">
                        <div class="added-item-title">{{ book.title }}</div>
                        <div class="plus-minus_item">
                            <button
                                @click="reduceQuantity(book)"
                                :disabled="book.quantity === 1"
                                class="reduce-item"
                            >&#8722;
                            </button>
                            <span class="added-item-amount">{{ book.quantity }}</span>
                            <button
                                @click="increaseQuantity(book)"
                                class="add-item">&#43;
                            </button>
                        </div>
                        <span class="item-total-cost">{{ (book.price * book.quantity).toFixed(2) }} $</span>
                        <div
                            @click="removeFromCart(book)"
                            class="delete-item">
                            <div class="close"></div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="total_checkout">
                    <span class="total-price">{{ (totalCost).toFixed(2) }}$</span>
                    <NuxtLink
                        to="/checkout"
                        @click="hideCart"
                    >
                        <button class="button basket-button">
                            Checkout
                        </button>
                    </NuxtLink>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>