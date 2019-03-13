<template>
  <div
    :class="{
      'is-mobile': $mq === 'mobile' || $mq === 'tablet' || $mq === 'laptop'
    }"
  >
    <h1 class="is-size-3 has-text-weight-bold">{{ title }}</h1>
    <br />
    <div class="tile is-ancestor">
      <div
        class="tile is-vertical is-4 is-parent"
        style="border-right: 1px solid #ccc"
      >
        <div
          v-for="(article, index) in articles[0]"
          :key="article.created_at"
          class="tile is-child is-marginless is-bordered"
        >
          <NYArticle
            :article="article"
            :image="article.image"
            @onChooseArticle="$emit('onChooseArticle', article)"
          />
          <hr v-if="index + 1 < articles[0].length" />
        </div>
      </div>

      <div
        class="tile is-parent is-4 is-vertical"
        style="border-right: 1px solid #ccc"
      >
        <div
          v-for="(article, index) in articles[1]"
          :key="article.created_at"
          class="tile is-child is-marginless is-bordered"
        >
          <NYArticle
            :article="article"
            :image="article.image"
            @onChooseArticle="$emit('onChooseArticle', article)"
          />
          <hr v-if="index + 1 < articles[1].length" />
        </div>
      </div>
      <div class="tile is-parent is-vertical is-4">
        <div
          v-for="(article, index) in articles[2]"
          :key="article.created_at"
          class="tile is-child is-marginless is-bordered"
        >
          <NYArticle
            :article="article"
            :image="article.image"
            @onChooseArticle="$emit('onChooseArticle', article)"
          />
          <hr v-if="index + 1 < articles[2].length" />
        </div>
      </div>
    </div>
    <br />
    <h1 class="is-size-4 has-text-weight-bold">{{ boxTitle }}</h1>
    <br />
    <div v-if="$mq === 'desktop'" class="box is-mobile" style="display: flex">
      <div
        v-for="(article, index) in articles[3]"
        :key="article.created_at"
        class="column"
        :class="{ borderRight: index + 1 !== articles[3].length }"
      >
        <NYArticle
          :article="article"
          :image="article.image"
          @onChooseArticle="$emit('onChooseArticle', article)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NYArticle from 'molecules/NYArticle'
export default {
  components: {
    NYArticle
  },
  props: {
    articles: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    boxTitle: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tile {
  max-height: fit-content;
  min-height: 430px;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 1rem !important;
}
.borderRight {
  border-right: 1px solid #ccc;
}
.is-mobile {
  padding: {
    left: 16px;
    right: 16px;
  }
}
</style>
