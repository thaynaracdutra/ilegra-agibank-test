/// <reference types="cypress" />

const validContent = 'Saiba como sacar FGTS retido'
const invalidContent = '*'
const contentNotFoundMessage = 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras'

describe('Search bar tests', () => {
  beforeEach(() => {
    cy.accessAgibankBlog()
  })

  it('Verifies that the magnifying glass is successfully displayed on the home page', () => {
    cy.url().should('eq', 'https://blog.agibank.com.br/')
    
    cy.get('.ast-search-icon')
        .should('be.visible')
  })

  it('Verifies that the search bar successfully appears when clicking on the magnifying glass', () => {
    cy.get('.ast-search-icon').click()

    cy.get('#search-field')
        .should('be.visible')
  })

  it('Verifies that the search successfully returns at least one result', () => {
    cy.searchText(validContent)

    cy.get('.post-content')
        .contains(validContent)
        .should('be.visible')
  })

  it('Verifies that the search successfully displays "no results" when searching for special characters', () => {
    cy.searchText(invalidContent)
    cy.url().should('include', '/?s=*')

    cy.get('.page-content')
      .contains(contentNotFoundMessage)
      .should('be.visible')
  })
})
