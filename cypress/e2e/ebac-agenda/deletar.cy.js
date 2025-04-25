/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deletar o contato', () => {
        cy.get('.deletar')
    })
})