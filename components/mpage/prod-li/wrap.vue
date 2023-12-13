<script setup lang="ts">
enum tab {
    BEST_SELLERS = "b-sek",
    NEW_ARRIVALS = "n-arr",
    USED_BOOKS = "u-books",
    SPECIAL_OFFERS = "s-offers",
}
interface OptionsState {
    genre: string;
}

const opt = reactive<OptionsState>({
    genre: tab.SPECIAL_OFFERS
})
</script>


<template>
    <main class="main-content-wrapper">
        <div class="main__product-list-content">
            <section class="product-list">
                <div class="product-list__nav">
                    <ul>
                        <li
                            :class="opt.genre === tab.BEST_SELLERS && 'active'"
                            @click="opt.genre = tab.BEST_SELLERS"
                            class="option"
                            >
                            <div><a href="#">Best Sellers</a></div>
                        </li>
                        <li
                            :class="opt.genre === tab.NEW_ARRIVALS && 'active'"
                            @click="opt.genre = tab.NEW_ARRIVALS"
                            class="option"
                            >
                            <div ><a href="#">New Arrivals</a></div>
                        </li>
                        <li
                            :class="opt.genre === tab.USED_BOOKS && 'active'"
                            @click="opt.genre = tab.USED_BOOKS"
                            class="option"
                            >
                            <div ><a href="#">Used Books</a></div></li>
                        <li
                            :class="opt.genre === tab.SPECIAL_OFFERS && 'active'"
                            @click="opt.genre = tab.SPECIAL_OFFERS"
                            class="option"
                            >
                            <div ><a href="#">Special Offers</a></div>
                        </li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                <MpageProdLiContent/>
            </section>
        </div>
    </main>

</template>

<style>


</style>