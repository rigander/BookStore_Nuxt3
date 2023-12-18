<script setup>

defineProps({
    modelValue: {
        type: Object,
    }
});
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
        <SharedPagination/>
    </div>
</template>
