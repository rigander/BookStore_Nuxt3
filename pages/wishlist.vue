<script setup>

</script>

<template>
    <div class="wishlist-wrapper">
        <div class="wishlist">
            <h1>Your Wishlist</h1>
            <NuxtLink class="wishlist_book">
                <img id="wishlist_book-image" alt="book-img" src="">
                <span class="wishlist_book-title">title</span>
                <span class="wishlist_book-cost">cost$</span>
            </NuxtLink>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.wishlist{
  width: 800px;
  background-color: #f4f4f4;
}
</style>