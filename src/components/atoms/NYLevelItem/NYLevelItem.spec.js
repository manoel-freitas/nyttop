/// <reference types="jest" />

import { mount, shallowMount } from '@vue/test-utils'
import NYLevelItem from './NYLevelItem'

test('NYLevelItem has to be mounted', () => {
  const nyLevelItem = mount(NYLevelItem)
  expect(nyLevelItem.isVueInstance()).toBeTruthy()
})

test('snapshot test default comp', () => {
  const nyLevelItem = mount(NYLevelItem)
  expect(nyLevelItem.element).toMatchSnapshot()
})
test('snapshot test right side comp', () => {
  const nyLevelItem = shallowMount(NYLevelItem)
  nyLevelItem.setProps({ side: 'right' })
  expect(nyLevelItem.vm.levelSide).toBe(1)
})
test('snapshot test default side comp', () => {
  const nyLevelItem = shallowMount(NYLevelItem)
  expect(nyLevelItem.vm.levelSide).toBe(0)
})

test('snapshot test left side comp', () => {
  const nyLevelItem = shallowMount(NYLevelItem)
  nyLevelItem.setProps({ side: 'left' })
  expect(nyLevelItem.vm.levelSide).toBe(-1)
})
