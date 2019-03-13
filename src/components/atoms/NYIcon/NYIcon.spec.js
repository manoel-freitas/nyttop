/// <reference types="jest" />

import { shallowMount } from '@vue/test-utils'
import NYIcon from './NYIcon'
const nyIcon = shallowMount(NYIcon, {
  props: {
    icon: 'search'
  },
  stubs: ['font-awesome-icon']
})
test('NYIcon has to be mounted', () => {
  expect(nyIcon.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(nyIcon.element).toMatchSnapshot()
})
