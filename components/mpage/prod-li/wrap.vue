<script setup>
const activeTab = 'used-books';
function changeTab(tab) {
    this.activeTab = tab;
}
</script>


<template>
    <main class="main-content-wrapper">
        <div class="main__product-list-content">
            <section class="product-list">
                <div class="product-list__nav">
                    <ul>
                        <li
                            :class="{ 'active-tab': activeTab === 'best-sellers' }"
                            @click="changeTab('best-sellers')"
                            id="best-sel-box" >
                            <div class="box-before"></div>
                            <a href="#">Best Sellers</a>
                            <div class="box-after"></div>
                        </li>
                        <li
                            :class="{ 'active-tab': activeTab === 'new-arrivals' }"
                            @click="changeTab('new-arrivals')"
                            >
                            <div ><a href="#">New Arrivals</a></div>
                        </li>
                        <li
                            :class="{ 'active-tab': activeTab === 'used-books' }"
                            @click="changeTab('used-books')"
                            >
                            <div ><a href="#">Used Books</a></div></li>
                        <li
                            :class="{ 'active-tab': activeTab === 'special-offers' }"
                            @click="changeTab('special-offers')"
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

.active-tab {
    background-color: #e52424;
}
</style>