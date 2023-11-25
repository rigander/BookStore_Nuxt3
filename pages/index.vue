<script setup lang="ts">

</script>


<template>
    <MainpageBanners/>
    <SharedAsideNav/>
        <main id="main-content-wrapper">
            <div class="main__product-list-content">
                <section class="product-list">
                    <div class="product-list__nav">
                        <ul>
                            <li><div class="box-before"></div><a href="">Best Sellers</a><div class="box-after"></div></li>
                            <li><div class="shadow"><a href="">New Arrivals</a></div></li>
                            <li><div class="shadow"><a href="">Used Books</a></div></li>
                            <li><div class="shadow"><a href="">Special Offers</a></div></li>
                        </ul><div class="big-box"></div>
                    </div>
                    <MainpageBestsellers/>
                </section>
            </div>
        </main>
</template>



