/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o contato e salvar', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('editei')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('editei@editei.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11 40028922')
        cy.get('.alterar').click()
    
    })
})