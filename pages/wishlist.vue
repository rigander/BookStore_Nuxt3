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
.wishlist-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wishlist{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1000px;
    background-color: #f4f4f4;
        h1{
            font-size: 25px;
            margin-bottom: 30px;
        }
}
.wishlist_book{
    width: 800px;
    display: flex;
    border: 1px solid black;
    img{
        width: 100px;
    }
    .wishlist_book-title{
        width: 200px;
    }
    .wishlist_book-cost{
        width: 100px;
    }
}
</style>