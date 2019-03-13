<template>
  <div class="container">
    <component :is="layout" />
  </div>
</template>

<script>
const defaultLayout = 'base'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>

<style></style>
