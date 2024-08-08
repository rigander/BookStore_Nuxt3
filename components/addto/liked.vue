<script setup>
const { heartColor } = useWishListStore();
const { book } = defineProps(['book']);
</script>


<template>
        <ClientOnly>
                <span :class="heartColor(book)"></span>
        </ClientOnly>
</template>




