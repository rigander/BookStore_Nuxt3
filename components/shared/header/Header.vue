<script setup>
const show = ref(false);
const emit = defineEmits(['sign-in-visible']);
const handleSignInEvent = (data) => {
    emit("sign-in-visible", show.value = data)
}
</script>

<template>
    <header>
        <div class="header-layout">
            <SharedHeaderTopNav
                @show-sign-in="handleSignInEvent"
            />
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
                        <div class="my-cart" >
                            <div class="cart"><a href="/pages/%5Bproduct%5D.vue" class="cart-link"><img src="/img/header/green%20cart.png" alt="cart"></a></div>
                            <div class="items">Your cart<div>(2 items)</div></div>
                        </div>
                        <div class="checkout">
                            <div class="total-cost">$125.0</div>
                            <button>Checkout</button>
                        </div>
                    </div>
                    <div class="header-content__wish-list">
                        <div class="star-wish-list">
                            <div class="round-for-star">
                                <div class="star"></div>
                            </div>
                            <div class="wish-list">Wish list</div>
                        </div>
                        <div class="twenty">20</div>

                    </div>
                </div>
            </div>
            <SharedHeaderBottomNav/>
        </div>
    </header>
</template>


