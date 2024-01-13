<script setup>
const {wishlist, removeFromWishlist} = useWishListStore();

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
                <span
                    @click="removeFromWishlist(book)"
                    class="delete-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" id="delete">
                    <g fill="#fff" transform="translate(4.499 -1031.861)">
                        <circle cx="8.001" cy="1044.361" r="12.5" fill="#424242" fill-rule="evenodd"></circle>
                        <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#1f212a" d="M15.262 24.676a12.5 12.5 0 0 0 .582-.131 12.5 12.5 0 0 0 1.185-.395 12.5 12.5 0 0 0 1.14-.51 12.5 12.5 0 0 0 1.085-.622 12.5 12.5 0 0 0 1.016-.727 12.5 12.5 0 0 0 .939-.824 12.5 12.5 0 0 0 .852-.914 12.5 12.5 0 0 0 .755-.994 12.5 12.5 0 0 0 .655-1.067 12.5 12.5 0 0 0 .543-1.125 12.5 12.5 0 0 0 .427-1.174 12.5 12.5 0 0 0 .153-.593L18 9.006h-1.572L14.71 7.289a1.004 1.004 0 0 0-.709-.297h-2.988c-.549 0-1.006.458-1.006 1.006v1.008H7v1l1 1v6c0 .273.113.523.295.705l6.967 6.965z" color="#000" font-family="sans-serif" font-weight="400" transform="translate(-4.499 1031.861)"></path><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M7.004 2.982c-.549 0-1.006.458-1.006 1.006v1.008H2.99v1h1v7c0 .545.455 1 1 1h7c.546 0 1-.455 1-1v-7h1v-1h-2.992V3.988c0-.548-.457-1.006-1.006-1.006H7.004zm0 .997h2.988c.012 0 .006-.01.006.01v1.007h-3V3.988c0-.012-.006-.01.006-.01zM4.99 5.996h7v7h-1v-6h-1v6h-1v-6h-1v6h-1v-6h-1v6h-1v-7z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(-.49 1035.872)">
                    </path>
                    </g>
                </svg>
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
.delete-item{
    margin-right: 10px;
}
.delete-item:hover{
    cursor: pointer;
}
</style>