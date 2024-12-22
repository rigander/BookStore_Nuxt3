<script setup >
const route = useRoute();
const slug = route.params.book;
const category = route.query.category;
const page = route.query.page;

const { data, error } = await useFetchGet(
    `/category/${category}/books`,
    false,
    {
        query: { page: page },
    }
);
const bookData = data.value.books.data.find((item) => item.slug === slug);
</script>


<template>
    <div>
        <main id="main-content-wrapper__product">
            <section class="product-info">
                <ProductBreadcrumbs
                    :data="{
                    bookCategory: category,
                    bookTitle: bookData.title }"/>
                <ProductInfoArticle
                    :book="bookData"/>
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
