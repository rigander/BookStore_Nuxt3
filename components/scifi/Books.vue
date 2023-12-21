<script setup>
const props = defineProps(['modelValue']);
const currentPage = ref(1);
const route = useRoute();
const curCategory = route.params.slug;

const handlePageClicked = async (newPage) => {
    const response = await $fetch(
        `http://api.book-store.loc/api/category/${curCategory}/books?page=${newPage}`,
        {
            method: 'GET',
        });
    if (response) {
        props.modelValue.data = response.data;
    }
};
</script>


<template>
    <div class="books__sci-fi">
        <div
            v-for="book in modelValue.data.books.data"
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
        <SharedPagination
            @page-clicked="handlePageClicked"
            :currentPage="currentPage"
        />
    </div>
</template>
