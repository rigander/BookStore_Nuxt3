<script setup>

const { category } = inject('categories');

</script>


<template>
    <div class="main-nav-wrapper">
        <nav class="main-nav">
            <ul>
                <li class="bottom-nav">
                    <NuxtLink  v-for="item in category.data.header"
                        href=""
                        :id="item.id"
                    >{{ item.name }}</NuxtLink></li>
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