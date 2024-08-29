<script setup>
const {useFetchGet} = useApiFetch();
const option = toRef({
    category: 'best-sellers',
});
const emit = defineEmits(['book-clicked-to-index']);
console.log(option.value.category);
// Fetching a category list
const { data: categories } = await useFetchGet('/categories');

const changeGenre = (event, category) => {
    event.preventDefault();
    option.category = category;
};

</script>


<template>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="product-list__nav_new">
                    <ul class="product-list__nav_ul">
                        <li
                                v-for="(category, index) in categories.featured"
                                :key="index"
                                :class="option.category === category.slug && 'active'"
                                @click="changeGenre($event, category.slug)"
                                class="option product-list__nav__li"
                        >
                            <div><a href="">{{ category.name }}</a></div>
                        </li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                <Books
                    :active-category="option.category"
                />
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>

