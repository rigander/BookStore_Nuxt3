<script setup>

</script>

<template>
    <header>
        <div class="header-layout">
            <SharedHeaderTopNav/>
            <div class="header-content-container">
                <div class="header-content">
                    <div class="header-content__books-online">
                        <img src="/img/header/logo.png" alt="logo">
                    </div>
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
                            <div class="cart"><a href="/pages/product.vue" class="cart-link"><img src="/img/header/green%20cart.png" alt="cart"></a></div>
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


