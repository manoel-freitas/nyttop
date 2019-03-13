/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import TheSideMenu from './TheSideMenu'

const theSideMenu = mount(TheSideMenu)

test('TheSideMenu has to be mounted', () => {
  expect(theSideMenu.isVueInstance()).toBeTruthy()
})

test('snapshot test', () => {
  expect(theSideMenu.element).toMatchSnapshot()
})
