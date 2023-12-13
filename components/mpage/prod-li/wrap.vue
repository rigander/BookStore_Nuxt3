<script setup lang="ts">
enum tab {
    BEST_SELLERS = "b-sel",
    NEW_ARRIVALS = "n-arr",
    USED_BOOKS = "u-books",
    SPECIAL_OFFERS = "s-offers",
}
const data = [
    {
        name: "Best Sellers",
        table: tab.BEST_SELLERS,
        link: ""
    },
    {
        name: "New Arrivals",
        table: tab.NEW_ARRIVALS,
        link: ""
    },
    {
        name: "Used Books",
        table: tab.USED_BOOKS,
        link: ""
    },
    {
        name: "Special Offers",
        table: tab.SPECIAL_OFFERS,
        link: ""
    },
]
interface OptionsState {
    genre: string;
}

const opt = reactive<OptionsState>({
    genre: tab.BEST_SELLERS
})

const changeGenre = (event: Event, genre: string) => {
    event.preventDefault();
    opt.genre = genre;
};
</script>


<template>
    <main class="main-content-wrapper">
        <div class="main__product-list-content">
            <section class="product-list">
                <div class="product-list__nav">
                    <ul>
                        <li
                            v-for="item in data"
                            :class="opt.genre === item.table && 'active'"
                            @click="changeGenre($event, item.table)"
                            class="option"
                        >
                            <div><a href="">{{ item.name }}</a></div>
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