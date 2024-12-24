<script setup>
const { heartColor } = useWishListStore();
const props = defineProps({
        book: Object
});
</script>


<template>
        <ClientOnly>
                <span :class="heartColor(book)"></span>
        </ClientOnly>
</template>




