<script setup>
const { state, setSelectedCategory } = useCategoryStore();
const router = useRouter();

const { category } = inject('categories');
const setSelectedSlug = (slug) => {
    router.push(`/category/${slug}`);
    setSelectedCategory(slug);
};

</script>


<template>
    <div class="main-nav-wrapper">
        <nav class="main-nav">
            <ul>
                <li
                    v-for="item in category.data.header"
                    :key="item.id"
                    :class="{
                        'bottom-nav': true,
                         active: state.selectedCategory === item.slug
                    }"
                >
                    <NuxtLink
                        :to="`/category/${item.slug}`"
                        @click="setSelectedSlug(item.slug)"
                        :id="item.id"
                    >
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
.bottom-nav{
    :hover{
        user-select: none;
    }
}
.active {
    background-color: #92d774;
}
</style>