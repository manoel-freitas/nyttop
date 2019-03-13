<template>
  <NYNavbarRoutes list-class="levelbar" list-item-class="levelbar-item" />
</template>

<script>
import NYNavbarRoutes from 'molecules/NYNavbarRoutes'
export default {
  components: { NYNavbarRoutes }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins.sass';
.levelbar {
  display: flex;
  align-items: center;
  padding: 5px 0 4px;
  justify-content: space-evenly;
  border: {
    top: 1px solid #ccc;
  }
  @include mobile {
    flex-direction: column;
    justify-content: space-around;
  }
  &-item {
    button {
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;
      display: inline-block;
      padding: 0;
      :hover {
        color: black;
      }
    }
  }
}
</style>
