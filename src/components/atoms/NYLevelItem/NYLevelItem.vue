<script>
export default {
  props: {
    side: {
      type: String,
      requried: false,
      default: ''
    }
  },
  computed: {
    levelSide() {
      switch (this.side) {
        case 'right':
          return 1
        case 'left':
          return -1

        default:
          return 0
      }
    }
  },
  render() {
    const levelItem = (
      <div class={{ 'level-item': true }}>{this.$slots.default}</div>
    )
    const levelSideLeft = <div class={{ 'level-left': true }}>{levelItem}</div>
    const levelSideRight = (
      <div class={{ 'level-right': true }}>{levelItem}</div>
    )
    switch (this.side) {
      case 'right':
        return levelSideRight
      case 'left':
        return levelSideLeft

      default:
        return levelItem
    }
  }
}
</script>

<style></style>
