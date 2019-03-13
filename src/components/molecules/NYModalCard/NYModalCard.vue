<template>
  <div class="modal" :class="{ 'is-active': activate }">
    <div class="modal-background" @click="$emit('onClose')"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <button
          class="delete is-pulled-right"
          aria-label="close"
          @click="$emit('onClose')"
        ></button>
        <slot />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
      required: false,
      default: ''
    },
    hasFooter: {
      type: Boolean,
      required: false,
      default: false
    },
    activate: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style></style>
