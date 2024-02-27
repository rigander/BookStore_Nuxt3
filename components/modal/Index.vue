<script setup>
const modalStore = useModalStore();
const props = defineProps({
    modalKey: String
})
</script>


<template>
    <div
        v-if="modalStore.modalActive[modalKey]"
        @click="modalStore.toggleModal(modalKey)"
        class="dialog">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>

</style>
