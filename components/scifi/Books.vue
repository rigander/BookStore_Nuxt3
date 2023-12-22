<script setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue'])
const currentPage = ref(1);
const route = useRoute();
const curCategory = route.params.slug;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const handlePageClicked = async (newPage) => {
    const { data } = await useFetch(
        `${apiBaseUrl}/category/${curCategory}/books`,
        { cache: false,
          query: {page:newPage}
        },
    );
    if (data.value) {
        emit('update:modelValue', data.value);
    }
};
</script>


<template>
    <div class="books__sci-fi">
        <div
            class="books__sci-fi-div"
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
    margin-bottom: 20px;
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