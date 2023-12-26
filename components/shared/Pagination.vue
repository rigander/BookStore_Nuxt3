<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(['page-clicked']);
const onClickHandler = (page: number) => {
    emit('page-clicked', page);
};

const currentPage = ref(1);
</script>

<template>
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
</template>

<style>
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