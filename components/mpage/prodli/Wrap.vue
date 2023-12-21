<script setup>
const { category } = inject('categories');

const opt = reactive({
    genre: 'best-sellers',
});

const changeGenre = (event, genre) => {
    event.preventDefault();
    opt.genre = genre;
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
                <MpageProdliContent/>
            </section>
        </div>
    </main>

</template>

<style>


</style>