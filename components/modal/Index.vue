<script setup>
const modalStore = useModalStore();

</script>


<template>
    <div
        @click.stop="modalStore.toggleModal()"
        class="dialog"
        v-if="modalStore.show">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>

</style>