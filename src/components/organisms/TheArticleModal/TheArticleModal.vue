<template>
  <NYModalCard
    :activate="true"
    :header-title="article.title"
    @onClose="$emit('onCloseArticle')"
  >
    <NYArticle
      :article="article"
      :image="article.image"
      @onChooseArticle="readArticle"
    />
  </NYModalCard>
</template>

<script>
import NYModalCard from 'molecules/NYModalCard'
import NYArticle from 'molecules/NYArticle'
export default {
  components: {
    NYModalCard,
    NYArticle
  },
  props: {
    article: {
      type: Object,
      require: true,
      default: () => ({})
    }
  },
  methods: {
    readArticle() {
      window.location.href = this.article.url
    }
  }
}
</script>

<style></style>
