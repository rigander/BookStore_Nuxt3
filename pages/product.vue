<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
</script>


<template>
    <main id="main-content-wrapper">
        <section class="product-info">
            <ProductBreadcrumps/>
            <ProductInfoarticle/>
        </section>
        <div class="container-lower">
            <div class="wrapper-prod-rew-info">
                <section class="prod-info-bottom">
                    <div class="prod-info-bottom__nav">
                        <ul>
                            <div class="white-line"></div>
                            <li id="p-info"><a href="">Product Information</a></li>
                            <li id="other-det"><a href="">Other details</a></li>
                        </ul>
                    </div>
                    <ProductInformation/>
                </section>
                <section class="product-review">
                    <h2 class="title">Product review</h2>
                    <ProductReviewOne/>
                    <ProductReviewTwo/>
                    <ProductFeedbackForm/>
                </section>
            </div>
            <ProductMaylike/>
        </div>
    </main>
</template>
