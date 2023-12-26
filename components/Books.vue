<script setup>
defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'page-clicked'])
const currentPage = ref(1);
const route = useRoute();
const curCategory = route.params.slug;
const apiBaseUrl = useRuntimeConfig().public.apiBase;

const handlePageClicked = (newPage) => {
    currentPage.value = newPage;
    emit('page-clicked', newPage);
}

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
        <SharedPagination
            @page-clicked="handlePageClicked"
            :currentPage="currentPage"
        />
    </div>
</template>

<style lang="scss">
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
.long-text {
    height: auto;
    overflow: visible;
}
.short-text {
    width: 80px;
}
</style>