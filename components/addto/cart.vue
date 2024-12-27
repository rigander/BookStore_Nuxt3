<script setup>
const { addToCart, isBookInCart } = useCartStore();
const props = defineProps({
        book: Object,
        category: String
});
</script>

<template>
        <ClientOnly>
        <button
            :class="isBookInCart(book) ? 'add-to-cart-green' : 'add-to-cart-grey'"
            @click="addToCart({
                        category: props.category,
                        book_id: props.book.id,
                        title: props.book.title,
                        slug: props.book.slug,
                        image: props.book.image,
                        price: props.book.price,
                        quantity: 1
                         })">
        </button>
        </ClientOnly>
</template>