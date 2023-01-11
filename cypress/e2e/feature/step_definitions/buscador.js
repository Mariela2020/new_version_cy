/// <reference types="cypress" />
import {When, And, Then} from "cypress-cucumber-preprocessor/steps"

//-------------- Comprar desktop - mobile


When("El usuario hace click en el menú Comprar", () =>{
   
   cy.get(':nth-child(2) > #contDropdownUser > #btnMenuUser').click()  
   cy.get(':nth-child(2) > #contDropdownUser > #menuUser > :nth-child(2)').click()
})

When("El usuario hace click en el menú Comprar_mb", () =>{
   
  cy.get(':nth-child(2) > #contDropdownUser > #btnMenuUser').click()  
  //cy.get(':nth-child(2) > #contDropdownUser > #menuUser > :nth-child(2)').click()
})

And("Ingresa una comuna o region de interes", (datatable) =>{

    datatable.hashes().forEach((element) => {
       // cy.get('.form-control').type(element.region+'{downarrow}', {delay:200})
        cy.get('.form-control').type(element.region, {delay:200})
        cy.get('.SearchResultRow_searchResultRow__baviN').should('be.visible').first().click()
    })
   
    cy.get('#hp-btn-buscar-normal').click()
    // cy.get('.Buscador_btnBuscar__Dq138', {timeout:5000}).click()  
   
})

And("El sistema muestra las propiedades en Venta", ()=>{
 
    cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .region', {timeout:15000}).should('be.visible')
    cy.wait(5000)
   
})

And("El sistema muestra las propiedades en Venta_st", ()=>{
 
    cy.get(':nth-child(2) > .lnk-info > .c-infores > .info-body > .region', {timeout:15000}).should('be.visible')
    cy.wait(5000)
   
})

And("Filtro tipo de vivienda - Nueva", ()=> {
    
    cy.get('#dropEstado > .btn').click()
    cy.get('#dropEstado > .dropdown-menu > .p-3 > .btns-op > :nth-child(2) > .bt').click()
    cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .tipo > strong', {timeout:5000}).should('be.visible').and('contain','Nuevo en venta')

})

Then("Selecciona la primera propiedad en Venta", ()=>{
 
  //cy.xpath('//*[@id="sva-i-li-card-propiedades"]/a').should('be.visible').invoke('removeAttr', 'target').first().click()
   
  const opt = cy.xpath('//*[@id="sva-i-li-card-propiedades"]/a').first()
  opt.each($a => {
    let newUrl = $a.attr("href")

    cy.visit(newUrl, {

      onBeforeLoad(win) {
        cy.stub(win, 'open').as('open')
      }
    })
   
  })
})

     



//----------------- Arrendar

When("El usuario hace click en el menu Arrendar", () =>{
    
    cy.get(':nth-child(1) > #contDropdownUser > #btnMenuUser', {timeout:3000}).click()
    cy.get(':nth-child(1) > #contDropdownUser > #menuUser > :nth-child(2)', {timeout:3000}).click()
    cy.get(':nth-child(2) > #contDropdownUser > #btnMenuUser', {timeout:3000}).click()
    cy.get(':nth-child(2) > #contDropdownUser > #menuUser > :nth-child(2)', {timeout:3000}).click()
    
})

When("El usuario hace click en el menu Arrendar mobile", () =>{
    
    cy.get(':nth-child(1) > #contDropdownUser > #btnMenuUser').click()
    cy.get(':nth-child(1) > #contDropdownUser > #menuUser > :nth-child(2)').click()
    cy.get(':nth-child(2) > #contDropdownUser > #btnMenuUser').click()
    //cy.get(':nth-child(2) > #contDropdownUser > #menuUser > :nth-child(2)', {timeout:3000}).click()
    
    
})

And("Ingresa una comuna de interes", (datatable) =>{

    datatable.hashes().forEach((element) => {
       // cy.get('.form-control').type(element.comuna, {delay:200}, '{downArrow},{enter}')
        cy.get('.form-control').type(element.comuna, {delay:200})
        cy.get('.SearchResultRow_searchResultRow__baviN').should('be.visible').first().click()
    })
  //  cy.get('.Buscador_btnBuscar__Dq138', {timeout:5000}).click() 
  cy.get('#hp-btn-buscar-normal', {timeout:5000}).click()
})

And("El sistema muestra las propiedades en Arriendo", ()=>{

//  cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .region', {timeout:15000}).should('be.visible').and('contain','Las Condes')
  cy.xpath('//*[@id="sva-i-li-card-propiedades"]/a/div[1]/div[1]/h4', {timeout:15000}).eq(0).should('be.visible').and('contain','Las Condes')

})


Then("Selecciona la primera propiedad en Arriendo", ()=>{
 
  //cy.get('.lnk-info', {timeout:10000}).invoke('removeAttr', 'target', '_blank').first().click({force:true})

  const opt = cy.xpath('//*[@id="sva-i-li-card-propiedades"]/a').first()
  opt.each($a => {
    let newUrl = $a.attr("href")

    cy.visit(newUrl, {

      onBeforeLoad(win) {
        cy.stub(win, 'open').as('open')
      }
    })
   
  })
})



//--------------- Arrendar Mobile

And("Ingresa una comuna de interes en mobile", (datatable) =>{

    datatable.hashes().forEach((element) => {
        cy.get('#boxBuscador > .form-control').type(element.comuna)
    })
    cy.get(':nth-child(2) > .form-row > .col-sm-3 > #btnBusca').click() 
    cy.wait(5000)
})


And("El sistema muestra las propiedades en Arriendo en mobile", ()=>{
 
    cy.wait(5000)
    cy.get('.mapboxgl-canvas', {timeout:20000}).should('be.visible')
    cy.get('.btn-group > :nth-child(1)', {timeout:20000}).should('be.visible').click()
})


//---------------- Buscar por código

And("El usuario hace click en el Link Buscar por codigo", ()=>{

    cy.get('.Buscador_buscarCodigo__bvh5n').click()
})

And("Ingresa el codigo de la propiedad", (datatable) =>{

    datatable.hashes().forEach((element) => {
        cy.get('.form-control').type(element.codigo)
    })
    //cy.get('.Buscador_btnBuscar__Dq138').should('be.visible')
    cy.get('#hp-btn-buscar-codigo').click()

})

And("El sistema muestra la ficha propiedad", ()=> {

    cy.url().should('include', 'toctoc.com/propiedades/', {timeout:10000})
   // cy.get('.dir', {timeout:10000}).should('be.visible')
   // cy.get('.tt-ficha', {timeout:10000}).should('be.visible')
})

//---------- Login-cotizar 

When("Inicia sesion con credenciales valida", () =>{

    //cy.get('#onesignal-slidedown-cancel-button', {timeout:15000}).click()
    cy.get('#btnLogin').click()
    cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('toctocqa12@gmail.com', {sensitive: true})
    cy.get('[id="IngresoUsuario.Contrasena"]').type('pruebaqa',{sensitive: true})
    cy.get(':nth-child(5) > .btn').click()
    cy.wait(2000)
    cy.get('.nom-user').should('be.visible').and('contain','PruebaQA') 
})
    
//------------------------ cotizar - entorno

Then("El usuario cotiza una planta de interes", ()=> {

    cy.get('.btn-cotiza-nuevo').click()
    cy.get('.cotiz-precio-ref > strong').should('be.visible')
    //cy.get('.col-sm-3 > .btn').click()

  // cy.get('.btn-cotiza-nuevo')

  // cy.get(':nth-child(2) > :nth-child(3) > .btn-cotiza-nuevo').click({force:true})


   //cy.get('.cf-cta > .btn').click()
   // cy.get('.c-btns > .btn-success').click()
   
   // cy.get('.modal-header').should('be.visible')
})

And('Verifica Informacion del Entorno', ()=>{

    cy.document().then(function(document) {
      const item1 = document.querySelectorAll('#partialInfoEntorno')[0]
      //cy.log(item1) // <div#partialInfoEntorno>
    
      if(item1.style.display == 'none')
        {
          //cy.log("no existe")  
          cy.get('.cod').then(function($idelem){    
          var idproyecto= $idelem.text()
          cy.log(idproyecto) 
  
          cy.request({
              url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_entorno/rows', 
              method: 'POST',
              headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f', 
                  'content-type': 'application/json'
                       },
              body : {
                  'rows': [
                      {
                        'cells': [
                          {'column': 'c-0txMVmaCdR', 'value': day},
                          {'column': 'c-xDDgo3KfFr', 'value': idproyecto},
                                                                             
                        ]
                      }
                  ] 
              }
                            
          }).then((response) => {
              expect(response.status).to.eq(202)
          })
             
        })    
              
      }
    })
          
  })
