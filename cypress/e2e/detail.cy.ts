beforeEach(() => {
  cy.visit('http://127.0.0.1:5173/country/Afghanistan')
})

describe('Layout', () => {
  it('Logo is shown', () => {
    cy.get('[data-cy="logo"]').should('be.visible')
  })

  it('Information is shown', () => {
    cy.get('[data-cy="title"]')
      .should('be.visible')
      .should('contain', 'Afghanistan')
    cy.get('[data-cy="capital"]')
      .should('be.visible')
      .should('contain', 'Kabul')
    cy.get('[data-cy="flag"]').should('be.visible')
    cy.get('[data-cy="area"]').should('be.visible').should('contain', '652230')
    cy.get('[data-cy="population"]')
      .should('be.visible')
      .should('contain', '40218234')
    cy.get('[data-cy="languages"]')
      .should('be.visible')
      .should('contain', 'Dari')
      .should('contain', 'Pashto')
      .should('contain', 'Turkmen')
    cy.get('[data-cy="geography"]')
      .should('be.visible')
      .should('contain', 'Asia')
      .should('contain', 'Southern Asia')
    cy.get('[data-cy="map"]').should('be.visible')
  })
})

export {}
