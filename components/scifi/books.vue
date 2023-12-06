<script setup>
let scifiBooks;
scifiBooks = [
    {
        name: "The Hare With Amber Eyes",
        image: 1,
        price: 50,
        discount: 1,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 2,
        price: 60,
        discount: 0,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 3,
        price: 25,
        discount: 1,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 4,
        price: 80,
        discount: 0,
        transfer: false
    },
    {
        name: "Life is what You Make it",
        image: 5,
        price: 200,
        discount: 0,
        transfer: false
    },
    {
        name: "The Hare With Amber Eyes",
        image: 6,
        price: 200,
        discount: 0,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 7,
        price: 150,
        discount: 0,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 8,
        price: 100,
        discount: 1,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 9,
        price: 152,
        discount: 0,
        transfer: false
    },
    {
        name: "Life is what You Make it",
        image: 10,
        price: 200,
        discount: 0,
        transfer: false
    },
    {
        name: "The Hare With Amber Eyes",
        image: 11,
        price: 220,
        discount: 0,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 12,
        price: 10,
        discount: 0,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 13,
        price: 22,
        discount: 0,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 14,
        price: 300,
        discount: 1,
        transfer: false
    },
    {
        name: "Life is what You Make it",
        image: 15,
        price: 205,
        discount: 0,
        transfer: false
    },
    {
        name: "The Hare With Amber Eyes",
        image: 11,
        price: 220,
        discount: 0,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 12,
        price: 10,
        discount: 17,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 13,
        price: 22,
        discount: 0,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 14,
        price: 300,
        discount: 1,
        transfer: false
    },
    {
        name: "Life is what You Make it",
        image: 2,
        price: 205,
        discount: 0,
        transfer: false
    },
    {
        name: "The Hare With Amber Eyes",
        image: 15,
        price: 50,
        discount: 1,
        transfer: false
    },
];
</script>


<template>
    <div class="books__sci-fi">
        <div v-for="book in scifiBooks">
            <SharedDiscountLabel
             v-if="book.discount === 1"
            />
            <a href="">
                <img class="book-img-scifi"
                    :src="`/img/BestSellers/${book.image}.png`"
                    alt="image"
                >
                <p :class="[book.transfer ? 'p-scifi' : '']"
                >{{ book.name }}</p>
            </a>
            <span>${{ book.price }}</span>
        </div>
        <SharedPagination/>
    </div>
</template>
