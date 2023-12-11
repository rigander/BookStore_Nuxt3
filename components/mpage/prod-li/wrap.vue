<script setup lang="ts">

</script>


<template>
    <main class="main-content-wrapper">
        <div class="main__product-list-content">
            <section class="product-list">
                <div class="product-list__nav">
                    <ul>
                        <li id="best-sel-box"><div class="box-before"></div><a href="">Best Sellers</a><div class="box-after"></div></li>
                        <li id="new-arrivals-box"><div class="shadow"><a href="">New Arrivals</a></div></li>
                        <li id="used-books-box"><div class="shadow"><a href="">Used Books</a></div></li>
                        <li id="special-offers-box"><div class="shadow"><a href="">Special Offers</a></div></li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                <MpageProdLiContent/>
            </section>
        </div>
    </main>

</template>