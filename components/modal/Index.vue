<script setup>
const modalStore = useModalStore();
</script>


<template>
    <div
        @click.stop="modalStore.showCart = false;
                     modalStore.showLogin = false;"
        class="dialog">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>

</style>
