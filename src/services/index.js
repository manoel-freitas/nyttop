import axios from 'axios'

const http = axios.create({
  baseURL: process.env.baseURL
})

http.interceptors.request.use(
  function(config) {
    config.params = {
      'api-key': process.env.apiKey
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default {
  getTopStories(story) {
    const url = `/topstories/v2/${story}.json`
    return http.get(url)
  },
  getMostPopularShared(days) {
    const url = `/mostpopular/v2/shared/${days}/twitter.json`
    return http.get(url)
  },
  getMostPopularViewed(days) {
    const url = `/mostpopular/v2/viewed/${days}.json`
    return http.get(url)
  },
  getMostPopularEmailed(days) {
    const url = `/mostpopular/v2/emailed/${days}.json`
    return http.get(url)
  }
}
