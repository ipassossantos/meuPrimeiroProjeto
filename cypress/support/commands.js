// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import './commands'
import '@shelex/cypress-allure-plugin'

const user = require('../fixtures/user.json')

Cypress.Commands.add('acessarSiteTeste', () => {
    cy.task("log", "Acessar site e verificando se está visível");
    try{
        cy.visit("/")
        cy.get("#slider-carousel").should("be.visible")
    } catch (error){
        cy.task("log", `Erro ao acessar site: ${error.message}`)
        throw error
    }
})

Cypress.Commands.add('clicarBotaoLogin', () => {
    cy.task("log", "Clicar no botão Login")
    cy.get('a[href="/login"]').click()
    cy.contains('h2', 'New User Signup!').should("be.visible")
})

Cypress.Commands.add('preencherFormularioNovoUsuarioComArgumento', (nome, email) => {
    cy.task("log", "Preencher novo usuario")
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('preencherFormularioNovoUsuarioJson', () => {
    cy.task("log", "Preencher novo usuario")
    cy.get('[data-qa="signup-name"]').type(user.name)
    cy.get('[data-qa="signup-email"]').type(user.email)
    cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('acessarFormulario', () => {
    cy.task("log", "Acessar formulário")
    cy.contains('h2', 'Enter Account Information').should("be.visible")
})

Cypress.Commands.add('preencherFormularioComArgumento', (senha, primeiroNome, sobrenome, empresa, endereco1, endereco2, estado, cidade, cep, telefone) => {
    cy.task("log", "Dados preenchidos e submetendo formulario")
    cy.get('#id_gender2').check()
    cy.get('[data-qa="password"]').type(senha)
    cy.task("log", "Preenchendo campo senha")
    cy.get('[data-qa="days"]').select('10').should('have.value', '10')
    cy.get('[data-qa="months"]').select('June').should('have.value', '6')
    cy.get('[data-qa="years"]').select('1986').should('have.value', '1986')
    cy.task("log", "Preenchendo campo data de nascimento")
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type(primeiroNome)
    cy.get('[data-qa="last_name"]').type(sobrenome)
    cy.get('[data-qa="company"]').type(empresa)
    cy.get('[data-qa="address"]').type(endereco1)
    cy.get('[data-qa="address2"]').type(endereco2)
    cy.get('[data-qa="country"]').select('Canada').should('have.value', 'Canada')
    cy.get('[data-qa="state"]').type(estado)
    cy.get('[data-qa="city"]').type(cidade)
    cy.get('[data-qa="zipcode"]').type(cep)
    cy.get('[data-qa="mobile_number"]').type(telefone)
    cy.get('[data-qa="create-account"]').click()
})

Cypress.Commands.add('preencherFormularioComArgumentoJson', () => {
    cy.task("log", "Dados preenchidos e submetendo formulario")
    cy.get('#id_gender2').check()
    cy.get('[data-qa="password"]').type(user.senha)
    cy.task("log", "Preenchendo campo senha")
    cy.get('[data-qa="days"]').select('10').should('have.value', '10')
    cy.get('[data-qa="months"]').select('June').should('have.value', '6')
    cy.get('[data-qa="years"]').select('1986').should('have.value', '1986')
    cy.task("log", "Preenchendo campo data de nascimento")
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type(user.primeiroNome)
    cy.get('[data-qa="last_name"]').type(user.sobrenome)
    cy.get('[data-qa="company"]').type(user.empresa)
    cy.get('[data-qa="address"]').type(user.endereco1)
    cy.get('[data-qa="address2"]').type(user.endereco2)
    cy.get('[data-qa="country"]').select('Canada').should('have.value', 'Canada')
    cy.get('[data-qa="state"]').type(user.estado)
    cy.get('[data-qa="city"]').type(user.cidade)
    cy.get('[data-qa="zipcode"]').type(user.cep)
    cy.get('[data-qa="mobile_number"]').type(user.telefone)
    cy.get('[data-qa="create-account"]').click()
})


Cypress.Commands.add('acessarTelaUsuarioCriadoComSucesso', () => {
    cy.task("log", "Usuario criado com sucesso")
    cy.contains('h2', 'Account Created!').should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
})

Cypress.Commands.add('verificarUsuarioLogado', () => {
    cy.task("log", "verificando usuário logado")
    cy.get('.navbar-nav').contains(' Logged in as ').should('be.visible')
})

Cypress.Commands.add('deletarUsuario', () => {
    cy.task("log", "Deletar usuário")
    cy.get('a[href="/delete_account"]').click()
    cy.contains('h2', 'Account Deleted!').should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
})