/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import NYArticle from './NYArticle'

const requiredProps = {
  article: {
    image: {
      url: '',
      caption: '',
      width: '',
      heigth: ''
    }
  },
  image: {
    url: '',
    caption: '',
    width: '',
    heigth: ''
  }
}
const nyArticle = mount(NYArticle, {
  propsData: requiredProps
})

test('NYArticle has to be mounted', () => {
  expect(nyArticle.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(nyArticle.element).toMatchSnapshot()
})
