import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"




Given("El usuario esta en la página de Toctoc PROD", () => {

const key = "somoslosmejores"
cy.visit({
  url:"https://www.toctoc.com/", 
  headers: {
    originfrom: 'cypress',
    originkey: key,
    'User-Agent': 'jenkins'
  }
}) 
 // cy.visit("https://www.toctoc.com/");
cy.title().should('eq', 'TOCTOC – Departamentos y casas en arriendo y en venta')
//cy.title().should('eq', 'TOCTOC – Departamentos y casas en arriendo y en venta', {timeout:5000})

})

Given("El usuario esta en la página de Toctoc PROD mobile", () => {

cy.viewport('iphone-6+') 
const key = "somoslosmejores"
cy.visit({
  url:"https://www.toctoc.com/", 
  headers: {
    originfrom: 'cypress',
    originkey: key,
    'User-Agent': 'jenkins'
  }
}) 
 // cy.visit("https://www.toctoc.com/")
cy.title().should('eq', 'TOCTOC – Departamentos y casas en arriendo y en venta', {timeout:5000})

})

Given("El usuario esta en la página de Toctoc QA", () => {
 
const key = "somoslosmejores"
cy.visit({
  url:"https://www.qatoctoc.com/", 
  headers: {
    originfrom: 'cypress',
    originkey: key,
    'User-Agent': 'jenkins'
  }
}) 
  //cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
  
})

Given("El usuario esta en la página de Toctoc en mobile QA", () => {

  cy.viewport('iphone-6+') 
  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.qatoctoc.com/", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
   
})

Given("El usuario esta en Toctoc Staging", () => {

  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.staging-toctoc.com/", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
  cy.title().should('eq', 'TOCTOC – Departamentos y casas en arriendo y en venta', {timeout:5000})
 
})

Given("El usuario esta en Toctoc Staging mobile", () => {

  cy.viewport('iphone-6+') 
  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.staging-toctoc.com/", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
  cy.title().should('eq', 'TOCTOC – Departamentos y casas en arriendo y en venta') 

})

Given("El usuario esta en Toctoc Empresa Staging", () =>{

  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.staging-toctoc.com/empresas", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
  cy.title().should('eq', 'TOCTOC – Empresas')
})

Given("El usuario esta en Toctoc Empresa Staging mobile", () =>{

  cy.viewport('iphone-6+')
  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.staging-toctoc.com/empresas", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
  cy.title().should('eq', 'TOCTOC – Empresas')
})

Given("El usuario esta en Toctoc Empresa PROD", () =>{
  
  /*let options = {

    url:"https://www.toctoc.com/empresas", 
    headers: {
       originfrom: 'cypress',
       originkey: somoslosmejores,
       'User-Agent': 'jenkins'
    }
 }
 cy.visit(options) */
const key = "somoslosmejores"
cy.visit({
  url:"https://www.toctoc.com/empresas", 
  headers: {
    originfrom: 'cypress',
    originkey: key,
    'User-Agent': 'jenkins'
  }
}) 
 // cy.visit("https://www.toctoc.com/empresas")
 cy.title().should('eq', 'TOCTOC – Empresas')
 //cy.contains(`Access key: ${Key}`)
})

Given("El usuario esta en Toctoc Empresa PROD mobile", () =>{

cy.viewport('iphone-6+')
const key = "somoslosmejores"
cy.visit({
  url:"https://www.toctoc.com/empresas", 
  headers: {
    originfrom: 'cypress',
    originkey: key,
    'User-Agent': 'jenkins'
  }
}) 
// cy.visit("https://www.toctoc.com/empresas")
cy.title().should('eq', 'TOCTOC – Empresas')

})

Given("El usuario esta en Toctoc Empresa QA", () =>{

  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.qatoctoc.com/empresas", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
  cy.title().should('eq', 'TOCTOC – Empresas')
})

Given("El usuario esta en Toctoc Empresa QA mobile", () =>{

  cy.viewport('iphone-6+')
  const key = "somoslosmejores"
  cy.visit({
    url:"https://www.qatoctoc.com/empresas", 
    headers: {
      originfrom: 'cypress',
      originkey: key,
      'User-Agent': 'jenkins'
    }
  }) 
  cy.title().should('eq', 'TOCTOC – Empresas')
})

And("Cierra el mensaje de suscribete", () => {
 
  cy.get("#onesignal-slidedown-cancel-button", {timeout:15000}).click()      
       
})

And("Cierra el mensaje de suscribete_1", () => {

  cy.document().then(function(document) {
    const item1 = document.querySelectorAll('#normal-slidedown')[0]
    //cy.log(item1) // <div#partialInfoEntorno>
  
    if(item1.style.display == 'none')
      {
        cy.log('No existe')
      }
    else
      {
        cy.get("#onesignal-slidedown-cancel-button").click()  
      }
    }) 
  /*cy.get("#normal-slidedown").its('length').then(res=>{
    return new Cypress.Promise((resolve, reject)=>{
      if(res>0){  
        cy.get("#onesignal-slidedown-cancel-button").click()
        resolve()  
      } else {
        reject()
      }  
    })
  })*/

  //cy.get('#onesignal-slidedown-dialog', {timeout:15000}).then($mensaje =>{
   // if($mensaje.find("#onesignal-slidedown-cancel-button").length > 0){
     // cy.get('#onesignal-slidedown-cancel-button', {timeout:10000}).click()
   // }
  //})     
 /* cy.get('#onesignal-slidedown-container', {timeout:15000}).then($mensaje =>{
    if($mensaje.find("#onesignal-slidedown-cancel-button").length > 0){
      cy.get('#onesignal-slidedown-cancel-button').click()
    }
  })     */
       
})
  

And("Hace click en link Ingresar-Iniciar sesión", () => {

  cy.get('.MenuPrincipal_contenedorCabecera__iZcGZ > :nth-child(1) > svg').click()
  cy.get(':nth-child(2) > .MenuPrincipal_opcionPrincipal__9UTsD').click()

 
  // cy.get('#btnLogin').click()
 // cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
 // cy.intercept("${ssoGatewayUrl}/**").as('sso')

})

And("Hace click en botón Entrar", () => {

  cy.get('#btnLogin').click()
  cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
  cy.intercept("${ssoGatewayUrl}/**").as('sso')

})

/*When("Ingresa credenciales valida", (datatable) =>{
    
  datatable.hashes().forEach((element) => {
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type(element.email, {sensitive: true})
    cy.get('[id="IngresoUsuario.Contrasena"]').type(element.validopassword, {sensitive: true})
    })
    
  cy.get(':nth-child(5) > .btn', {timeout:5000}).click()
  //cy.wait(3000)
})*/

When("Ingresa credenciales valida", (datatable) =>{
  
  cy.url().should('include', 'https://sso', {timeout:10000})
  datatable.hashes().forEach((element) => {
    cy.get('#email').type(element.email, {sensitive: true})
    cy.get('#password').type(element.validopassword, {sensitive: true})
    })
    
  cy.get('.contenido > .row > .btn > span', {timeout:5000}).click()
  //cy.wait(3000)
})

Then("El sistema valida credenciales y da la bienvenida al usuario PROD", ()=>{

  cy.get('.nom-user', {timeout:10000}).should('be.visible').and('contain','PruebaQA') 

})

Then("El sistema valida credenciales y da la bienvenida al usuario QA", ()=>{

  cy.get('.nom-user', {timeout:10000}).should('be.visible').and('contain','PruebaQA') 

})

/*When("Ingresa credenciales invalida", (datatable) =>{
 
  datatable.hashes().forEach((element) => {
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type(element.email)
    cy.get('[id="IngresoUsuario.Contrasena"]').type(element.invalidopassword)
  })

  cy.get(':nth-child(5) > .btn', {timeout:5000}).click()  
  //cy.wait(3000)            
})*/

When("Ingresa credenciales invalida", (datatable) =>{
 
  datatable.hashes().forEach((element) => {
    cy.get('#email').type(element.email)
    cy.get('#password').type(element.invalidopassword)
  })

  cy.get('.contenido > .row > .btn > span', {timeout:5000}).click()  
  //cy.wait(3000)            
})

Then("El sistema muestra mensaje de error", (datatable)=>{
            
  datatable.hashes().forEach((element) => {
    cy.get('.alert', {timeout:20000}).contains(element.mensaje) 
  })

})

/*When("El usuario hace click en el Link", ()=>{

  cy.get('.link').click()
})*/ 

When("El usuario hace click en el Link", ()=>{

  cy.get('.mt-2 > .btn').click()
}) 

/*And("El sistema solicita correo registrado", (datatable)=>{
 
  datatable.hashes().forEach((element) => {
    cy.get('#email_forget_password').type(element.email) 
   // cy.get('#CorreoElectronico').type(element.email)
    cy.get('.btn').click()
  })

})*/
 

And("El sistema solicita correo registrado", (datatable)=>{
 
  datatable.hashes().forEach((element) => {
    cy.get('#email_forget_password').type(element.email) 
   // cy.get('#CorreoElectronico').type(element.email)
  // cy.get('.contenido > .justify-content-center > .btn').click()
   cy.get('.contenido > .justify-content-center > .btn > span').click({force:true})
  })

})

Then("Se envia un codigo al correo ingresado", ()=>{
    
  cy.get('.title-ingresa').should('be.visible')
  
})

And("Introduce el código de verificacion", ()=>{

  /// verifica la recepción del correo 
  cy.wait(5000) 
  Cypress.config('baseUrl', 'https://mailsac.com/api')
    
  cy.request({
    url: '/addresses/toctocqa@mailsac.com/message-count', 
    method: 'GET',
    headers: {
      'Mailsac-Key': Cypress.env('APIKEY')
    },  
  }).then((response) => {
    cy.log(response.statusCode)
    const bodytxt= response.body.count
    //cy.log(bodytxt)
    let mensaje = parseInt(bodytxt)
    cy.log(mensaje)
    if (mensaje === 0)
      {
        cy.log("No hay mensaje en el correo")
      }
    else
      {
        cy.request({
          url: '/addresses/toctocqa@mailsac.com/messages', 
          method: 'GET',
          headers: {
            'Mailsac-Key': Cypress.env('APIKEY')
          },  
        }).then((response) => {
          cy.log(response.statusCode)
          
          cy.writeFile('cypress/fixtures/email.json', response.body)
        
          cy.readFile('cypress/fixtures/email.json').then((email) =>{

            let id_email= email[0]._id
            cy.log(id_email)
            cy.request({
              url: `/text/toctocqa@mailsac.com/${id_email}`,
              method: 'GET',
              headers: {
                'Mailsac-Key': Cypress.env('APIKEY')
                },  
              }).then((response) => {
                cy.log(response.statusCode)
                //cy.log(response.body)
                const bodytxt= response.body
                //cy.log(bodytxt)
                const regEx = new RegExp('([0-9]{6})')
                const matches = regEx.exec(bodytxt)
                cy.log(matches[0])
                const codigo = matches[0]
                cy.log(codigo)
                cy.get('#code_forget_password').type(codigo)
                cy.get('#password_forget_password').type('pruebaqa')
                cy.get('#confirm_password_forget_password').type('pruebaqa')
                cy.get('.btn').click()
                cy.get('.alert', {timeout:10000}).contains('¡Tu contraseña ha sido actualizada con éxito!') 
              })
            
              // delete el email

              cy.request({
                url: `/addresses/toctocqa@mailsac.com/messages/${id_email}`, 
                method: 'DELETE',
                headers: {
                  'Mailsac-Key': Cypress.env('APIKEY')
                },  
              }).then((response) => {
                cy.log(response.statusCode)
                cy.log("Mensaje eliminado")
              })
            })
          })  
        }
      })  
  }) 
  





