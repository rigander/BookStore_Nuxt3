<script setup>
let books;
books = [
    {   name: "The Hare With Amber",
        image: "book",
        price: 50,
    },
    {   name: "The Hare With Amber",
        image: "book",
        price: 40,
    },
    {   name: "The Hare With Amber",
        image: "book",
        price: 60,
    },
    {   name: "The Hare With Amber",
        image: "book",
        price: 20,
    },
    {   name: "The Hare With Amber",
        image: "book",
        price: 70,
    },
    {   name: "The Hare With Amber",
        image: "book",
        price: 80,
    },
    {   name: "The Hare With Amber",
        image: "book",
        price: 10,
    },

]
</script>


<template>
    <aside class="may-like__products">
        <h3>You may also like</h3>
        <div class="may-like-book"
             v-for="book in books"
        >
            <img :src="`/img/product-page/${book.image}.png`" alt="">
            <div class="may-like__right-content"><h4>The Hare With Amber</h4>
                <span>{{ book.price }}$</span>
                <button type="button">Read more</button>
            </div>
        </div>

    </aside>
</template>