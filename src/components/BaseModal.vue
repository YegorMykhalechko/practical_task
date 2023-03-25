<script setup>
//Stores
//Components
import BaseButton from '@/components/UI/BaseButton.vue'
</script>

<template>
  <div
    class="modal d-block"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    v-on:click.self="$emit('close')"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            <slot name="title"></slot>
          </h5>
          <BaseButton
            type="button"
            v-on:click="$emit('close')"
          >
            <img class="icon" src="../assets/icons/211652_close_icon.svg">
          </BaseButton>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  background-color: transparentize($dark, 0.5);
}
</style>
