<script setup lang="ts">


</script>


<template>
    <main id="main-content-wrapper">
        <div class="product-list-content">
            <aside class="categories">
                <div class="categories__content">
                    <h2 id="categories">Categories</h2>
                    <button>ALL</button>
                    <ul class="fiction">
                        <div class="list-title">Fiction & Literature</div>
                        <li><a href=""><div>Children</div></a></li>
                        <li><a href="./category-page.html"><div>Science</div></a></li>
                        <li><a href=""><div>Fantasy</div></a></li>
                        <li><a href=""><div>Mystery</div></a></li>
                        <li><a href=""><div>Romance</div></a></li>
                        <li><a href=""><div>Horror</div></a></li>
                        <li><a href=""><div>Poetry</div></a></li>
                        <li><a href=""><div>Literature</div></a></li>
                        <li><a href=""><div>Crime</div></a></li>
                    </ul>
                    <ul class="non-fiction">
                        <div class="list-title">Non-Fiction</div>
                        <li><a href=""><div>Comic</div></a></li>
                        <li><a href=""><div>Cook</div></a></li>
                        <li><a href=""><div>Psychology</div></a></li>
                        <li><a href=""><div>Medical</div></a></li>
                        <li><a href=""><div>Art</div></a></li>
                        <li><a href=""><div>Photography</div></a></li>
                        <li><a href=""><div>Law</div></a></li>
                        <li><a href=""><div>History</div></a></li>
                        <li><a href=""><div>Business</div></a></li>
                        <li><a href=""><div>Computer</div></a></li>
                    </ul>
                    <div class="others-container">
                        <ul class="other">
                            <div class="list-title">Other</div>
                            <li><a href=""><div>Baby</div></a></li>
                            <li><a href=""><div>Sex</div></a></li>
                            <li><a href=""><div>Travel</div></a></li>
                            <li><a href=""><div>Science</div></a></li>
                            <li><a href=""><div>Sports</div></a></li>
                        </ul>
                    </div>
                </div>
            </aside>
            <section class="product-list">
                <div class="title-science-fiction"><h4>Science Fiction</h4></div>
                <div class="product-list__best-sellers">
                    <div><SharedDiscountLabel/><a href=""><img src="~/assets/img/BestSellers/1.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$50</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/2.png" alt="image"><p>The war of </p><span class="art">Art</span></a><span>$60</span></div>
                    <div><SharedDiscountLabel/><a href=""><img src="~/assets/img/BestSellers/3.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$25</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/4.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$80</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/5.png" alt="image"><p>Life Is What You Make It</p></a><span>$200</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/6.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$200</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/7.png" alt="image"><p>The war of</p><span class="art">Art</span></a><span>$150</span></div>
                    <div><SharedDiscountLabel/><a href=""><img src="~/assets/img/BestSellers/8.png" alt="image">The Hare With Amber Eyes</a><span>$100</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/9.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$152</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/10.png" alt="image"><p>Life Is What You Make It</p></a><span>$200</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/11.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$220</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/12.png" alt="image"><p>The war of </p><span class="art">Art</span></a><span>$10</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/13.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$22</span></div>
                    <div><SharedDiscountLabel/><a href=""><img src="~/assets/img/BestSellers/14.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$300</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/15.png" alt="image"><p>Life Is What You Make It</p></a><span>$205</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/11.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$220</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/12.png" alt="image"><p>The war of </p><span class="art">Art</span></a><span>$10</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/13.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$22</span></div>
                    <div><SharedDiscountLabel/><a href=""><img src="~/assets/img/BestSellers/14.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$300</span></div>
                    <div><a href=""><img src="~/assets/img/BestSellers/15.png" alt="image"><p>Life Is What You Make It</p></a><span>$205</span></div>
                    <ul id="page-number">
                        <li class="one"><a href="">1</a></li>
                        <li class="two"><a href="">2</a></li>
                        <li class="three"><a href="">3</a></li>
                        <li class="four"><a href="">4</a></li>
                        <li class="five"><a href="">5</a></li>
                        <li class="six"><a href="">6</a></li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>