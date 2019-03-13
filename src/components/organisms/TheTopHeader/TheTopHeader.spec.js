/// <reference types="jest" />

import { shallowMount } from '@vue/test-utils'
import TheTopHeader from './TheTopHeader'

let theTopHeader = shallowMount(TheTopHeader, {
  stubs: ['ny-level', 'ny-level-item', 'ny-icon']
})
describe('TheTopHeader Component', () => {
  test('TheTopHeader has to be mounted', () => {
    expect(theTopHeader.isVueInstance()).toBeTruthy()
  })

  test('snapshot test', () => {
    expect(theTopHeader.element).toMatchSnapshot()
  })

  test('should extraClasses to be `is-mobile`', () => {
    const $mq = 'mobile'
    theTopHeader = shallowMount(TheTopHeader, {
      stubs: ['ny-level', 'ny-level-item', 'ny-icon'],
      mocks: {
        $mq
      }
    })
    expect(theTopHeader.vm.extraClasses).toBe('is-mobile')
  })

  test('should extraClasses to be empty', () => {
    const $mq = 'desktop'
    theTopHeader = shallowMount(TheTopHeader, {
      stubs: ['ny-level', 'ny-level-item', 'ny-icon'],
      mocks: {
        $mq
      }
    })
    expect(theTopHeader.vm.extraClasses).toBe('')
  })
})
