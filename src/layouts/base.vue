<template>
  <div>
    <the-header></the-header>
    <main class="main-body">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from 'organisms/TheHeader'
import TheFooter from 'organisms/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
.main-body {
  padding: {
    top: 20px;
    bottom: 20px;
  }
}
.fixed-header {
  position: fixed;
  width: 85%;
  z-index: 999;
  background-color: white;
  .main-body {
    padding-top: 120px;
  }
}
</style>
