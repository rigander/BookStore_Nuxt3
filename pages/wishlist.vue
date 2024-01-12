<script setup>
const {wishlist} = useWishListStore();
</script>

<template>
    <div class="wishlist-wrapper">
        <div class="wishlist">
            <h1>Your Wishlist</h1>
            <NuxtLink
                v-for="book in wishlist.books"
                class="wishlist_book">
                <img id="wishlist_book-image" alt="book-img" :src="book.image">
                <span class="wishlist_book-title">{{ book.title }}</span>
                <span class="wishlist_book-cost">
                    <span id="wishlist_book-cost-title">Price:</span>
                    {{ book.price }}$
                </span>
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
            font-size: 35px;
            margin-bottom: 30px;
            margin-top: 30px;
            color: #52a452;
            font-weight: bold;
        }
}
.wishlist_book{
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 10px;
    img{
        width: 100px;
    }
    .wishlist_book-title{
        width: 400px;
        color: #3f3f40;
        font-weight: bold;
        font-size: 20px;
    }
    .wishlist_book-cost{
        width: 100px;
        color: #52a452;
        font-weight: bold;
    }
}
#wishlist_book-cost-title{
    color: #3f3f40;
}
</style>