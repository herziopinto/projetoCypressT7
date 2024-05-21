describe('Login', () => {

    beforeEach( () =>{
  // Visitar a página
cy.visit('https://www.saucedemo.com/v1/index.html')
}) 

it ('Login valido', () => {
    // Preencher o campo username 
    cy.get('input#user-name').type('standard_user')
    // Preencher o campo password
    cy.get("input[placeholder='Password']").type('secret_sauce')
    // Clicar no botão Login 
    cy.get('input.btn_action').click()
    // Assertion
    cy.get('.product_label').should('contain', 'Products')    
})

it ('Login com username invalida', () => {
    cy.get('input#user-name').type('standard_user2')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
})

it ('Login com password invalida', () => {
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']").type('secret_sauce2')
    cy.get('input.btn_action').click()
})

it ('Login com username vazio', () => {
    cy.get('input#user-name').type(' ')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
})

it ('Login com password vazio', () => {
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']").type(' ')
    cy.get('input.btn_action').click()
})
})

describe('Add To Car', () => {

beforeEach( () =>{
    // Visitar a página
    cy.visit('https://www.saucedemo.com/v1/index.html')
    // Preencher o campo username 
    cy.get('input#user-name').type('standard_user')
    // Preencher o campo password
    cy.get("input[placeholder='Password']").type('secret_sauce')
    // Clicar no botão Login 
    cy.get('input.btn_action').click()
})

it('Adicionar um iten ao carrinho', () => {
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click() 
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
    //Assertion
    cy.get('.btn_secondary').should('contain','REMOVE')
    cy.get('.fa-layers-counter').should('contain','1')

})                   
    it('Remover um iten do carrinho', () => {
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('ADD TO CART')
     //Assertion
    cy.get('.btn_primary').should('contain','ADD TO CART')
})
})

describe('Checkout', () => {

it('Fluxo de compra de um produto', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.btn_action').click()
    cy.get('input#first-name').type('Mércia')
    cy.get('input#last-name').type('Oliveira')
    cy.get('input#postal-code').type('4730-593')
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
    //Assertion
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    cy.get('.pony_express').should('be.visible','img/pony-express.png')
})
})

