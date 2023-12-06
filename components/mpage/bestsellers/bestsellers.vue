<script setup>
let BSbooks;
BSbooks = [
    {
        name: "The Hare With Amber Eyes",
        image: 1,
        price: 50,
        discount: true,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 2,
        price: 60,
        discount: false,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 3,
        price: 25,
        discount: true,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 4,
        price: 80,
        discount: false,
        transfer: false
    },
    {
        name: "Life is what you make it",
        image: 5,
        price: 200,
        discount: false,
        transfer: false
    },
    {
        name: "The Hare With Amber Eyes",
        image: 6,
        price: 200,
        discount: false,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 7,
        price: 150,
        discount: true,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 8,
        price: 100,
        discount: true,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 9,
        price: 152,
        discount: false,
        transfer: false
    },
    {
        name: "Life is what you make it",
        image: 10,
        price: 200,
        discount: false,
        transfer: false
    },
    {
        name: "The Hare With Amber Eyes",
        image: 11,
        price: 220,
        discount: false,
        transfer: false
    },
    {
        name: "The war of Art",
        image: 12,
        price: 10,
        discount: false,
        transfer: true
    },
    {
        name: "The Hare With Amber Eyes",
        image: 13,
        price: 22,
        discount: false,
        transfer: false
    },
    {
        name: "The Immortals of Meluha",
        image: 14,
        price: 300,
        discount: true,
        transfer: false
    },
    {
        name: "Life is what you make it",
        image: 15,
        price: 205,
        discount: false,
        transfer: false
    },
];
</script>


<template>
    <div class="product-list__best-sellers">
        <div v-for="book in BSbooks">
            <SharedDiscountLabel
            v-if="book.discount"
            />
            <a class="bs-anchor-book" href="">
                <img
                :src="`/img/BestSellers/${book.image}.png`"
                alt="image"
            >
                <p
                :class="[book.transfer ? 'p-bests' : '']"
                >{{ book.name }}</p>
                <span>${{ book.price }}</span>
            </a>
        </div>
        <SharedPagination
        />
    </div>
</template>

<style>
#componentContainer{
    width: 170px;
    align-self: flex-end;
    margin-left: 600px;
    margin-top: 20px;
}
</style>