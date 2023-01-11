Feature: Ficha Nueva

    Como usuario quiero visitar la ficha de un proyecto

      Scenario: Busca una Propiedad en Venta Mundo nuevo

        Given El usuario esta en la página de Toctoc PROD
          And Cierra el mensaje de suscribete
         When El usuario hace click en el menú Comprar
          And Ingresa una comuna o region de interes
              |region                  |
              |valpara                 |
          And El sistema muestra las propiedades en Venta
          And Filtro tipo de vivienda - Nueva
         Then Selecciona la primera propiedad en Venta con ficha 3.0
          And Verifico informacion basica ficha3.0
          And Selecciona una unidad para cotizar
          And Ingresa credenciales valida en la ficha
              |email                    | validopassword   |
              |toctocqa2@gmail.com      | pruebaqa         |
          And Verifica el resumen de la cotizacion