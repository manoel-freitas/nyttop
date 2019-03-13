/// <reference types="jest" />

import { shallowMount } from '@vue/test-utils'
import TheHeader from './TheHeader'

const theHeader = shallowMount(TheHeader, {
  stubs: ['ny-level', 'ny-level-item', 'ny-icon']
})

test('TheHeader has to be mounted', () => {
  expect(theHeader.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(theHeader.element).toMatchSnapshot()
})

test('should openSideMenu be false', () => {
  const theHeader = shallowMount(TheHeader, {
    stubs: ['ny-level', 'ny-level-item', 'ny-icon']
  })
  theHeader.setData({ openSideMenu: false })
  expect(theHeader.vm.openSideMenu).toBeFalsy()
})
