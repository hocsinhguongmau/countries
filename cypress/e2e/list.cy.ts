beforeEach(() => {
  cy.visit('http://127.0.0.1:5173/')
})

describe('Layout', () => {
  it('Logo is shown', () => {
    cy.get('[data-cy="logo"]').should('be.visible')
  })

  it('Search input is shown', () => {
    cy.get('[data-cy="search-input"]')
      .should('be.visible')
      .should('have.value', '')
  })

  it('Sorting is shown', () => {
    cy.get('[data-cy="sorting"]')
      .should('be.visible')
      .should('have.value', 'name_asc')
  })

  it('Select number of items is shown', () => {
    cy.get('[data-cy="number-of-items"]')
      .should('be.visible')
      .should('have.value', 5)
  })

  it('List of countries is shown', () => {
    cy.get('[data-cy="list-countries"]').should('be.visible')
  })

  it('List of countries should have 5 items', () => {
    cy.get('[data-cy="list-item"]').should('have.length', 5)
  })

  it('Pagination is shown', () => {
    cy.get('[data-cy="pagination"]').should('be.visible')
  })

  it('Search should work properly', () => {
    cy.get('[data-cy="search-input"]').type('chi')
    cy.get('[data-cy="list-item"]').should('have.length', 3)
    cy.get('[data-cy="list-item"]')
      .should('contain', 'Chile')
      .should('contain', 'China')
      .should('contain', 'Czechia')
  })

  it('Default sorting should be name ascending', () => {
    cy.get('[data-cy="list-item"]').first().should('contain', 'Afghanistan')
  })

  it('Sorting should work properly', () => {
    cy.get('[data-cy="sorting"]').select('name_desc')
    cy.get('[data-cy="list-item"]').first().should('contain', 'Åland Islands')

    cy.get('[data-cy="sorting"]').select('population_asc')
    cy.get('[data-cy="list-item"]').first().should('contain', 'Bouvet Island')

    cy.get('[data-cy="sorting"]').select('population_desc')
    cy.get('[data-cy="list-item"]').first().should('contain', 'China')
  })

  it('Select number of items display should work properly', () => {
    cy.get('[data-cy="number-of-items"]').select('10')
    cy.get('[data-cy="list-item"]').should('have.length', 10)
    cy.get('[data-cy="number-of-items"]').select('15')
    cy.get('[data-cy="list-item"]').should('have.length', 15)
  })

  it('Pagination should work properly', () => {
    cy.get('[data-cy="pagination"]').contains('2').click()
    cy.get('[data-cy="list-item"]').first().should('contain', 'Angola')
  })

  it('Redirect to detail page', () => {
    cy.get('[data-cy="list-item"]').first().click()
    cy.url().should('contain', 'country/Afghanistan')
  })
})

export {}
