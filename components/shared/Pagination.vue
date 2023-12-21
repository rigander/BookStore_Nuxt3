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
        :total-items="30"
        v-model="currentPage"
        :items-per-page="5"
        :max-pages-shown="6"
        paginate-buttons-class="btn"
        active-page-class="btn-active"
        back-button-class="back-btn"
        next-button-class="next-btn"
    />
</template>

<style>
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