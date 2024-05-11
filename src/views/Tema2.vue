<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 Roles y responsabilidades en la nube

    .container.amarillo.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-rigth")
        .col-lg-8
          .cajon.color-secundario.bg-9.p-4.mb-4
            p Cuando una organización adquiere servicios en la nube al pasar el tiempo se termina por asignar algunos roles entre los equipos de trabajo de las áreas de TI encargadas de realizar la gestión y la administración sobre los servicios adquiridos.
          h3 Roles y responsabilidades
          p La definición de roles y responsabilidades asociadas a la adquisición y uso de servicios en la nube tiene relación adicional directa con las competencias que las personas designadas deben disponer para un desarrollo eficaz de las actividades.
          .row.cajon-gris.justify-content-center.align-items-center(data-aos="fade-left").p-4
            .col-lg-2
              img(src='@/assets/curso/temas/tema1/img32.svg', alt='')
            .col-lg-9
              p.mb-4 Cuanto mayor y/o más compleja se vuelve una organización, un mayor nivel de formalización y documentación asociada a la descripción y designación de los roles y responsabilidades que intervienen en los procesos se pueden encontrar y que además habilitan a la organización para el desarrollo de las competencias, alcanzar mayores grados de coordinación y eficiencia o, la incorporación de nuevo personal y rotación de este a nivel interno.
        .col-lg-4
          img(src='@/assets/curso/temas/tema2/img01.svg', alt='')

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.justify-content-center.t1-1.mb-5(data-aos="fade-down")
        .col-lg-10      
          .bloque-texto-g.color-secundario.p-sm-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img02.png')})`}")
            .bloque-texto-g__texto.p-4
              p Por todos estos motivos, si la definición de los roles, responsabilidades y autoridad asociada al primer término son importantes en el funcionamiento interno de una organización lo son, aún más, en el caso de la externalización de servicios de soporte esenciales para la entrega de los productos y servicios a proveedores de nube.
              p Aunque el desarrollo de los servicios en nube es una forma novedosa de prestar los servicios TIC, diversos roles y responsabilidades por parte del proveedor se mantienen en relación a terminología ya utilizada en el entorno de los servicios de las nuevas tecnologías desde el inicio del presente siglo y, en muchas ocasiones, organizadas en relación a marcos de buenas prácticas como ITIL®, COBIT, entre otros posibles y según el tipo de servicio final prestado por el proveedor.
        .py-3
        p A continuación, se mencionarán algunos de los roles más importantes y sus respectivas actividades.

        Separador
        #t_2_1.titulo-segundo.color-acento-contenido
         h2 2.1 Roles asociados al cliente
         
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-4
              .col-lg-8
                p Un cliente de servicios en la nube mantiene una relación comercial con un proveedor de servicios para el uso de unos servicios específicos, adicionalmente, un cliente de servicios en la nube puede mantener una relación comercial con un socio de servicios en la nube para una variedad de propósitos.
                p Se Indica a continuación los cuatro sub-roles más habituales en el lado del cliente:
              .col-lg-3
                img(src='@/assets/curso/temas/tema2/img03.svg', alt='')
        .py-2
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Usuarios
        
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-8
            p Corresponde a una persona física o entidad que actúa en su nombre, pero asociado con un cliente del servicio en la nube, las actividades de computación en la nube del usuario del servicio incluyen, principalmente, el uso de los servicios en la nube contratado por el cliente a un proveedor de servicios en la nube para realizar algunas tareas que generalmente implica:
            ul.lista-ul--color
              li 
                i.fas.fa-chevron-right
                | La provisión de credenciales de usuario para permitir al proveedor autenticar al usuario y otorgar acceso al servicio en la nube.

              li
                i.fas.fa-chevron-right
                | La invocación del servicio en la nube, que luego opera y entrega los resultados especificados.
          .col-lg-4
            img(src='@/assets/curso/temas/tema2/img04.svg', alt='')

        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Administrador

        .cajon.color-secundario.bg-9.p-4.mb-4
          p El objetivo principal de administrador de los servicios en la nube contratados es la de garantizar el buen funcionamiento del uso de los servicios en la nube por parte del cliente, adicionalmente, los servicios contratados deben funcionar bien con los sistemas y aplicaciones TIC existentes en el lado del cliente, bien en propiedad o también en nube.
          p Por tanto, el administrador de servicios en la nube es el responsable de supervisar todos los procesos operativos relacionados con el uso de los servicios en la nube y actúa como punto de referencia para las comunicaciones técnicas entre el cliente y el proveedor de servicios.
          p Las actividades del administrador de servicios en la nube del lado del cliente incluyen:
        
        .py-3
        TabsB.color-primario
          .py-4.py-md-5(titulo="Realiza pruebas de servicio" :icono="require('@/assets/curso/temas/tema2/img05.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-7.mb-4.mb-md-0
                p  Realizar prueba de servicio: implica el uso de los servicios del proveedor para garantizar que el servicio en la nube sea adecuado para las necesidades comerciales del cliente. Los servicios en la nube se utilizan a modo de prueba, con mutuo acuerdo y entendimiento entre el proveedor y el cliente. Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | La provisión de las credenciales de usuario para permitir al proveedor autenticar al usuario y otorgar acceso al servicio en la nube “de prueba“.
                  li
                    i.fas.fa-chevron-right
                    | La invocación del servicio en la nube “de prueba” que el cliente puede probar con fines comerciales.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="Servicio de monitoreo" :icono="require('@/assets/curso/temas/tema2/img06.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-7.mb-4.mb-md-0
                p Supervisa la calidad del servicio prestado con respecto a los niveles de servicio según se define en el acuerdo de nivel de servicio (SLA) entre el cliente y el proveedor. Como vimos en el modelo de arquitectura de capas y multicapa, esta actividad utiliza funciones intrínsecas del sistema en la nube. Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Realizar un seguimiento del uso que se está haciendo de cada servicio en la nube y por qué usuarios con la garantía de que el uso sea el apropiado.
                  li
                    i.fas.fa-chevron-right
                    | Supervisar la integración de los servicios en la nube con los sistemas de TIC existentes del cliente para garantizar que se cumplan los objetivos comerciales.
                  li 
                    i.fas.fa-chevron-right
                    | Definir puntos de medición e indicadores de desempeño relacionados con el servicio en cuestión, por ejemplo: disponibilidad del servicio, frecuencia de interrupciones del servicio, tiempo medio de reparación, capacidad de respuesta de la mesa de ayuda del proveedor, entre otros.
                  li
                    i.fas.fa-chevron-right
                    | Seguimiento, análisis y archivo de estos datos de indicadores.
                  li
                    i.fas.fa-chevron-right
                    | Comparar la calidad del servicio real entregada con la acordada.

              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')
     
          .py-4.py-md-5(titulo="Administrar la seguridad del servicio" :icono="require('@/assets/curso/temas/tema2/img07.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-7.mb-4.mb-md-0
                p Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Garantizar la seguridad adecuada para los datos de los clientes del servicio.
                  li
                    i.fas.fa-chevron-right
                    | Poner en marcha planes para la copia de seguridad y la recuperación de datos, y potencialmente para la duplicación de datos y la conmutación por error.
                  li 
                    i.fas.fa-chevron-right
                    | Administración de las políticas de seguridad.
                  li
                    i.fas.fa-chevron-right
                    | Definir tecnologías de encriptación e integridad para aplicar a los datos del cliente del servicio en la nube tanto en reposo como en movimiento.
                  li
                    i.fas.fa-chevron-right
                    | Definir el manejo de cualquier información de identificación personal en los datos del cliente del servicio en la nube.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen')
      
          .py-4.py-md-5(titulo="Proporcionar informes de facturación y uso" :icono="require('@/assets/curso/temas/tema2/img08.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-7.mb-4.mb-md-0
                p Esta actividad implica la preparación de informes del uso de los servicios en la nube por parte de la organización del cliente y los informes asociados de los datos de facturación que se relacionan con ese uso los cuales son entregados al gerente comercial del cliente.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="Manejar informes de problemas" :icono="require('@/assets/curso/temas/tema2/img09.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-7.mb-4.mb-md-0
                p Esta actividad implica el manejo del lado del cliente de cualquier problema informado asociado con el uso de servicios en la nube. Esto incluye:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Evaluar el impacto de cada problema.

                  li
                    i.fas.fa-chevron-right
                    | Resolución de problemas para determinar la (s) causa (s) del problema.

                  li 
                    i.fas.fa-chevron-right
                    | Abrir un informe de problemas con el proveedor y realizar un seguimiento hasta su resolución.

                  li
                    i.fas.fa-chevron-right
                    | Desarrollar soluciones alternativas para abordar el problema.

                  li
                    i.fas.fa-chevron-right
                    | Problemas crecientes que no se solucionan dentro de los plazos acordados o que tienen serios impactos comerciales.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img15.png', alt='Texto que describa la imagen')
      
          .py-4.py-md-5(titulo="Administrar los arrendamientos" :icono="require('@/assets/curso/temas/tema2/img10.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-7.mb-4.mb-md-0
                p Esta actividad implica administrar los arrendamientos del cliente con el proveedor, incluyendo:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Configurar y controlar aspectos de seguridad, incluidas cuentas de usuario, roles de seguridad, identidades y permisos.
                  li
                    i.fas.fa-chevron-right
                    | Identificar y controlar los datos que se comparten entre los usuarios dentro del arrendamiento.
                  li 
                    i.fas.fa-chevron-right
                    | Crear y eliminar inquilinos.

                  li
                    i.fas.fa-chevron-right
                    | Gestión de usuarios y recursos asignados de inquilinos.

                  li
                    i.fas.fa-chevron-right
                    | Definir políticas de cumplimiento para cada inquilino.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img16.png', alt='Texto que describa la imagen')

        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gerente comercial

        p Tiene como objetivo cumplir los objetivos comerciales del cliente del servicio en la nube mediante la adquisición y el uso de servicios de una manera rentable, las principales responsabilidades se refieren a los aspectos financieros y legales del uso de los servicios en la nube, incluida la aprobación, la propiedad continua y la responsabilidad.
        p Las actividades de computación en la nube del gerente comercial incluyen:
        
        .bg2.mb-4(data-aos="fade-down")
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Realizar la administración comercial
                p Esta actividad implica la gestión de los aspectos comerciales del uso de servicios en la nube, incluida la gestión contable y financiera, incluyendo:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Ajustar el plan de negocios para adaptarse al uso de servicios en la nube.
                  li
                    i.fas.fa-chevron-right
                    | Hacer un seguimiento del uso de los servicios y ocuparse de la gestión contable y financiera.
                  li 
                    i.fas.fa-chevron-right
                    | Manejo de la facturación/facturas recibidas del proveedor de servicios en la nube por el uso que se hace de los servicios en la nube.
                  li
                    i.fas.fa-chevron-right
                    | Asegurar que la facturación coincida con el uso real de los servicios en la nube realizado por el cliente del servicio en la nube.
                  li
                    i.fas.fa-chevron-right
                    | Realizar pagos al proveedor de servicios en la nube.
                  li
                    i.fas.fa-chevron-right
                    | Llevar cuentas en relación con el uso de servicios en la nube.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img17.png', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Seleccionar y adquirir el servicio
                p Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Examinar las ofertas de servicios en la nube de uno o varios proveedores de servicios en la nube, estableciendo si el servicio ofrecido cumple con los requisitos comerciales y técnicos del cliente del servicio en la nube. Requiere la lectura de un catálogo de productos y la documentación de cada servicio, que puede incluir información técnica sobre el servicio y sus SLA, además de información comercial, incluidos los precios.
                  li
                    i.fas.fa-chevron-right
                    | Negociar los términos del servicio en la nube, siempre que el proveedor del servicio en la nube permita términos variables para el servicio.
                  li 
                    i.fas.fa-chevron-right
                    | Aceptar el contrato del servicio en la nube y realizar el registro con el proveedor del servicio en la nube.
                
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img18.png', alt='')
           
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Solicitar informe de auditoría
                p Implica que el cliente del servicio en la nube solicite el informe de una auditoría del servicio, normalmente conforme a un esquema o estándar de auditoría en particular (por ejemplo ISO 27017).
                p El cliente del servicio en la nube puede solicitar el informe a un auditor de la nube, o posiblemente al proveedor del servicio en la nube, aunque se espera que el informe de auditoría sea preparado por una entidad independiente del proveedor del servicio en la nube antes de que se complete una compra y también periódicamente a lo largo de uso del servicio.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img19.png', alt='')



        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Integrador de servicios

        p Es una función secundaria del cliente de servicios en la nube y responsable de la integración de los servicios en la nube con los sistemas de TIC existentes del lado del cliente.
        p La actividad de conectar los sistemas de TIC a los servicios en la nube implica, además, la conexión de los componentes y aplicaciones TIC existentes del cliente con los servicios en la nube de destino, incluida la conexión de los sistemas de gestión y monitoreo del cliente con los de supervisión y el control de los servicios en la nube por parte del proveedor.
        p La conexión de los componentes y aplicaciones TIC existentes con los servicios en la nube de destino implica:
        .py-3
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-6
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center.align-items-center
                .col-md-10.mb-4.mb-md-0
                  p Proporcionar a las partes interesadas una evaluación de la eficacia de los controles internos y la seguridad del proveedor de servicios de computación en la nube.
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Identificar las deficiencias del control interno dentro de la organización del cliente y su interfaz con el proveedor de servicios.
              .row.justify-content-center.align-items-center
                .col-md-10.mb-4.mb-md-0
                  p Proporcionar a las partes interesadas de la auditoría una evaluación de la calidad y su capacidad para confiar en las certificaciones del proveedor de servicios con respecto a los controles internos.
              .row.justify-content-center.align-items-center
                .col-md-10
                  p La auditoría no está diseñada para reemplazar o enfocarse en aspectos de auditoría relacionados con procesos de aplicación específicos y excluye la garantía de la funcionalidad e idoneidad de una aplicación en sí misma.
              .row.justify-content-center.align-items-center
                .col-md-10.mb-4.mb-md-0
                  p El alcance de la auditoría se centrará esencialmente en aspectos relacionados con:
                  ul.lista-ul--color
                    li 
                      i.fas.fa-chevron-right
                      | La gobernanza que afecta a la computación en la nube
                    li
                      i.fas.fa-chevron-right
                      | El cumplimiento contractual entre el prestador de servicios y el cliente
                    li 
                      i.fas.fa-chevron-right
                      | Controlar problemas específicos de la computación en nube
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Dado que las áreas bajo revisión dependen en gran medida de la efectividad de los controles generales de TI básicos, se suelen realizar revisiones de aseguramiento de las siguientes áreas previas a la ejecución de la revisión propiamente dicha de los servicios de nube. 

        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-4
              .col-lg-9
                p Un proveedor de servicios en la nube pone los servicios en la nube a disposición de los clientes de servicios en la nube, esta función (y todas sus sub-funciones) se centra en las actividades de computación necesarias en la nube para proporcionar un servicio allí y para garantizar su entrega al proveedor, así como el mantenimiento del servicio en la nube.
                p Adicionalmente a la propia prestación del servicio, el proveedor es responsable de gestionar la relación comercial con los clientes del servicio en la nube; se indica a continuación los sub-roles más habituales en el lado del proveedor con las actividades típicas relacionadas.
              .col-lg-3
                img(src='@/assets/curso/temas/tema2/img21.png', alt='')
        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gerente de operaciones
        
        p Es responsable de realizar todos los procesos y procedimientos operativos del proveedor de servicios en la nube, asegurando que todos los servicios y la infraestructura asociada cumplan con los objetivos operativos.
        p Las actividades de computación en la nube del gerente de operaciones en la nube incluyen:

        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gerente de entregas
        
        p Tiene la responsabilidad de planificar la implementación de un servicio en producción. Esto incluye la definición del entorno operativo para el servicio, los pasos iniciales para la implementación del servicio y sus dependencias y la habilitación de los procesos operativos que se utilizan durante la ejecución del servicio.
        p A continuación, se presentan las actividades que le corresponden:


        .py-3
        TabsB.color-primario
          .py-4.py-md-5(titulo="Definir el entorno y los procesos" :icono="require('@/assets/curso/temas/tema2/img25.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p  Esta actividad se centra en definir el entorno técnico necesario y los procesos operativos que se utilizan cuando se ejecuta un servicio e implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Definir el entorno técnico requerido en términos de recursos informáticos, de almacenamiento y de red, las dependencias del software, incluida la configuración.
                  li
                    i.fas.fa-chevron-right
                    | Definir políticas y procesos para ampliar y reducir el uso de recursos en respuesta a la demanda de uso cambiante.
                  li 
                    i.fas.fa-chevron-right
                    | Asegurar que el servicio en la nube se adhiera a los estándares apropiados relacionados con la seguridad y el cumplimiento comercial.
                  li
                    i.fas.fa-chevron-right
                    | Definir los procesos a seguir cuando el servicio se está ejecutando, incluidos los planes de reparación, actualización y migración.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema2/img22.png', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="Definir y recopilar métricas" :icono="require('@/assets/curso/temas/tema2/img26.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p Esta actividad se centra en definir métricas y gestión del nivel de servicio e implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Definir las métricas que se utilizan en relación con el funcionamiento de los servicios en la nube, que normalmente se reflejan en el SLA relacionado con esos servicios.

                  li
                    i.fas.fa-chevron-right
                    | Diseñar cómo se capturan las métricas para cada servicio en la nube.

                  li 
                    i.fas.fa-chevron-right
                    | Definir cómo se informan y gestionan las métricas, en particular para garantizar que se cumplan los objetivos de SLA.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema2/img23.png', alt='Texto que describa la imagen')
     
          .py-4.py-md-5(titulo="Definir los pasos de implementación" :icono="require('@/assets/curso/temas/tema2/img27.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p Esta actividad implica describir cada uno de los pasos que deben seguir los equipos de operaciones y soporte para que la implementación del servicio se implemente y esté lista para ser utilizada por los clientes.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema2/img24.png', alt='Texto que describa la imagen')



        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gerente de entregas
        
        p El gerente de servicios en la nube tiene la responsabilidad de garantizar que los servicios del proveedor estén disponibles para su uso por los clientes y que funcionen correctamente y cumplan con los objetivos especificados en el acuerdo de nivel de servicio.
        p También es responsable de garantizar el buen funcionamiento del sistema de soporte comercial y del sistema de soporte operativo del proveedor, así como, del funcionamiento de las otras funcionalidades que se ofrecen a los clientes y partners para la gestión y administración, entre otras actividades, de la computación en la nube.
        p Las actividades del gerente de servicios en la nube son las siguientes:

        .py-4
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-8.col-12.mb-4-lg-0
            LineaTiempoD.color-acento-botones
              .row(numero="1" titulo="Proporcionar servicios")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Esta actividad implica todos los pasos necesarios para ofrecer un servicio en la nube a sus clientes. La actividad de proporcionar servicios incluye aceptar y procesar las invocaciones de servicios del usuario con la autenticación asociada y la autorización de la identidad del usuario. El procesamiento de una invocación de servicio se realiza por medio de una instancia de la implementación del servicio que, a su vez, puede implicar la composición y llamada de otros servicios según lo determinado por el diseño y la configuración de la implementación del servicio.
              .row(numero="2" titulo="Actividad en la prestación")
                .col-md-12.mb-4.mb-md-0
                  p.text-small La actividad de prestación de servicios también implica lo siguiente:
                  ul.lista-ul--color.text-small
                    li 
                      i.fas.fa-chevron-right
                      | Gestionar el proceso de tratamiento de fallos del servicio.

                    li
                      i.fas.fa-chevron-right
                      | Gestionar el sistema de apoyo empresarial y el sistema de apoyo operativo.

                    li 
                      i.fas.fa-chevron-right
                      | Mantener el servicio y la infraestructura subyacente.

                    li 
                      i.fas.fa-chevron-right
                      | Automatizar los procesos del sistema.

                      i.fas.fa-chevron-right
                      | Gestionar las tendencias de rendimiento y capacidad a largo plazo.

                    li 
                      i.fas.fa-chevron-right
                      | Instalar, configurar y realizar actualizaciones de mantenimiento en el hardware requerido para las capacidades de computación, almacenamiento y red para el Datacenter del proveedor de servicios en la nube.

                    li 
                      i.fas.fa-chevron-right
                      | Instalar y configurar el software necesario para ejecutar y respaldar las implementaciones de servicios en la nube. Esto incluye la aplicación de correcciones, actualizaciones y mejoras a ese software, según sea necesario.
              .row(numero="3" titulo="Desplegar y suministrar servicios")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Esta actividad implica poner en funcionamiento una implementación de servicio y ponerla a disposición en un punto final de la red accesible para los usuarios del cliente y hacer que pueda manejar las solicitudes de servicio de los usuarios. Esta actividad incluye:
                  ul.lista-ul--color.text-small
                    li 
                      i.fas.fa-chevron-right
                      | Seguir los procesos de implementación definidos para el servicio

                    li
                      i.fas.fa-chevron-right
                      | Cubrir los procesos necesarios para cancelar el despliegue y el suministro de un servicio en la nube.
              .row(numero="4" titulo="Realizar la gestión del nivel de servicio")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Esta actividad consiste en gestionar el cumplimiento de los objetivos de SLA. Esta actividad implica:
                  ul.lista-ul--color.text-small
                    li 
                      i.fas.fa-chevron-right
                      | Monitorear las métricas para cada servicio y compararlas con los objetivos de servicio requeridos por el SLA para el servicio.

                    li
                      i.fas.fa-chevron-right
                      | Tomar medidas cuando las métricas no cumplen con los valores requeridos por el SLA para que el servicio vuelva a cumplir con el SLA, por ejemplo, siguiendo los procedimientos establecidos por el gerente de entregas del proveedor.
                    li
                      i.fas.fa-chevron-right
                      | Informar de un problema si no se puede mantener el cumplimiento.
      
          .col-lg-4.col-7 
            img(alt="" src="@/assets/curso/temas/tema2/img28.svg")

        .py-4
        .bg2.mb-4(data-aos="fade-down")
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Gestionar el plan de negocios
                p Esta actividad para proporcionar servicios en la nube implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Definir una oferta de servicio, describiendo los aspectos técnicos de la oferta (interfaces funcionales, SLA, …) y los aspectos comerciales de la oferta. Al establecer la oferta de servicios, el proveedor no debe descuidar aquellos aspectos relacionados con la interacción con otros proveedores pares.

                  li
                    i.fas.fa-chevron-right
                    | Crear un plan de negocios que cubra la oferta de uno o más servicios en la nube a los clientes, manejando los aspectos financieros y técnicos de los servicios, el conjunto de clientes objetivo, contratos y SLA, canales de comercialización, objetivos de ventas.

                  li 
                    i.fas.fa-chevron-right
                    | Realizar un seguimiento del uso de las ventas y los servicios en relación con el plan para garantizar que se logren los objetivos financieros del proveedor de servicios en la nube.

                  li
                    i.fas.fa-chevron-right
                    | Preparar un plan de negocios y ajustar el plan de negocios para brindar servicios en la nube.
               
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img29.png', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Gestionar las relaciones con los clientes
                p Esta actividad implica la gestión de la relación comercial del proveedor con el cliente en la nube, que incluye:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Crear y mantener el contenido de un catálogo de productos.

                  li
                    i.fas.fa-chevron-right
                    | Adquirir clientes.

                  li 
                    i.fas.fa-chevron-right
                    | Proporcionar el punto de contacto para el cliente para todos los asuntos comerciales.
                  li 
                    i.fas.fa-chevron-right
                    | Discutir y resolver inquietudes o problemas planteados por el cliente.
                  li 
                    i.fas.fa-chevron-right
                    | Procesar solicitudes de cambio (por ejemplo, cambios de derechos).


                
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img30.png', alt='')
           
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Gestionar el procesamiento financiero
                p Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Manejar actualizaciones o desafíos de facturación.
                  li
                    i.fas.fa-chevron-right
                    | Generar información de facturación y / o una factura por cargos relacionados con el uso de servicios en la nube y transmitir la información de facturación o la factura al cliente del servicio en la nube.
                  li 
                    i.fas.fa-chevron-right
                    | Gestionar la recepción de pagos del cliente del servicio en la nube y su contabilidad.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img31.png', alt='')



        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Representante de atención y soporte al cliente
        p Es la interfaz principal entre el cliente y el proveedor es responsable de reaccionar a los problemas y consultas de los clientes de manera oportuna y rentable con el objetivo de mantener la satisfacción del cliente en la relación con el proveedor y los servicios en la nube ofrecidos.
        p Manejo de solicitudes de soporte, informes e incidentes de clientes de servicios en la nube, independientemente de cómo se reciban.
        p Las actividades del representante de atención al cliente del proveedor son esencialmente el manejo de las solicitudes de los clientes que implica:

        .py-3
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-2
              .col-lg-12
                p Se puede proporcionar a los clientes una variedad de medios para comunicarse, desde foros a través del correo electrónico, sistemas de soporte al cliente o portales web hasta comunicación en tiempo real con el personal de soporte del proveedor.


      .row.justify-content-center.t1-1.mb-5(data-aos="fade-down")
        .col-lg-10      
          .bloque-texto-g.color-secundario.p-sm-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img32.png')})`}")
            .bloque-texto-g__texto.p-4
              p En atención a las buenas prácticas de marcos ampliamente aplicados como ITIL, recomiendan la concentración de peticiones e incidentes en un único punto (Single Point of Contact) lo que facilita la rentabilidad de esfuerzos en la atención al cliente y permite una trazabilidad en el tratamiento de las peticiones mediante el registro de un ticket y el soporte de herramientas que incorporan, adicionalmente y de manera integrada, los procesos de gestión de incidentes, problemas, cambios y entregas (releases también traducido como liberaciones o despliegues).
      
      p Estas herramientas permiten la extracción de datos para informes relevantes, alarmas asociadas a tickets próximos o que han sobrepasado tiempos límite de atención, escalados automáticos a diferentes niveles de atención, bases de datos con errores conocidos.

      .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Proveedor entre nubes


        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-6
            p Los proveedores de servicio de cloud pueden depender de uno o más proveedores “pares” (peer) homólogos y encadenados para proporcionar parte o la totalidad de los servicios en la nube ofrecidos a los clientes.
            .cajon.color-secundario.bg-9.p-4.mb-4
              p Las principales actividades del proveedor “entre nubes” son la intermediación, agregación, arbitraje, emparejamiento o federación de los servicios en la nube de los proveedores de servicios de nube pares y sus capacidades comerciales y de administración.
            p El objetivo es que, desde el punto de vista del proveedor de servicios de cloud principal, los clientes solo utilicen su servicio, interfaces comerciales y de administración y, en ningún caso, las de los proveedores encadenados en el servicio del proveedor.
            p Las actividades del proveedor entre nubes incluyen:
          .col-lg-6
            img(src='@/assets/curso/temas/tema2/img33.png', alt='')
      .py-3
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-10
          h5 Gestionar servicios en la nube de pares: esta actividad consiste en administrar el uso de los servicios en la nube de un proveedor homólogo, implica:


    .container.amarillo.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-8
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              | Seleccionar y utilizar uno o más servicios de un proveedor de servicios de nube similares.

            li
              i.fas.fa-chevron-right
              | Monitorear y administrar los servicios en la nube del proveedor secundario para garantizar que cumplan los objetivos de SLA acordados, incluido el informe y la resolución de problemas con esos servicios.

            li 
              i.fas.fa-chevron-right
              | Gestionar los aspectos comerciales de los servicios en la nube de un proveedor homólogo, incluido el plan comercial y el procesamiento financiero.

            li
              i.fas.fa-chevron-right
              | Realizar un seguimiento del uso que se está haciendo de cada servicio en la nube de proveedor homólogo, por qué usuarios se está realizando e incluir la garantía de que el uso es apropiado y está dentro del plan comercial.

            li 
              i.fas.fa-chevron-right
              | Monitorear la integración de los servicios en la nube del proveedor homólogo con las implementaciones de servicios para garantizar que se cumplan los objetivos comerciales.

            li 
              i.fas.fa-chevron-right
              | Coordinar las credenciales de identidad y seguridad entre el cliente y todos los proveedores homólogos. 
        
        .col-lg-4
          img(src='@/assets/curso/temas/tema2/img34.png', alt='')


    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-10
           h5 Realizar peering, federación, intermediación, agregación y arbitraje: esta actividad implica el uso de los servicios en la nube del proveedor homólogos de todas estas maneras particulares y que se explican a continuación:

    .container.amarillo.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-4
          img(src='@/assets/curso/temas/tema2/img35.png', alt='')
        
        .col-lg-8
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              | Peering es el uso de servicios en la nube de un proveedor homólogo.


            li
              i.fas.fa-chevron-right
              | La federación implica el uso de los servicios en la nube de un grupo de proveedores homólogos que combinan mutuamente sus capacidades de servicio para proporcionar el conjunto de servicios en la nube requeridos por los clientes.


            li 
              i.fas.fa-chevron-right
              | La intermediación consiste en una oferta desde un proveedor que ofrece un servicio en la nube acondicionando o mejorando el servicio en la nube de un proveedor original similar, por ejemplo, incluyendo la gestión del acceso a los servicios en la nube, proporcionando un frontal web más atractivo con una interfaz de programación de aplicaciones (API) de servicios en la nube, gestión de identidades, informes de rendimiento, seguridad mejorada, entre otros posibles.


            li
              i.fas.fa-chevron-right
              | La agregación se produce cuando la oferta de un servicio en la nube por un proveedor se ha compuesto mediante un conjunto de servicios proporcionados por proveedores pares.


            li 
              i.fas.fa-chevron-right
              | El arbitraje involucra a los proveedores que ofrecen un servicio en la nube que se fundamenta en la selección de una única oferta de servicios seleccionada de entre un grupo de proveedores homólogos.

  
    
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gestor de riesgos y seguridad del servicio en la nube
        p Tiene la responsabilidad de garantizar que el proveedor gestione adecuadamente los riesgos asociados con el desarrollo, la entrega, el uso y el soporte de los servicios en la nube, esto incluye garantizar la alineación de las políticas de seguridad de la información del cliente y el proveedor para cumplir, en último término, con los requisitos de seguridad establecidos en el SLA.
        h5 Gestionar la seguridad y los riesgos. Esta actividad consiste en la gestión de la seguridad y los riesgos asociados con el desarrollo, la entrega, el uso y el soporte de los servicios en la nube, como puede verse a continuación:






</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
