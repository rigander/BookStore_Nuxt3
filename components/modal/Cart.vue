<script setup>
const {basket, removeFromCart, increaseQuantity, reduceQuantity} = useCartStore();
const modalStore = useModalStore();
const totalCost = computed(() => {
    return basket.books.reduce((total, book) =>
        total + book.price * book.quantity, 0);
});
</script>

<template>
            <div
                @click.stop class="basket-dialog_content">
                <!-- Header Section with Cart Icon -->
                <header class="cart-image_box">
                    <img src="/img/cart_icon2.svg" alt="cart">
                    <button
                        @click="modalStore.closeModal('cart')"
                        class="close-modal">
                    </button>
                </header>

                <!-- Main Basket Section -->
                <section class="modal-basket">
                    <ul class="added-item_cont">
                        <li
                            v-for="book in basket.books"
                            :key="book.title"
                            class="added-item">
                            <img
                                class="book-mini-img"
                                :src="book.image"
                                width="33"
                                height="33"
                                :alt="`Cover of ${book.title}`"
                            />
                            <div class="added-item-title">{{ book.title }}</div>
                            <div class="plus-minus_item">
                                <button
                                    @click="reduceQuantity(book)"
                                    :disabled="book.quantity === 1"
                                    class="reduce-item"
                                    aria-label="Decrease quantity"
                                >
                                    &#8722;
                                </button>
                                <span class="added-item-amount">{{ book.quantity }}</span>
                                <button
                                    @click="increaseQuantity(book)"
                                    class="add-item"
                                    aria-label="Increase quantity"
                                >
                                    &#43;
                                </button>
                            </div>
                            <span class="item-total-cost">{{ (book.price * book.quantity).toFixed(2) }} $</span>
                            <button
                                @click="removeFromCart(book)"
                                class="delete-item_from__modal-cart"
                                aria-label="Remove item"
                            >
                                <div class="close"></div>
                            </button>
                        </li>
                    </ul>

                    <!-- Divider Line -->
                    <hr class="line" />

                    <!-- Total Cost and Checkout Section -->
                    <div class="total_checkout">
                        <span class="total-price">{{ (totalCost).toFixed(2) }}$</span>
                        <NuxtLink
                            to="/checkout"
                            @click="modalStore.closeModal('cart')"
                        >
                            <button class="button basket-button">
                                Checkout
                            </button>
                        </NuxtLink>
                    </div>
                </section>
            </div>
</template>