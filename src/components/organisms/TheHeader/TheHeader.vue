<template>
  <header :class="headerClass" @keyup.esc="openSideMenu = false">
    <the-top-header
      @onOpenSideMenu="openSideMenu = !openSideMenu"
    ></the-top-header>
    <the-side-menu
      v-show="openSideMenu"
      :show="openSideMenu"
      @onClose="openSideMenu = false"
    ></the-side-menu>
    <the-nav-bar v-if="($mq === 'laptop') | ($mq === 'desktop')" />
  </header>
</template>

<script>
import TheTopHeader from '../TheTopHeader'
import TheSideMenu from '../TheSideMenu'
import TheNavBar from '../TheNavBar'
export default {
  components: {
    TheTopHeader,
    TheSideMenu,
    TheNavBar
  },
  props: {
    headerClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      openSideMenu: false
    }
  }
}
</script>
