import dayjs from 'dayjs'
import { at } from 'lodash'
export default (articles, imagePath, imagePathCaption) => {
  if (!imagePathCaption) {
    imagePathCaption = imagePath
  }
  return articles
    .sort(function(art1, art2) {
      return dayjs(art1.published_date).diff(art2.published_date)
        ? -1
        : dayjs(art2.published_date).diff(art1.published_date)
        ? 1
        : 0
    })
    .map(article => {
      const today = new Date()
      const publishedDate = dayjs(article.published_date)
      const differenceDates = publishedDate.diff(today, 'day')
      let publishedDateLabel =
        differenceDates < -1 ? `${differenceDates * -1} days ago` : 'yesterday'
      publishedDateLabel = differenceDates === 0 ? `today` : publishedDateLabel
      const imagePaths = at(article, [
        `${imagePath}.url`,
        `${imagePath}.width`,
        `${imagePath}.height`,
        `${imagePathCaption}.caption`
      ])
      Object.assign(article, {
        published_date: publishedDateLabel,
        image: {
          url: imagePaths[0],
          width: imagePaths[1],
          height: imagePaths[2],
          caption: imagePaths[3]
        }
      })
      return article
    })
}
