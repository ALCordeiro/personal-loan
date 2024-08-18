describe('SuccessPage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept('POST', '**/offers', { fixture: 'exampleOffers.json' }).as('getOffers')
    cy.contains('Loan Purpose').click()
    cy.contains('Debt Consolidation').click()
    cy.contains('Loan term (months)').click()
    cy.contains('12').click()
    cy.get('[data-cy="input-component"]').type(1500)
    cy.wait(1500)
    cy.intercept('POST', '**/submissions', { fixture: 'exampleSubmissions.json' }).as('getSubmissions')
    cy.intercept('GET', '**/loans*', { fixture: 'exampleLoans.json' }).as('getLoans')
    cy.contains('Submit Application').click()

  })

  it('should render Success Page correctly', () => {
    cy.contains('Thank you!').should('be.visible')
    cy.contains('You could be saving money on your existing loans').should('be.visible')
    cy.contains('HONDA CYPRESS').should('be.visible')
  })
})
