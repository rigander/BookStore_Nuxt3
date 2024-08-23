<script setup>
const cartStore = useCartStore();
const wishlist = useWishListStore();
const {countBooksInWishlist} = storeToRefs(wishlist);
const modalStore = useModalStore();
const {totalCost, countBooksInCart} = storeToRefs(cartStore);
</script>

<template>
    <header>
        <div class="header-layout">
            <SharedHeaderTopNav />
            <div class="header-content-container">
                <div class="header-content">
                    <NuxtLink
                        to="/"
                        class="header-content__books-online">
                        <img src="/img/header/logo.png" alt="logo">
                    </NuxtLink>
                    <div class="header-content__search-panel">
                        <input id="search" type="search">
                        <button id="search-button">
                            <div class="magnifying-glass">
                                <div id="magnifying_circle"></div>
                                <div id="stick-for__magnifying-circle"></div>
                            </div><span>Search</span>
                        </button>
                    </div>
                    <div class="header-content__your-cart">
                        <div
                            @click="modalStore.toggleModal('cart')"
                            class="my-cart">
                            <div class="cart">
                                <img src="/img/header/green%20cart.png" alt="cart">
                            </div>
                            <Teleport to="body">
                                <Modal  :modalKey="'cart'">
                                    <ModalCart/>
                                </Modal>
                            </Teleport>
                            <client-only>
                                <div class="items">
                                    Your cart
                                    <div>
                                        ({{ countBooksInCart }} items)
                                    </div>
                                </div>
                            </client-only>
                        </div>
                        <client-only>
                            <div class="checkout">
                                <div class="total-cost">
                                    ${{ totalCost }}
                                </div>
                                <NuxtLink
                                    to="/checkout"
                                    class="checkout-button">
                                    <button>Checkout</button>
                                </NuxtLink>
                            </div>
                        </client-only>
                    </div>
                    <NuxtLink
                        to="/wishlist"
                        class="header-content__wish-list">
                        <div class="star-wish-list">
                            <div class="round-for-star">
                                <div class="star"></div>
                            </div>
                            <div class="wish-list">Wish list</div>
                        </div>
                        <client-only>
                            <div class="twenty">{{ countBooksInWishlist }}</div>
                        </client-only>
                    </NuxtLink>
                </div>
            </div>
            <SharedHeaderBottomNav/>
        </div>
    </header>
</template>


