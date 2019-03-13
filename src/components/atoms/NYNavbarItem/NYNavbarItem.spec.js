/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import NYNavbarItem from './NYNavbarItem'

const nyNavbarItem = mount(NYNavbarItem, {
  propsData: {
    to: {
      name: 'sci-tec'
    },
    label: 'Ciencias e tecnologia',
    itemClass: 'levelbar-item'
  },
  stubs: ['router-link']
})
test('NYNavbarItem has to be mounted', () => {
  expect(nyNavbarItem.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(nyNavbarItem.element).toMatchSnapshot()
})
