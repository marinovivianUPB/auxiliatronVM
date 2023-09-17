import React from 'react'
import Calculadora from './Calculadora'

describe('<Calculadora />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Calculadora />)
  })
})