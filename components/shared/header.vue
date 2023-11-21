<script setup>

</script>

<template>
    <header>
        <div class="header-layout">
            <div class="account-nav-container">
                <nav class="account-nav">
                    <ul>
                        <li><a id="account-nav__sign-in" href="">Sign in</a></li>
                        <li><a id="account-nav__my-account" href="">My Account</a></li>
                        <li><a id="account-nav__order-status" href="">Order Status</a></li>
                        <li><a id="account-nav__help" href="">Help</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header-content-container">
                <div class="header-content">
                    <div class="header-content__books-online">
                        <img src="~/assets/img/header/logo.png" alt="logo">
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
                            <div class="cart"><a href="/pages/product.vue" class="cart-link"><img src="~/assets/img/header/green%20cart.png" alt="cart"></a></div>
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
            <div class="main-nav-wrapper">
                <nav class="main-nav">
                    <ul>
                        <li><a href="" id="main-nav__computers">Computers</a></li>
                        <li><a href="" class="main-nav__cooking">Cooking</a></li>
                        <li><a href="" class="main-nav__education">Education</a></li>
                        <li><a href="" class="main-nav__fiction">Fiction</a></li>
                        <li><a href="" class="main-nav__health">Health</a></li>
                        <li><a href="" class="main-nav__math">Mathematics</a></li>
                        <li><a href="" class="main-nav__medical">Medical</a></li>
                        <li><a href="" class="main-nav__reference">Reference</a></li>
                        <li><a href="" id="main-nav__science">Science</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>


