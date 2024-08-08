<script setup>
const { addToCart, isBookInCart } = useCartStore();
const { book } = defineProps(['book']);
</script>

<template>
        <ClientOnly>
        <span
            :class="isBookInCart(book)"
            @click="addToCart({
                        book_id: book.id,
                        image: book.image,
                        price: book.price,
                        quantity: 1,
                        title: book.title })">

        </span>
        </ClientOnly>
</template>

<style lang="scss" scoped>

</style>