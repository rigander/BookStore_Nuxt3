<script setup>

</script>

<template>
    <div>
        <section class="modal-basket">
            <div class="added-item">
                <button class="delete-item">
                    <div class="close"></div>
                </button>
                <img class="book-mini-img" src="" width="33" height="33" alt="img">
                <div class="added-item-title">book title</div>
                <div class="plus-minus_item">
                    <div class="add-item">&#43;</div>
                    <div class="reduce-item">&#8722;</div>
                </div>
                <div class="amount-and-cost">
                    <span class="added-item-amount">4 pcs</span>
                    <span>x</span>
                    <span class="added-item-cost">50 usd</span>
                </div>
                <span class="item-total-cost">200 usd</span>
            </div>
            <span class="total-cost">Total: 200 usd</span>
            <a class="button basket-button" href="#">Checkout</a>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.modal-basket{
    height: 400px;
    width: 500px;
    padding: 10px;
}
.added-item{
    display: flex;
}
.plus-minus_item{
    width: 54px;
    display: flex;
    justify-content: space-between;
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
.add-item:hover,
.reduce-item:hover{
    cursor: pointer;
    background-color: rgba(58, 124, 168, 0.91);
    opacity: 0.8;
    color: white;
}

// cross - delete sign
.delete-item{
    height: 21px;
    width: 21px;
    background-color: #f57375;
    border: none;
    border-radius: 4px;
    position: relative;
}
.close {
    right: 32px;
    top: 32px;
    width: 30px;
    height: 30px;
    opacity: 0.3;
}
.close:hover {
    opacity: 1;
}
.close:before, .close:after {
    position: absolute;
    top: 0.6px;
    left: 8.5px;
    content: ' ';
    height: 20px;
    width: 4px;
    background-color: #333;
    border-radius: 3px;
}
.close:before {
    transform: rotate(45deg);
}
.close:after {
    transform: rotate(-45deg);
}

</style>