/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import TheArticleList from './TheArticleList'

const props = {
  articles: [{}, {}, {}, {}],
  title: `It's a test title`,
  subTitle: `It's a test subtitle`
}

test('TheArticleList has to be mounted', () => {
  const theArticleList = mount(TheArticleList, {
    propsData: props
  })
  expect(theArticleList.isVueInstance()).toBeTruthy()
})
