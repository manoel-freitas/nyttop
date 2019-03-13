/// <reference types="jest" />

import { mount } from '@vue/test-utils'
import NYLevel from './NYLevel'

const nyLevel = mount(NYLevel, {
  context: {}
})
test('NYLevel has to be mounted', () => {
  expect(nyLevel.is(NYLevel)).toBe(true)
})

test('snapshot test', () => {
  expect(nyLevel.element).toMatchSnapshot()
})
