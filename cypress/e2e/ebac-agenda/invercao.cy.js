/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o contato e salvar', () => {
        cy.get('input[type="text"]').type('Eduardo')
        cy.get('input[type="email"]').type('teste@teste.com.br')
        cy.get('input[type="tel"]').type('11 40028922')
        cy.get('.adicionar').click()
    })
})