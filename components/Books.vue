<script setup>
const props = defineProps(['modelValue', 'current-page']);
const emit = defineEmits(['page-clicked']);
const currentPage = ref(props.currentPage);

const onClickHandler = (newPage) => {
    currentPage.value = newPage;
    emit('page-clicked', newPage);
};
</script>


<template>
    <div class="books__sci-fi">
        <div
            class="books__sci-fi-div"
            v-for="book in modelValue.data.books.data"
            :key="book.id">
            <div v-if="book.discount"
                 class="discount">
                <span>{{ book.discount }}%</span>
                <span class="off">Off</span>
            </div>
            <NuxtLink href="">
                <img class="book-img-scifi"
                     :src="book.image"
                     alt="image"
                >
                <p
                    class="books-p"
                    :class="{ 'long-text': book.title.length > 20,
                              'short-text': book.title.length < 20 }"
                >{{ book.title }}</p>
            </NuxtLink>
            <span>${{ book.price }}</span>
        </div>
        <div id="block"></div>
        <vue-awesome-paginate
            @click="onClickHandler"
            :total-items="100"
            v-model="currentPage"
            :items-per-page="15"
            :max-pages-shown="5"
            paginate-buttons-class="btn"
            active-page-class="btn-active"
            back-button-class="back-btn"
            next-button-class="next-btn"
            class="pagination-container"
        />
    </div>
</template>

<style lang="scss">
.books__sci-fi{
    position: relative;
    height: 822px;
}
.books__sci-fi-div {
    display: flex;
    align-items: center;
    min-height: 150px;
    margin-top: 10px;
    display: -webkit-box;
}
.books-p{
    padding-top: 8px;
    padding-left: 5px;
    height: 40px;
    width: 120px;
    overflow: hidden;
}
.books-p:hover{
    cursor: pointer;
}
.long-text {
    height: auto;
    overflow: visible;
}
.short-text {
    width: 80px;
}
.pagination-container{
    padding-top: 25px;
    margin-left: 520px;
    position: absolute;
    bottom: 0;
}
.btn {
    height: 28px;
    width: 24px;
    border: none;
    cursor: pointer;
    color: #5b5b5b;
}
.back-btn {
    color: transparent;
}
.next-btn {
    color: transparent;
}
.btn-active {
    border: 1px solid #bdbdbe;
    border-bottom: 4px solid #93bb6b;
}
</style>