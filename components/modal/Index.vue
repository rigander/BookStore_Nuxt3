<script setup>
const modalStore = useModalStore();
const props = defineProps({
    modalKey: String
})
</script>


<template>
    <dialog
        v-if="modalStore.modalActive[modalKey]"
        @click.stop="modalStore.toggleModal(modalKey)"
        class="dialog">
        <slot></slot>
    </dialog>
</template>


<style lang="scss" scoped>

</style>
