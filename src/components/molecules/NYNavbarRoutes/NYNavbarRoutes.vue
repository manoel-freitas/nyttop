<template>
  <ul :class="listClass">
    <ny-navbar-item
      v-for="(route, index) in routes"
      :key="index"
      :item-class="listItemClass"
      :to="route.to"
      :label="route.label"
    ></ny-navbar-item>
  </ul>
</template>

<script>
export default {
  props: {
    listClass: {
      type: String,
      required: true
    },
    listItemClass: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      routes: [
        {
          to: {
            path: '/'
          },
          label: 'Home'
        },
        {
          to: {
            path: '/section/sci-tech'
          },
          label: 'Science and Tech'
        },
        {
          to: {
            path: '/section/health'
          },
          label: 'Health'
        },
        {
          to: {
            path: '/section/politics'
          },
          label: 'Politics'
        },
        {
          to: {
            path: '/section/world'
          },
          label: 'World'
        }
      ]
    }
  }
}
</script>
