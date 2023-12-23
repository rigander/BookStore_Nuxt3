<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:show'])
const hideDialog = () => {
    emit('update:show', false)
}

</script>


<template>
    <div
        @click.stop="hideDialog"
        class="dialog"
        v-if="show">
        <div
            @click.stop
            class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.dialog{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  z-index: 3;
  display: flex;
}
.dialog__content{
    margin: auto;
    background: white;
    border-radius: 10px;
    min-height: 500px;
    min-width: 350px;
}
</style>