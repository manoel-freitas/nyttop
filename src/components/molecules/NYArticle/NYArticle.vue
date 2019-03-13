<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <figure class="image" @click="$emit('onChooseArticle')">
          <img
            :src="image.url"
            :alt="image.caption"
            :width="image.width"
            :height="image.height"
          />
        </figure>
        <p>
          <strong style="max-width: 50px" @click="$emit('onChooseArticle')">
            {{ article.title }}
          </strong>
          <br />
          <small class="has-text-grey is-size-7">
            {{ article.published_date }}
            {{ article.byline }}
          </small>
          <br />
          <span class="is-size-6">{{ article.abstract }}</span>
        </p>
        <p v-if="article.kicker">
          <span class="is-size-6">{{ article.kicker }}</span>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    image: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.content figure:not(:last-child) {
  margin-bottom: 0;
}
</style>
