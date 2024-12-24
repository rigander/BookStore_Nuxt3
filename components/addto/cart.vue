<script setup>
const { addToCart, isBookInCart } = useCartStore();
const props = defineProps({
        book: Object,
        category: String
});
</script>

<template>
        <ClientOnly>
        <span
            :class="isBookInCart(book)"
            @click="addToCart({
                        category: props.category,
                        book_id: props.book.id,
                        title: props.book.title,
                        slug: props.book.slug,
                        image: props.book.image,
                        price: props.book.price,
                        quantity: 1
                         })">
        </span>
        </ClientOnly>
</template>