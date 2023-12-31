<script setup>
const {basket, removeFromCart} = useCartStore();

const totalCost = computed(() => {
    return basket.books.reduce((total, book) => total + book.price * book.quantity, 0);
});
const reduceQuantity = (book) => {
    if (book.quantity > 1) {
        book.quantity -= 1;
    }
};
const increaseQuantity = (book) => {
    book.quantity += 1;
};
const hideCart = () => {
    basket.showBasket = false;
}
</script>

<template>
    <div
        v-if="basket.showBasket"
        class="basket-dialog"
        @click="hideCart"
    >
        <div
            @click.stop
            class="basket-dialog_content">
            <div class="cart-image_box">
                <img src="/img/cart_icon2.svg" alt="cart">
            </div>
            <section class="modal-basket">
                <div class="added-item_cont">
                    <div
                        v-for="book in basket.books"
                        :key="book.title"
                        class="added-item">
                        <img class="book-mini-img" :src="book.image" width="33" height="33" alt="img">
                        <div class="added-item-title">{{ book.title }}</div>
                        <div class="plus-minus_item">
                            <button
                                @click="reduceQuantity(book)"
                                :disabled="book.quantity === 1"
                                class="reduce-item"
                            >&#8722;
                            </button>
                            <span class="added-item-amount">{{ book.quantity }}</span>
                            <button
                                @click="increaseQuantity(book)"
                                class="add-item">&#43;
                            </button>
                        </div>
                        <span class="item-total-cost">{{ (book.price * book.quantity).toFixed(2) }} $</span>
                        <div
                            @click="removeFromCart(book)"
                            class="delete-item">
                            <div class="close"></div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="total_checkout">
                    <span class="total-price">{{ (totalCost).toFixed(2) }}$</span>
                    <button class="button basket-button" href="#">
                        Checkout
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.basket-dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0,0,0, 0.5);
}
.basket-dialog_content{
    width: 500px;
    margin: 20% auto;
}
.cart-image_box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: #3f3f40;
    width: 500px;
    img{
        height: 20px;
    }
}
.modal-basket{
    min-height: 300px;
    width: 500px;
    padding: 10px;
    background-color: whitesmoke;
}
.added-item{
    display: flex;
    align-items: center;
}
.plus-minus_item{
    width: 90px;
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
}
.add-item,
.reduce-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    font-weight: bold;
    font-size: 25px;
    border: 1px solid #3a7ca8;
    border-radius: 2px;
    color: #306284;
}
.added-item-amount{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid cadetblue;
    border-radius: 2px;
    height: 20px;
    width: 40px;
    font-size: 18px;
}
.item-total-cost{
    width: 60px;
    color: #aa294b;
    margin-left: 10px;
    margin-right: 10px;
}
.add-item:hover,
.reduce-item:hover{
    cursor: pointer;
    background-color: rgba(58, 124, 168, 0.91);
    opacity: 0.8;
    color: white;
}
.line{
    height: 1px;
    background-color: #a2a2a2;
    border-radius: 1px;
    margin: 2px 0;
}
.added-item-title{
    width: 190px;
}
.book-mini-img,
.delete-item,
.amount-and-cost,
.added-item-title{
    margin-right: 10px;
}
// cross - delete sign
.delete-item{
    position: relative;
    height: 20px;
    width: 20px;
    border: solid 1px #457caa;
    border-radius: 2px;
}
.close {
    width: 18px;
    height: 18px;
    opacity: 0.5;
}
.close:hover {
    opacity: 1;
    cursor: pointer;
    background-color: #3a7ca8;
}
.close:before, .close:after {
    right: 8px;
    position: absolute;
    content: ' ';
    height: 18px;
    width: 2px;
    background-color: #333;
    border-radius: 2px;
}
.close:before {
    transform: rotate(45deg);
}
.close:after {
    transform: rotate(-45deg);
}
.basket-button{
    height: 40px;
    width: 150px;
    background-color: #52a452;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
}
.basket-button:hover{
    color: black;
}
.line{
    height: 2px;
}
.total_checkout{
    margin-left: 220px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    height: 60px;
    width: 250px;
    background-color: #92d774;
    border: none;
    border-radius: 2px;
}
.total-price{
    font-size: 23px;
}
</style>