describe('Formulário de Consultoria', ()=>{

    it('Deve solicitar consultoria individual', ()=>{
        cy.start()
        cy.submitLogin('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')

        cy.get('input[placeholder="Digite seu email"]').type('teste@webdojo.com')
            
        cy.get('#phone').type('18999999999').should('have.value', '(18) 99999-9999')   
       
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')
       
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')  
            
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')   
        
        cy.contains('label', 'CPF')
            .parent().find('input')
            .type('310.207.860-51') 
            .should('have.value', '310.207.860-51')   
    })
})