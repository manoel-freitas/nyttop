/// <reference types="jest" />

import { shallowMount } from '@vue/test-utils'
import NYNavbarRoutes from './NYNavbarRoutes.vue'

const nyNavbarRoutes = shallowMount(NYNavbarRoutes, {
  props: {
    listClass: 'levelbar',
    listItemClass: 'levelbar-item'
  },
  stubs: ['ny-navbar-item']
})
test('NYNavbarRoutes has to be mounted', () => {
  expect(nyNavbarRoutes.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(nyNavbarRoutes.element).toMatchSnapshot()
})
