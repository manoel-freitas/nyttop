export default {
  data() {
    return {
      choosedArticle: null,
      openArticleModal: false,
      componentModal: null
    }
  },
  methods: {
    openModal($event) {
      this.openArticleModal = true
      this.componentModal = 'TheArticleModal'
      this.choosedArticle = $event
    },
    closeModal() {
      this.componentModal = null
      this.openArticleModal = false
      this.choosedArticle = null
    }
  }
}
