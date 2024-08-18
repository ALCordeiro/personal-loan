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

  it('should Submit Button be disabled', () => {
    cy.contains('Thank you!').should('be.visible')
    cy.contains('You could be saving money on your existing loans').should('be.visible')
    cy.contains('HONDA CYPRESS').should('be.visible')
  })

  // it('should Submit Button not be disabled and should hit the API correctly', () => {
  //   cy.contains('Loan Purpose').click()
  //   cy.contains('Debt Consolidation').click()
  //   cy.contains('Loan term (months)').click()
  //   cy.contains('12').click()
  //   cy.get('[data-cy="input-component"]').type(1500)
  //   cy.wait(1000)
  //   cy.contains('Monthly Payment').should('be.visible')
  //   cy.contains('$128.41').should('be.visible')
  //   cy.contains('APR').should('be.visible')
  //   cy.contains('0.05%').should('be.visible')
  //   cy.contains('Submit Application').should('not.be.disabled')
  // })

  // it('should Submit Button be disabled and should show an error', () => {
  //   cy.contains('Loan Purpose').click()
  //   cy.contains('API Error').click()
  //   cy.contains('Loan term (months)').click()
  //   cy.contains('12').click()
  //   cy.get('[data-cy="input-component"]').type(1500)
  //   cy.wait(1000)
  //   cy.contains('An error occurred while fetching the offer. Please try again').should('be.visible')
  //   cy.contains('Submit Application').should('be.disabled')
  // })
})
