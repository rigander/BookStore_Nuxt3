<script setup>
const { state, setSelectedCategory } = useCategoryStore();
const route = useRoute();
const { category } = inject('categories');
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
                         active: route.params.slug === item.slug
                    }"
                >
                    <NuxtLink
                        :to="`/category/${item.slug}`"
                        @click="setSelectedCategory(item.slug)"
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
</style>