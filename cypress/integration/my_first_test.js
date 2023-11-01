/// <reference types="cypress" />


it('google test', function() {

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')

    cy.contains('Videos').click()  
})

it.only('login test', function(){

    cy.visit('https://abel.africa/')
    cy.get('nav button.flex.items-center').click()
    cy.visit('https://abel.africa/sign-in')
    cy.get('.shadow').type('graceama56@gmail.com')
    cy.get('.bg-abel-medium-blue').click()
    cy.get('.mb-6 > .shadow').type('AbelGrace')
    cy.get('.bg-abel-medium-blue').click()
  
})