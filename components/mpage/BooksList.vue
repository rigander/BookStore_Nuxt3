<script setup>
const { category } = inject('categories');

const opt = reactive({
    genre: 'best-sellers',
});

const changeGenre = (event, genre) => {
    event.preventDefault();
    opt.genre = genre;
};

const { booksBS } = inject('booksBS');
const BSbooks = booksBS.value.data.books.data;

const currentPage = ref(1);
const route = useRoute();
const curCategory = route.params.slug;
const apiBaseUrl = useRuntimeConfig().public.apiBase;

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
    <main class="main-content-wrapper">
        <div class="main__product-list-content">
            <section class="product-list">
                <div class="product-list__nav">
                    <ul>
                        <li
                            v-for="(item, index) in category.data.featured"
                            :key="index"
                            :class="opt.genre === item.slug && 'active'"
                            @click="changeGenre($event, item.slug)"
                            class="option"
                        >
                            <div><a href="">{{ item.name }}</a></div>
                        </li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                    <div class="product-list__index">
                       <Books/>
                    </div>
            </section>
        </div>
    </main>

</template>

<style lang="scss">
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