<template>
  <div>
    <TheArticleList
      :articles="articles"
      :title="dictTitle"
      :box-title="`Older Notices of ${dictTitle}`"
      @on-close-article="closeModal"
      @on-choose-article="openModal"
    />
    <TheArticleModal
      v-if="openArticleModal"
      :article="choosedArticle"
      @onCloseArticle="$('oncloseArticle')"
    />
  </div>
</template>

<script>
import { chunk, capitalize, take, takeRight } from 'lodash'
import filterArticles from 'helpers/formatArticles'
import dictRoute from 'helpers/translateRouteName'
import TheArticleList from 'organisms/TheArticlesList'
import TheArticleModal from 'organisms/TheArticleModal'
import ArticlesMixin from '../../mixins/articles.mixin.js'

const chunkArticle = (articles, paramName) =>
  chunk(
    filterArticles(
      articles.filter(
        result =>
          result.section === capitalize(paramName) ||
          result.subsection === capitalize(paramName)
      ),
      'multimedia[4]'
    ),
    4
  )
export default {
  components: {
    TheArticleList,
    TheArticleModal
  },
  mixins: [ArticlesMixin],
  data() {
    return {
      articles: [],
      dictTitle: dictRoute(this.$route.params.name)
    }
  },
  computed: {
    headLines() {
      return take(this.articles, 3)
    },
    normalArticles() {
      return takeRight(this.articles, this.articles.length - 3)
    }
  },
  beforeMount() {
    const nameRoute = this.$route.params.name
    this.fillArticles(nameRoute)
  },
  methods: {
    fillArticles(nameRoute) {
      if (nameRoute === 'sci-tech') {
        Promise.all([
          this.$services.getTopStories('science'),
          this.$services.getTopStories('technology')
        ]).then(responses => {
          this.articles = chunkArticle(responses[0].data.results, 'science')
          this.articles.push(
            ...chunkArticle(responses[1].data.results, 'technology')
          )
        })
        return
      }
      this.$services.getTopStories(nameRoute).then(({ data }) => {
        this.articles = chunkArticle(data.results, nameRoute)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.columns-box {
  border: {
    top: 1px solid #cccccc;
    bottom: 1px solid #000;
  }
}
.borderRight {
  border-right: 1px solid #ccc;
}
</style>
