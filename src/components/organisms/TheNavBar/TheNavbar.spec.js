/// <reference types="jest" />

import { shallowMount } from '@vue/test-utils'
import TheNavBar from './TheNavBar'

const theNavBar = shallowMount(TheNavBar, {
  stubs: ['ny-navbar-item']
})

test('TheNavBar has to be mounted', () => {
  expect(theNavBar.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(theNavBar.element).toMatchSnapshot()
})
