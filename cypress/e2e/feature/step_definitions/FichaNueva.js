/// <reference types="cypress" />
import {When, And, Then} from "cypress-cucumber-preprocessor/steps"


Then("Selecciona la primera propiedad en Venta con ficha 3.0", ()=>{

    const opt = cy.xpath('//*[@id="sva-i-li-card-propiedades"]/a').first()
    opt.each($a => {
      let newUrl = $a.attr("href")
      newUrl = newUrl.replace(/\www/g,"ww2")
      cy.log(newUrl)
      
      cy.visit(newUrl, {
  
        onBeforeLoad(win) {
          cy.stub(win, 'open').as('open')
        }
      })     
    })
    
  })

And('Verifico informacion basica ficha3.0', ()=>{

    cy.get('.nom-proyecto', {timeout:15000}).should('be.visible')
    cy.get('.cod', {timeout:10000}).should('be.visible')
    cy.get('.precio-uf', {timeout:15000}).should('be.visible')
    cy.get('.dir > .d-flex > :nth-child(2)')
    cy.get('.c-img > a > img', {timeout:10000}).should('be.visible')
    cy.get(':nth-child(1) > .text-justify', {timeout:10000}).should('be.visible')

})

And('Selecciona una unidad para cotizar', ()=>{

    //cy.get('.cf-cotizar > .cf-cta > .btn').should('be.visible')
    cy.get('.tipos-plantas > .titulo', {timeout:10000}).scrollIntoView()
    cy.get('.slick-current > :nth-child(1) > .pl > .botonera-plantas > .cotizarBtn > .btn', {timeout:5000}).click()
    
})

And("Ingresa credenciales valida en la ficha", (datatable) =>{
    
    cy.get('.subtt', {timeout:10000}).should('be.visible')
    datatable.hashes().forEach((element) => {
      cy.get('[id="IngresoUsuario.email"]', {timeout:10000}).type(element.email, {sensitive: true})
      cy.get('[id="IngresoUsuario.Contrasena"]', {timeout:10000}).type(element.validopassword, {sensitive: true})
    })
      
    cy.get('.btn > span', {timeout:5000}).click()
    //cy.wait(3000)
})

And("Verifica el resumen de la cotizacion", ()=>{

    cy.get('.c-titulo > h4', {timeout:15000}).should('be.visible').and('contain','Cotización') 
})
    
      
  