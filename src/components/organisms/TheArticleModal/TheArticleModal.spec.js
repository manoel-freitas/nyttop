/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import TheArticleModal from './TheArticleModal'

const requiredProps = {
  article: {
    image: {
      url: '',
      caption: '',
      width: '',
      heigth: ''
    }
  }
}

const theArticleModal = mount(TheArticleModal, {
  propsData: requiredProps
})
test('TheArticleModal has to be mounted', () => {
  expect(theArticleModal.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(theArticleModal.element).toMatchSnapshot()
})
