<template>
  <div class="sidenav-container" @click="$emit('onClose')">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('onClose')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <NYNavbarRoutes
          list-class="sidenav-list"
          list-item-class="sidenav-list-item"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import NYNavbarRoutes from 'molecules/NYNavbarRoutes'
export default {
  name: 'TheSidenav',
  components: {
    NYNavbarRoutes
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: fit-content;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  -webkit-box-shadow: 3px 0px 3px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 3px 0px 3px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 0px 3px 0px rgba(0, 0, 0, 0.35);
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
.sidenav-list {
  display: flex;
  flex-direction: column;
  &-item {
    button {
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      &:hover {
        background-color: #fff;
      }
    }
  }
}
</style>
