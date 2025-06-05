describe('login', ()=>{
  it('Deve logar com sucesso', ()=>{
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana123')
    
    cy.get('[data-cy="user-name"]')
      .should('have.text', 'Fernando Papito')
      .and('be.visible')

    cy.get('[data-cy="welcome-message"]')
      .should('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
      .and('be.visible')
  })

  it('Não deve logar com senha inválida', ()=>{
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana465')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
      
  })

  it('Não deve logar com email inválido', ()=>{
    cy.start()
    cy.submitLogin('papito@teste.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
      
  })
})