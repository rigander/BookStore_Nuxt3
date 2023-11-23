<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
</script>


<template>
    <main id="main-content-wrapper">
        <section class="product-info">
            <div class="product-info__nav-route">
                <ul class="bread-cramps">
                    <li><a href="index.vue">Home</a></li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="#a6a6a6" class="bi bi-chevron-double-right" viewBox="0 0 15 15">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <a href="">Discount and Clearance</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="#a6a6a6" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <a href="">Sonatini Hippeastrum Alaska</a>
                    </li>
                </ul>
            </div>
            <article class="product-info__article">
                <div class="article-img"><img src="~/assets/img/product-page/obi-van.png" alt="img" class="jedi"></div>
                <div class="wrapper-content-cart">
                    <article class="content-cart">
                        <div class="in-stock-wrapper">
                            <div id="in-stock-text">IN STOCK</div>
                            <div class="in-stock"></div>
                        </div>
                        <h2 class="sw-title">Star Wars Episode I</h2>
                        <p id="star-wars1">
                            The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and
                            published on April 21,
                            1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the
                            abridged audio version
                            was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams.
                            On
                            January 31, 2012, a new
                            aperback edition was released with a new short story, End Game, by James Luceno featured
                            inside.
                            The Star Wars Episode I:
                            The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999
                            by
                            Del Rey. It is based on
                            the script of the movie of the same name. Narration for the abridged audio version was
                            performed
                            by Michael Cumpsty.
                            The unabridged version was performed by Alexander Adams. On January 31, 2012, a new
                            paperback
                            edition was released
                            with a new short story, End Game, by James Luceno featured inside. The Star Wars Episode I:
                            The
                            Phantom Menace novelization
                            was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the
                            script of the movie of the same name.
                            Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged
                            version was performed
                            by Alexander Adams. On January 31, 2012, a new paperback edition was released with a new
                            short
                            story, End Game, by James Luceno
                            featured inside. The Star Wars Episode I: The Phantom Menace novelization was written by
                            Terry
                            Brooks and published
                            on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name.
                            Narration
                            for the abridged audio
                            version was performed by Michael Cumpsty. The unabridged version was performed by Alexander
                            Adams. On January 31, 2012,
                            a new paperback edition was released with a new short story, End Game, by James Luceno
                            featured
                            inside.
                        </p></article>
                    <div class="cart-billing">
                        <div class="price-add-to-cart">
                            <div class="our-price">
                                <p>Our price :</p>
                                <div>$150</div>
                                <span>Was $ 200 Save 20%</span>
                            </div>
                            <button id="add-to-cart">Add to cart</button>
                        </div>
                        <div class="secure-shopping-info">
                            <div id="secure-shopping"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" fill="grey" class="bi bi-lock-fill" viewBox="2 0 14 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>Safe, Secure, Shopping</div>
                            <div id="credit-cards">
                                <img src="~/assets/img/product-page/paypal.png" alt="">
                                <img src="~/assets/img/Footer/Master-Card.png" alt="card">
                                <img src="~/assets/img/Footer/Visa.png" alt="card">
                                <img src="~/assets/img/Footer/American-Express.png" alt="card">
                            </div>
                        </div>
                    </div>
                </div>
            </article>
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
                    <div class="prod-info-bottom__content">
                        <p>The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and
                            published
                            on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name.
                            Narration
                            for the abridged audio version was performed by Michael Cumpsty. The unabridged version was
                            performed
                            by Alexander Adams. On January 31, 2012, a new paperback edition was released with a new
                            short
                            story,
                            End Game, by James Luceno featured inside. The Star Wars Episode I: The Phantom Menace
                            novelization
                            was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the
                            script of
                            the movie of the same name. Narration for the abridged audio version was performed by
                            Michael
                            Cumpsty.
                            The unabridged version was performed by Alexander Adams. On January 31, 2012, a new
                            paperback
                            edition
                            was released with a new short story, End Game, by James Luceno featured inside. The Star
                            Wars
                            Episode
                            I: The Phantom Menace novelization was written by Terry Brooks and published on April 21,
                            1999
                            by Del
                            Rey. It is based on the script of the movie of the same name. Narration for the abridged
                            audio
                            version
                            was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams.
                            On
                            January
                            31, 2012, a new paperback edition was released with a new short story, End Game, by James
                            Luceno
                            featured inside. The Star Wars Episode I: The Phantom Menace novelization was written by
                            Terry
                            Brooks
                            and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the
                            same
                            name.
                            Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged
                            version was
                            performed by Alexander Adams. On January 31, 2012, a new paperback edition was released with
                            a
                            new
                            short story, End Game, by James Luceno featured inside. </p>
                    </div>
                </section>
                <section class="product-review">
                    <h2 class="title">Product review</h2>
                    <article class="name top-name">
                        <div class="avatar-name"><img src="~/assets/img/product-page/avatar.png" alt="">
                            <h4>Name 1</h4></div>
                        <p class="text-review">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including
                            versions of Lorem Ipsum.</p></article>
                    <article class="name bottom-name">
                        <div class="avatar-name"><img src="~/assets/img/product-page/avatar.png" alt="">
                            <h4>Name 2</h4></div>
                        <p class="text-review">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including
                            versions of Lorem Ipsum.</p></article>
                    <form action="#" name="feed-back" id="form">
                        <h2 class="title">Write a comment</h2>
                        <div class="group">
                            <label for="name">Your name</label>
                            <input minlength="2" placeholder="enter your fabulous name" id="name" name="firstName"
                                   type="text">
                            <span id="invalidName" class="valid-feedback"></span>
                        </div>
                        <div class="group">
                            <label for="email">e-mail</label>
                            <input id="email" placeholder="enter your e-mail address" type="email" name="email">
                            <span id="invalid-email" class="valid-feedback"></span>
                        </div>
                        <div class="group">
                            <label id="message-label" for="message">Message</label>
                            <textarea id="message" placeholder="eager to know your thoughts..." type="text"
                                      name="message"></textarea>
                            <span id="invalid-thoughts" class="valid-feedback"></span>
                        </div>
                        <div class="group">
                            <input name="submitButton" id="submit2" value="Submit" type="submit">
                        </div>
                    </form>
                </section>
            </div>
            <aside class="may-like">
                <h3>You may also like</h3>
                <div class="hare-with-amber">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
                <div class="hare-with-amber">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
                <div class="hare-with-amber">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
                <div class="hare-with-amber">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
                <div class="hare-with-amber">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
                <div class="hare-with-amber">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
                <div class="hare-with-amber last-hare-element">
                    <img src="~/assets/img/product-page/book.png" alt="">
                    <div class="hare-with-amber__right-content"><h4>The Hare With Amber</h4>
                        <span>50$</span>
                        <button type="button">Read more</button>
                    </div>
                </div>
            </aside>
        </div>
    </main>
</template>
