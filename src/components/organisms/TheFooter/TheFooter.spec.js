/// <reference types="jest" />

import { mount, createLocalVue } from '@vue/test-utils'
import TheFooter from './TheFooter'

test('TheFooter has to be mounted', () => {
  const vue = createLocalVue()
  const theFooter = mount(TheFooter, { vue })
  expect(theFooter.isVueInstance()).toBeTruthy()
})
