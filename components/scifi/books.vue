<script setup>
const booksStore = useCategoryStore();
const booksData = ref(booksStore.books.value.data);

onMounted(() => {
    data.value = booksStore.books.value.data;
});

</script>


<template>
    <div class="books__sci-fi">
        <div
            v-for="book in booksData.books.data"
            :key="book.id">
            <SharedDiscountLabel
             v-if="book.discount !== null"
            />
            <NuxtLink href="">
                <img class="book-img-scifi"
                    :src="book.image"
                    alt="image"
                >
                <p>{{ book.title }}</p>
            </NuxtLink>
            <span>${{ book.price }}</span>
        </div>
        <SharedPagination/>
    </div>
</template>
