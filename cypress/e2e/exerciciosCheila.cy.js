describe('Login', () => {
   
    beforeEach( () => {
        //Visitar a Pagina
        cy.visit('https://www.saucedemo.com/v1/index.html')
     
    })
    it ('Login valido', () => {
        //Preencher o campo username
        cy.get('input#user-name').type('standard_user')
        //Preencher o campo password
        cy.get("input[placeholder='Password']").type('secret_sauce')
        //Clicar no botao Login
        cy.get('input.btn_action').click()
    })
    it ('Login com username ivalido', () => {
        cy.get('input#user-name').type('cheila123')
        //Preencher o campo password
        cy.get("input[placeholder='Password']").type('secret_sauce')
        //Clicar no botao Login
        cy.get('input.btn_action').click()
    })
    it('Login com password ivalida', () => {
        cy.get('input#user-name').type('standard_user')
        //Preencher o campo password
        cy.get("input[placeholder='Password']").type('cheila123')
        //Clicar no botao Login
        cy.get('input.btn_action').click()
    })
    it('Login com username vazio', () => {
    cy.get('input#user-name').type(' ')
    //Preencher o campo password
    cy.get("input[placeholder='Password']").type('secret_sauce')
    //Clicar no botao Login
    cy.get('input.btn_action').click()
   })
   it('Login com password vazio', () =>{
    //Preencher o campo username
    cy.get('input#user-name').type('standard_user')
    //Preencher o campo password
    cy.get("input[placeholder='Password']").type(' ')
    //Clicar no botao Login
    cy.get('input.btn_action').click()
   })

})



   describe('Adicionando itens ao carrinho', () => {

   beforeEach( () => {
    //Visitar a Pagina
    cy.visit('https://www.saucedemo.com/v1/index.html')
     //Preencher o campo username
     cy.get('input#user-name').type('standard_user')
     //Preencher o campo password
     cy.get("input[placeholder='Password']").type('secret_sauce')
     //Clicar no botao Login
     cy.get('input.btn_action').click()
})
it('Adicionar um item ao carrinho',() =>{
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
    //Assertion botao REMOVE
    cy.get('.btn_secondary').should('contain','REMOVE')
})
   it('Remover um item do carrinho', () =>{
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    
})

})


describe('Checkout', () =>{
    it('Fluxo da compra do produto',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('input#user-name').type('standard_user')
        //Preencher o campo password
        cy.get("input[placeholder='Password']").type('secret_sauce')
        //Clicar no botao Login
        cy.get('input.btn_action').click()
        //Adicionar o item ao carrinho
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        //Entrar no carrinho
        cy.get('.shopping_cart_link').click()
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Cheila')
        cy.get('[data-test="lastName"]').type('de Paula')
        cy.get('[data-test="postalCode"]').type('4730-593')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
        //Assertion
        cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    })
    })

