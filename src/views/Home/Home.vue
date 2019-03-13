<template>
  <div>
    <TheArticleList
      title="Most Popular"
      box-title="Older news"
      :articles="mostPopoular"
      @onChooseArticle="openModal"
    />
    <TheArticleModal
      v-if="openArticleModal"
      :article="choosedArticle"
      @onCloseArticle="closeModal"
    />
  </div>
</template>

<script>
import { differenceBy, take, takeRight } from 'lodash'
import filterArticles from 'helpers/formatArticles'
import TheArticleList from 'organisms/TheArticlesList'
import TheArticleModal from 'organisms/TheArticleModal'
import ArticlesMixin from '../../mixins/articles.mixin.js'
export default {
  components: {
    TheArticleList,
    TheArticleModal
  },
  mixins: [ArticlesMixin],
  data() {
    return {
      mostShared: [],
      mostViewed: []
    }
  },
  computed: {
    mostPopoular() {
      return this.mostShared.length > this.mostViewed.length
        ? [
            take(this.mostShared, Math.floor(this.mostShared.length / 2)),
            takeRight(this.mostShared, Math.floor(this.mostShared.length / 2)),
            take(this.mostViewed, Math.floor(this.mostViewed.length / 2)),
            takeRight(this.mostViewed, Math.floor(this.mostViewed.length / 2))
          ]
        : [
            take(this.mostViewed, Math.floor(this.mostViewed.length / 2)),
            takeRight(this.mostViewed, Math.floor(this.mostViewed.length / 2)),
            take(this.mostShared, Math.floor(this.mostShared.length / 2)),
            takeRight(this.mostShared, Math.floor(this.mostShared.length / 2))
          ]
    }
  },
  mounted() {
    this.fillArticles()
  },
  methods: {
    fillArticles() {
      Promise.all([
        this.$services.getMostPopularViewed(1),
        this.$services.getMostPopularShared(1)
      ]).then(responses => {
        const mediaPaths = [`media[0]['media-metadata'][1]`, `media[0]`]
        this.mostViewed = filterArticles(
          responses[0].data.results,
          ...mediaPaths
        )
        this.mostShared = filterArticles(
          responses[1].data.results,
          ...mediaPaths
        )
        this.arrangeArticles()
      })
    },
    arrangeArticles() {
      this.mostViewed = differenceBy(this.mostViewed, this.mostShared, 'title')
      this.mostShared = differenceBy(this.mostShared, this.mostViewed, 'title')
    }
  }
}
</script>
