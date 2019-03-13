<template>
  <ny-level :extra-classes="extraClasses">
    <ny-level-item v-if="$mq === 'laptop' || $mq === 'desktop'" side="left">
      <ny-level-item>
        <ny-icon icon="bars" @click="$emit('onOpenSideMenu')" />
      </ny-level-item>
    </ny-level-item>
    <ny-level-item v-if="$mq === 'mobile' || $mq === 'tablet'" side="left">
      <ny-level-item>
        <ny-icon icon="bars" @click="$emit('onOpenSideMenu')" />
      </ny-level-item>
    </ny-level-item>

    <ny-level-item v-if="$mq === 'laptop' || $mq === 'desktop'">
      <h1 class="is-size-3">The New York Top</h1>
    </ny-level-item>
    <ny-level-item v-if="$mq === 'mobile' || $mq === 'tablet'" side="right">
      <h1 class="is-size-3">NYTTOP</h1>
    </ny-level-item>
  </ny-level>
</template>

<script>
export default {
  computed: {
    extraClasses() {
      return (this.$mq === 'laptop') | (this.$mq === 'desktop')
        ? ''
        : 'is-mobile'
    }
  }
}
</script>

<style></style>
