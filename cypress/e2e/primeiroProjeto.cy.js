describe('Registrar usuário', () => { //nome da suite de teste
  it('Realizar processo de login', () => { //nome do cenário de teste
    cy.acessarSiteTeste()

    cy.clicarBotaoLogin()

    //cy.preencherFormularioNovoUsuarioComArgumento("Felix Fidelix", "felix_fidelix1@ttes.com")

    cy.preencherFormularioNovoUsuarioJson()

    cy.acessarFormulario()

    //cy.preencherFormularioComArgumento("1234", "Felix", "Fidelix", "Happiness", "Rua dos bobos", "Dunkey Street", "Ontario", "Ottawa", "J0X 2G0", "+1 613 8762348")

    cy.preencherFormularioComArgumentoJson()

    cy.acessarTelaUsuarioCriadoComSucesso()

    cy.verificarUsuarioLogado()

    cy.deletarUsuario()
  })
})