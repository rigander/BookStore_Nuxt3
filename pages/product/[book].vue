<script setup >
const route = useRoute();
const book = JSON.parse(route.query.book);

</script>


<template>
    <div>
        <main id="main-content-wrapper__product">
            <section class="product-info">
                <ProductBreadcrumps/>
                <ProductInfoArticle
                    :book="book"
                />
            </section>
            <div class="container-lower">
                <div class="wrapper-prod-rew-info">
                    <section class="prod-info-bottom">
                        <div class="prod-info-bottom__nav">
                            <ul>
                                <li id="p-info"><a href="">Product Information</a></li>
                                <li id="other-det"><a href="">Other details</a></li>
                            </ul>
                        </div>
                        <ProductInformation/>
                    </section>
                    <section class="product-review">
                        <h2 class="title">Product review</h2>
                        <ProductReview/>
                        <ProductFeedBackForm/>
                    </section>
                </div>
                <ProductMayLike/>
            </div>
        </main>
    </div>
</template>
