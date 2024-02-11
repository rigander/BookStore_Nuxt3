<script setup>
const modalStore = useModalStore();
const toggleModal = () => {
    modalStore.toggleModal();
}

</script>


<template>
    <div
        @click.stop="toggleModal"
        class="dialog"
        v-if="modalStore.show">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>

</style>