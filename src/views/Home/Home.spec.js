/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import Home from './Home'

// eslint-disable-next-line no-unused-vars
const mockFunction = day =>
  Promise.resolve({
    data: {
      results: [
        {
          created_date: new Date(),
          image: {}
        },
        {
          created_date: new Date(),
          image: {}
        },
        {
          created_date: new Date(),
          image: {}
        }
      ]
    }
  })

const mocks = {
  $services: {
    getMostPopularViewed: mockFunction,
    getMostPopularShared: mockFunction
  },
  fillArticles: () => {}
}
let home = null

describe('Home', () => {
  beforeEach(() => {
    home = mount(Home, { mocks })
  })
  test('Home has to be mounted', () => {
    expect(home.isVueInstance()).toBeTruthy()
  })

  test('Should mostPopular not to be empty', () => {
    expect(home.vm.mosPopular).not.toBe([])
  })
})
