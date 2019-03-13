/// <reference types="jest" />

import { mount, createLocalVue } from '@vue/test-utils'
import NYModalCard from './NYModalCard'

test('NYModalCard has to be mounted', () => {
  const vue = createLocalVue()
  const nyModalCard = mount(NYModalCard, { vue })
  expect(nyModalCard.isVueInstance()).toBeTruthy()
})
