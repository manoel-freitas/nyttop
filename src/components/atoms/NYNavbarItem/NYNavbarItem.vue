<template>
  <router-link tag="li" :class="itemClass" :to="to">
    <button class="button is-white">{{ label }}</button>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    itemClass: {
      type: String,
      required: true
    }
  }
}
</script>
