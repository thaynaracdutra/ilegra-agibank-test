Cypress.Commands.add('accessAgibankBlog', () => {
  cy.visit('/')
  cy.intercept('POST', '**/collect').as('postCollect')
  /* eslint-disable */
  cy.wait(20000)
  cy.wait('@postCollect')
  /* eslint-enable */
})

Cypress.Commands.add('searchText', (text) => {
  cy.get('div[class="ast-search-icon"]').click()
  cy.get('#search-field').type(text + '{enter}')
})
