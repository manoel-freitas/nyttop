/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import Article from './Article'

let mocks = {}
let article = null

describe('Article', () => {
  beforeEach(() => {
    mocks = {
      $route: {
        params: {
          name: 'world'
        }
      },
      $services: {
        // eslint-disable-next-line no-unused-vars
        getTopStories: routeName => {
          return Promise.resolve({
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
        }
      }
    }
    article = mount(Article, { mocks })
  })

  test('Article has to be mounted', () => {
    expect(article.isVueInstance()).toBeTruthy()
  })

  test('Should articles not to be empty', () => {
    expect(article.vm.articles).not.toBe([])
  })

  test('Should articles not to be empty', () => {
    mocks.$route.params.name = 'test'
    expect(article.vm.articles).toEqual([])
  })
})

test('Should $services.getTopStories to be called', () => {
  const serviceSpy = jest.spyOn(mocks.$services, 'getTopStories')
  article = mount(Article, { mocks })
  expect(serviceSpy).toBeCalled()
})
