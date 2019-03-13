<template>
  <button class="button is-white" @click="$emit('click')">
    <font-awesome-icon :icon="icon" v-bind="$attrs"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
