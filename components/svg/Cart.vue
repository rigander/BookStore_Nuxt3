<script setup>
const { addToCart } = useCartStore();
const { book } = defineProps(['book']);
</script>

<template>
    <svg
        @click="addToCart({
                        book_id: book.id,
                        image: book.image,
                        price: book.price,
                        quantity: 1,
                        title: book.title }, false)"
        id="cart_1" x="0px" y="0px"
        viewBox="0 0 128 128"  xml:space="preserve">
        <g>
            <ellipse class="st0" cx="57.8" cy="115.4" rx="11.6" ry="11.6"/>
            <ellipse class="st0" cx="106.9" cy="115.4" rx="11.6" ry="11.6"/>
            <path class="st0" d="M124.5,91.6H42.3L26.5,3.1C26.3,1.9,25.3,1,24.1,1H3.5C2.1,1,1,2.1,1,3.5S2.1,6,3.5,6H22l15.7,88.5
		c0.2,1.2,1.3,2.1,2.5,2.1h84.3c1.4,0,2.5-1.1,2.5-2.5C127,92.7,125.9,91.6,124.5,91.6z"/>
            <polygon class="st0" points="112.2,81.5 126.4,17.8 39.3,17.8 50.7,81.5 	"/>
            <polygon class="st0" points="104.2,12.8 99.1,4.9 92.6,9.1 94.9,12.8 	"/>
            <polygon class="st0" points="82.7,3.1 67.8,12.8 88.9,12.8 	"/>
        </g>
</svg>
</template>

<style lang="scss" scoped>

</style>