<script setup>

const { booksBS } = inject('booksBS');
const BSbooks = booksBS.value.data.books.data;

</script>


<template>
    <div class="product-list__best-sellers">
        <div v-for="book in BSbooks">
            <div v-if="book.discount"
                class="discount">
                <span>{{ book.discount }}%</span>
                <span class="off">Off</span>
            </div>
            <a class="bs-anchor-book" href="">
                <img :src="book.image" alt="image">
                <p
                    class="books-p"
                    :class="{ 'long-text': book.title.length > 20,
                              'short-text': book.title.length < 20 }"
                >{{ book.title }}</p>
                <span>${{ book.price }}</span>
            </a>
        </div>
        <SharedPagination
        />
    </div>
</template>

<style scoped lang="scss">
#componentContainer{
    width: 170px;
    align-self: flex-end;
    margin-left: 600px;
    margin-top: 20px;
}
.long-text {
    height: auto;
    overflow: visible;
}
.short-text {
    width: 80px;
}
</style>