<script setup>


</script>
<template>
    <div class="main-wrapper">
        <shared-header/>
        <div class="sliders-container">
            <article class="sliders">
                <div class="main-slider">
                    <div class="main-slider__wrapper">
                        <div class="main-slider__content">
                            <div class="man"><a href="">A Wanted Man</a></div>
                            <div class="title">(Jack Reacher #17)</div>
                            <div class="author">By Lee Child</div>
                        </div>
                        <button class="left">
                            <div>
                                <img alt="img" src="../assets/img/left.png">
                            </div>
                        </button>
                        <button class="right">
                            <div>
                                <img alt="img" src="../assets/img/right.png">
                            </div>
                        </button>
                    </div>
                </div>
                <div class="side-slider">
                    <div class="side-slider__wrapper">
                        <div class="side-slider__content">
                            <div id="deal">
                                Deal of the Month
                                <div id="book-title">The Human Face of Big Data</div>
                            </div>
                            <div id="save">
                                Save 45% Today
                                <div id="cost">$27.50</div>
                                <button><span>Buy now</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <main id="main-content-wrapper">
            <div class="product-list-content">
                <shared-aside-nav/>
                <section class="product-list">
                    <div class="product-list__nav">
                        <ul>
                            <li><div class="box-before"></div><a href="">Best Sellers</a><div class="box-after"></div></li>
                            <li><div class="shadow"><a href="">New Arrivals</a></div></li>
                            <li><div class="shadow"><a href="">Used Books</a></div></li>
                            <li><div class="shadow"><a href="">Special Offers</a></div></li>
                        </ul><div class="big-box"></div>
                    </div>
                    <div class="product-list__best-sellers">
                        <div>
                            <shared-discount-label/>
                            <a href=""><img src="../assets/img/BestSellers/1.png" alt="image"></a>
                            <p>The Hare With Amber Eyes</p>
                            <span>$50</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="../assets/img/BestSellers/2.png" alt="image">
                            </a>
                            <p class="war-of-art">The war of Art</p>
                            <span>$60</span>
                        </div>
                        <div>
                            <shared-discount-label/>
                            <a href="">
                                <img src="../assets/img/BestSellers/3.png" alt="image">
                            </a>
                            <p>The Hare With Amber Eyes</p>
                            <span>$25</span>
                        </div>
                        <div>
                            <a href=""><img src="../assets/img/BestSellers/4.png" alt="image"></a>
                            <p class="immortals">The Immortals of Meluha</p>
                            <span>$80</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="../assets/img/BestSellers/5.png" alt="image">
                            </a>
                            <p>Life Is What You Make It</p>
                            <span>$200</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="../assets/img/BestSellers/6.png" alt="image">
                            </a>
                            <p>The Hare With Amber Eyes</p
                            ><span>$200</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="../assets/img/BestSellers/7.png" alt="image">
                            </a>
                            <p class="war-of-art">The war of Art</p>
                            <span>$150</span>
                        </div>
                        <div>
                            <shared-discount-label/>
                            <a href=""><img src="../assets/img/BestSellers/8.png" alt="image">
                            </a>
                            The Hare With Amber Eyes
                            <span>$100</span></div>
                        <div>
                            <a href="">
                                <img src="../assets/img/BestSellers/9.png" alt="image">
                            </a>
                            <p class="immortals">The Immortals of Meluha</p>
                            <span>$152</span>
                        </div>
                        <div>
                            <a href=""><img src="../assets/img/BestSellers/10.png" alt="image">
                            </a>
                            <p>Life Is What You Make It</p>
                            <span>$200</span>
                        </div>
                        <div>
                            <a href=""><img src="../assets/img/BestSellers/11.png" alt="image">
                            </a>
                            <p>The Hare With Amber Eyes</p>
                            <span>$220</span>
                        </div>
                        <div>
                            <a href=""><img src="../assets/img/BestSellers/12.png" alt="image">
                            </a>
                            <p class="war-of-art">The war of Art</p>
                            <span>$10</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="../assets/img/BestSellers/13.png" alt="image">
                            </a>
                            <p>The Hare With Amber Eyes</p>
                            <span>$22</span>
                        </div>
                        <div>
                            <div class="discount">
                                <span>30%</span>
                                <span class="off">Off</span>
                            </div>
                            <a href="">
                                <img src="../assets/img/BestSellers/14.png" alt="image">
                            </a>
                            <p class="immortals">The Immortals of Meluha</p>
                            <span>$300</span>
                        </div>
                        <div>
                            <a href=""><img src="../assets/img/BestSellers/15.png" alt="image">
                            </a>
                            <p>Life Is What You Make It</p>
                            <span>$205</span>
                        </div>
                        <div id="page-number">
                            <div class="one"><a href="">1</a></div>
                            <div class="two"><a href="">2</a></div>
                            <div class="three"><a href="">3</a></div>
                            <div class="four"><a href="">4</a></div>
                            <div class="five"><a href="">5</a></div>
                            <div class="six"><a href="">6</a></div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <shared-footer/>
    </div>
</template>



