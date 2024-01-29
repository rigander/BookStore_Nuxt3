<script setup>
const modalStore = useModalStore();

</script>


<template>
    <div
        @click.stop="modalStore.hideModal()"
        class="dialog"
        v-if="modalStore.show">
        <div
            @click.stop
            class="dialog__content">
            <div class="white-rabbit__container"><img
                class="white-rabbit"
                src="/img/Chromatic-Floral-Rabbit.svg" alt="white-rabbit"></div>
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>