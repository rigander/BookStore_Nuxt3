<script setup lang="ts">
const data = [
    {
        name: "New Arrivals",
        table: "tab.NEW_ARRIVALS",
        link: ""
    },
    {
        name: "Used Books",
        table: "tab.USED_BOOKS",
        link: ""
    },
    {
        name: "Special Offers",
        table: "tab.SPECIAL_OFFERS",
        link: ""
    },
]

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
    genre: tab.BEST_SELLERS
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
                            <div>
                                <a href="">Best Sellers</a>
                            </div>
                        </li>
                        <li
                            v-for="item in data"
                            :class="opt.genre === item.table && 'active'"
                            @click="opt.genre = item.table"
                            class="option"
                            >
                            <div>
                                <a href="">{{ item.name }}</a>
                            </div>
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