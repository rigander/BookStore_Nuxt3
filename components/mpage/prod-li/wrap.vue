<script setup>


</script>


<template>
    <main class="main-content-wrapper">
        <div class="main__product-list-content">
            <section class="product-list">
                <div class="product-list__nav">
                    <ul>
                        <li
                            class="option"
                            >
                            <div><a href="#">Best Sellers</a></div>
                        </li>
                        <li
                            class="option"
                            >
                            <div ><a href="#">New Arrivals</a></div>
                        </li>
                        <li
                            class="option"
                            >
                            <div ><a href="#">Used Books</a></div></li>
                        <li
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

.active-tab {
    background-color: #e52424;
}
</style>