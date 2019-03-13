/// <reference types="jest" />

import { mount, createLocalVue } from '@vue/test-utils'
import App from './App'

const stubs = ['base-layout', 'test-layout']
const mocks = layout => ({ $route: { meta: { layout } } })

test('App has to be mounted', () => {
  const vue = createLocalVue()
  const app = mount(App, {
    vue,
    stubs,
    mocks: mocks('base')
  })
  expect(app.isVueInstance()).toBeTruthy()
})

test('Layout has to be base', () => {
  const vue = createLocalVue()
  const app = mount(App, {
    vue,
    stubs,
    mocks: mocks('base')
  })

  expect(app.vm.layout).toBe('base-layout')
})

test('Layout has not to be base', () => {
  const vue = createLocalVue()
  const app = mount(App, {
    vue,
    stubs,
    mocks: mocks('test')
  })

  expect(app.vm.layout).not.toBe('base-layout')
})
