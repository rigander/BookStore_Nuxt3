<script setup>
const { heartColor } = useWishListStore();
const { book } = defineProps(['book']);
</script>


<template>
        <span :class="heartColor(book)"></span>
</template>




