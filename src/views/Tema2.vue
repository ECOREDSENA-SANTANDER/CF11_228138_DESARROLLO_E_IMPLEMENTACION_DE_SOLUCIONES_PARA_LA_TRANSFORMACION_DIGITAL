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
            .col-lg-2.col-5.py-2
              img(src='@/assets/curso/temas/tema1/img32.svg', alt='')
            .col-lg-9
              p.mb-4 Cuanto mayor y/o más compleja se vuelve una organización, un mayor nivel de formalización y documentación asociada a la descripción y designación de los roles y responsabilidades que intervienen en los procesos se pueden encontrar y que además habilitan a la organización para el desarrollo de las competencias, alcanzar mayores grados de coordinación y eficiencia o, la incorporación de nuevo personal y rotación de este a nivel interno.
        .col-lg-4.col-8
          img(src='@/assets/curso/temas/tema2/img01.svg', alt='')

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
        .col-lg-11     
          .bloque-texto-g.color-secundario.p-sm-4
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img02.png')})`}")
            .bloque-texto-g__texto.p-4
              p Por todos estos motivos, si la definición de los roles, responsabilidades y autoridad asociada al primer término son importantes en el funcionamiento interno de una organización lo son, aún más, en el caso de la externalización de servicios de soporte esenciales para la entrega de los productos y servicios a proveedores de nube. <br><br>
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
          .col-lg-4.py-2
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
                  p Identificar las deficiencias del control interno dentro de la organización del cliente y su #[em interfaz] con el proveedor de servicios.
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
        
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido
         h2 2.2 Roles y actividades asociadas al proveedor
        
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-4
              .col-lg-9
                p Un proveedor de servicios en la nube pone los servicios en la nube a disposición de los clientes de servicios en la nube, esta función (y todas sus sub-funciones) se centra en las actividades de computación necesarias en la nube para proporcionar un servicio allí y para garantizar su entrega al proveedor, así como el mantenimiento del servicio en la nube.
                p Adicionalmente a la propia prestación del servicio, el proveedor es responsable de gestionar la relación comercial con los clientes del servicio en la nube; se indica a continuación los sub-roles más habituales en el lado del proveedor con las actividades típicas relacionadas.
              .col-lg-3.col-8
                img(src='@/assets/curso/temas/tema2/img21.png', alt='')
        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gerente de operaciones
        
        p Es responsable de realizar todos los procesos y procedimientos operativos del proveedor de servicios en la nube, asegurando que todos los servicios y la infraestructura asociada cumplan con los objetivos operativos.
        p Las actividades de computación en la nube del gerente de operaciones en la nube incluyen:
        
        .row.justify-content-center.d-none.d-md-flex.mb-5(data-aos="fade-down")
          .col-lg-12
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema2/infografia.svg',alt='') 

              .tarjeta.color-acento-botones.p-3(x="19%" y="41%" numero="+")
                p Evaluar el impacto de la implementación de nuevos servicios o el aumento en el uso de los servicios existentes.
                
              .tarjeta.color-acento-botones.p-3(x="19%" y="48%" numero="+")
                p Modificar o ampliar los recursos en el centro de datos para satisfacer las necesidades de nuevas implementaciones.
                
              .tarjeta.color-acento-botones.p-3(x="45%" y="41%" numero="+")
                p Monitorear los servicios y la infraestructura del proveedor de servicios en la nube.
              
              .tarjeta.color-acento-botones.p-3(x="45%" y="48%" numero="+")
                p Capturar eventos y datos que son importantes para el negocio del proveedor y presentar estos datos en una forma que sea significativa para el gerente comercial del proveedor. Dicha información incluye elementos como el uso de los servicios en la nube por parte de los clientes y el costo de prestación de esos servicios.
              
              .tarjeta.color-acento-botones.p-3(x="45%" y="55%" numero="+")
                p Administrar la infraestructura de red, incluidos routers, servidores de nombres de dominio, direcciones IP, redes privadas virtuales (VPN), cortafuegos y filtrado de contenido.
              .tarjeta.color-acento-botones.p-3(x="45%" y="62%" numero="+")
                p Asignar y administrar el almacenamiento.
              .tarjeta.color-acento-botones.p-3(x="45%" y="70%" numero="+")
                p Administrar los privilegios del usuario y del sistema.
              .tarjeta.color-acento-botones.p-3(x="45%" y="77%" numero="+")
                p Configurar y mantener sistemas operativos e hipervisores.
              .tarjeta.color-acento-botones.p-3(x="45%" y="84%" numero="+")
                p Administrar un entorno de virtualización.
              .tarjeta.color-acento-botones.p-3(x="45%" y="91%" numero="+")
                p Supervisar el comportamiento del entorno TIC del proveedor para garantizar que esté funcionando correctamente y que los servicios en la nube proporcionados cumplan los términos del SLA.
              .tarjeta.color-acento-botones.p-3(x="45%" y="98%" numero="+")
                p Registrar problemas, informar los problemas de manera adecuada siguiendo los canales de comunicación con las partes establecido por el proveedor a nivel interno y con los roles externos del cliente y el partner y seguir los procesos de resolución de problemas hasta que se solucione el problema.

              .tarjeta.color-acento-botones.p-3(x="70%" y="41%" numero="+")
                p Realizar un seguimiento de todos los activos computacionales, de almacenamiento, de red y de #[em software] y la relación entre ellos. Esto incluye aspectos de seguimiento como versiones y niveles de parcheo, además de información de configuración, cuando sea relevante.
              
              .tarjeta.color-acento-botones.p-3(x="70%" y="48%" numero="+")
                p Alta de nuevos activos y baja de activos antiguos. Esto puede incluir garantizar que los nuevos activos sean adecuados para su propósito y que se hayan verificado adecuadamente desde el punto de vista de la seguridad y la capacidad de gestión y puede incluir la eliminación segura de activos que ya no son necesarios considerando los datos que pueda contener.
              .tarjeta.color-acento-botones.p-3(x="96%" y="41%" numero="+")
                p Crear y enviar información de auditoría adecuada a partir de registros, entre otras fuentes de información.
              
              .tarjeta.color-acento-botones.p-3(x="96%" y="48%" numero="+")
                p Redactar información de cualquier registro u otros datos que puedan contener información confidencial.
        
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
                    | Definir el entorno técnico requerido en términos de recursos informáticos, de almacenamiento y de red, las dependencias del #[em software], incluida la configuración.
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
            h3.mb-0 Gerente de servicios en la nube
        
        p El gerente de servicios en la nube tiene la responsabilidad de garantizar que los servicios del proveedor estén disponibles para su uso por los clientes y que funcionen correctamente y cumplan con los objetivos especificados en el acuerdo de nivel de servicio.
        p También es responsable de garantizar el buen funcionamiento del sistema de soporte comercial y del sistema de soporte operativo del proveedor, así como, del funcionamiento de las otras funcionalidades que se ofrecen a los clientes y #[em partners] para la gestión y administración, entre otras actividades, de la computación en la nube.
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
                    li
                      i.fas.fa-chevron-right
                      | Gestionar las tendencias de rendimiento y capacidad a largo plazo.

                    li 
                      i.fas.fa-chevron-right
                      | Instalar, configurar y realizar actualizaciones de mantenimiento en el #[em hardware] requerido para las capacidades de computación, almacenamiento y red para el #[em Datacenter] del proveedor de servicios en la nube.

                    li 
                      i.fas.fa-chevron-right
                      | Instalar y configurar el #[em software] necesario para ejecutar y respaldar las implementaciones de servicios en la nube. Esto incluye la aplicación de correcciones, actualizaciones y mejoras a ese #[em software], según sea necesario.
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
      
          .col-lg-4.col-8.py-3
            img(alt="" src="@/assets/curso/temas/tema2/img28.svg")
        
        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Gerente comercial de servicios en la nube
        
        p Tiene la responsabilidad general en los aspectos comerciales y ofrecer servicios en la nube a los clientes. El gerente comercial de servicios en la nube crea y da seguimiento al plan comercial, define la estrategia de oferta de servicios y administra la relación comercial con los clientes. Las actividades de computación en la nube del proveedor: administrador comercial de servicios en la nube son:
        
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
                    | Definir una oferta de servicio, describiendo los aspectos técnicos de la oferta (#[em interfaces] funcionales, SLA, …) y los aspectos comerciales de la oferta. Al establecer la oferta de servicios, el proveedor no debe descuidar aquellos aspectos relacionados con la interacción con otros proveedores pares.

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
        p Es la #[em interfaz] principal entre el cliente y el proveedor es responsable de reaccionar a los problemas y consultas de los clientes de manera oportuna y rentable con el objetivo de mantener la satisfacción del cliente en la relación con el proveedor y los servicios en la nube ofrecidos.
        p Las actividades del representante de atención al cliente del proveedor son esencialmente el manejo de las solicitudes de los clientes que implica:
      
        .py-3
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-3
              .col-lg-12
                p Manejo de solicitudes de soporte, informes e incidentes de clientes de servicios en la nube, independientemente de cómo se reciban.

        p.py-4 Se puede proporcionar a los clientes una variedad de medios para comunicarse, desde foros a través del correo electrónico, sistemas de soporte al cliente o portales web hasta comunicación en tiempo real con el personal de soporte del proveedor.
      
      .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
        .col-lg-11      
          .bloque-texto-g.color-secundario.p-sm-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img32.png')})`}")
            .bloque-texto-g__texto.p-4
              p En atención a las buenas prácticas de marcos ampliamente aplicados como ITIL, recomiendan la concentración de peticiones e incidentes en un único punto (#[em Single Point of Contact]) lo que facilita la rentabilidad de esfuerzos en la atención al cliente y permite una trazabilidad en el tratamiento de las peticiones mediante el registro de un #[em ticket] y el soporte de herramientas que incorporan, adicionalmente y de manera integrada, los procesos de gestión de incidentes, problemas, cambios y entregas (#[em releases] también traducido como liberaciones o despliegues).
      
      p Estas herramientas permiten la extracción de datos para informes relevantes, alarmas asociadas a #[em tickets] próximos o que han sobrepasado tiempos límite de atención, escalados automáticos a diferentes niveles de atención, bases de datos con errores conocidos.

      .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Proveedor entre nubes


        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-6
            p Los proveedores de servicio de #[em cloud] pueden depender de uno o más proveedores “pares” (#[em peer]) homólogos y encadenados para proporcionar parte o la totalidad de los servicios en la nube ofrecidos a los clientes.
            .cajon.color-secundario.bg-9.p-4.mb-4
              p Las principales actividades del proveedor “entre nubes” son la intermediación, agregación, arbitraje, emparejamiento o federación de los servicios en la nube de los proveedores de servicios de nube pares y sus capacidades comerciales y de administración.
            p El objetivo es que, desde el punto de vista del proveedor de servicios de #[em cloud] principal, los clientes solo utilicen su servicio, #[em interfaces] comerciales y de administración y, en ningún caso, las de los proveedores encadenados en el servicio del proveedor.
            p Las actividades del proveedor entre nubes incluyen:
          .col-lg-6
            img(src='@/assets/curso/temas/tema2/img33.png', alt='')
      .py-3
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-11
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
        
        .col-lg-4.col-8.py-2
          img(src='@/assets/curso/temas/tema2/img34.png', alt='')


    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-11
           h5 Realizar #[em peering], federación, intermediación, agregación y arbitraje: esta actividad implica el uso de los servicios en la nube del proveedor homólogos de todas estas maneras particulares y que se explican a continuación:

    .container.amarillo.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-4.col-8.py-2
          img(src='@/assets/curso/temas/tema2/img35.png', alt='')
        
        .col-lg-8
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              | #[em Peering] es el uso de servicios en la nube de un proveedor homólogo.


            li
              i.fas.fa-chevron-right
              | La federación implica el uso de los servicios en la nube de un grupo de proveedores homólogos que combinan mutuamente sus capacidades de servicio para proporcionar el conjunto de servicios en la nube requeridos por los clientes.


            li 
              i.fas.fa-chevron-right
              | La intermediación consiste en una oferta desde un proveedor que ofrece un servicio en la nube acondicionando o mejorando el servicio en la nube de un proveedor original similar, por ejemplo, incluyendo la gestión del acceso a los servicios en la nube, proporcionando un frontal web más atractivo con una #[em interfaz] de programación de aplicaciones (API) de servicios en la nube, gestión de identidades, informes de rendimiento, seguridad mejorada, entre otros posibles.


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
        
        .row.py-2(data-aos="fade-left")
          .col-lg-1
            img.nubesize(src="@/assets/curso/temas/tema2/nube.svg", alt="")
          .col-lg-11
            h5 Gestionar la seguridad y los riesgos. Esta actividad consiste en la gestión de la seguridad y los riesgos asociados con el desarrollo, la entrega, el uso y el soporte de los servicios en la nube, como puede verse a continuación:


        .py-3
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-7
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center.align-items-center
                .col-md-10.mb-4.mb-md-0
                  p Definir la política de seguridad de la información, teniendo en cuenta los requisitos del servicio, los requisitos legales y reglamentarios y las obligaciones contractuales y SLA.
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Definir los riesgos de seguridad de la información relacionados con el servicio en la nube y detectar aquellos riesgos relacionados con el cumplimiento de los objetivos comerciales del proveedor Como consideración importante, indicada en el tema sobre rentabilidad en la nube y modelos económicos del cliente y del proveedor, es que la gestión de los riesgos de seguridad de la información tiene un costo asociado. En consecuencia, el proveedor podría asumir la posición comercial de no manejar algunos riesgos, dejando la responsabilidad de esos riesgos al cliente mediante el contrato de servicio, con el fin de no asumir estos costes directamente y redirigiéndolos a otras partes del mercado.
              .row.justify-content-center.align-items-center
                .col-md-10.mb-4.mb-md-0
                  p Seleccionar el punto de diseño y los controles de seguridad de la información necesarios para abordar los riesgos asociados con el servicio y el punto de diseño elegido. Los controles suelen cubrir un conjunto de categorías como la gestión de identidad y acceso, seguridad física y personal, protección de datos y activos de información y que se pueden presentar organizados de diferente forma en el caso de los marcos de seguridad de referencia (ISO 27002, ISO 27017, #[em Cloud Security Alliance, NIST].)
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Asegurar que los controles identificados estén implementados de manera efectiva en el servicio desplegado y en la infraestructura subyacente.
              .row.justify-content-center.align-items-center
                .col-md-10.mb-4.mb-md-0
                  p Diseñar, implementar y evaluar la seguridad de sistemas y aplicaciones.
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Administrar, diseñar, implementar y evaluar la seguridad de los servicios en la nube de los proveedores homólogos.
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Evaluar la efectividad de los controles implementados y realizar cambios basados en la experiencia.
              .row.justify-content-center.align-items-center
                .col-md-10
                  p Asegurar que los sistemas de soporte operativo y comercial brinden acceso a los datos al personal del proveedor en función de los inquilinos de los clientes, en particular a los que brindan un servicio.
        
        .row.py-2(data-aos="fade-left")
          .col-lg-1
            img.nubesize(src="@/assets/curso/temas/tema2/nube.svg", alt="")
          .col-lg-11
            h5 Diseñar e implementar la continuidad del servicio. Esta actividad implica considerar los modos potenciales de falla de un servicio en la nube y la infraestructura de soporte y poner en marcha procesos de recuperación que permitan que el servicio en la nube esté disponible dentro de los términos del SLA, a través de técnicas como la conmutación por error y la redundancia.
        
        .row.py-2(data-aos="fade-left")
          .col-lg-1
            img.nubesize(src="@/assets/curso/temas/tema2/nube.svg", alt="")
          .col-lg-11
            h5 Asegurar el cumplimiento. Esta actividad consiste en implementar el cumplimiento de normas y regulaciones e implica:
            ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right
                  | Asegurar que la implementación del servicio en la nube y su infraestructura de soporte cumpla con los requisitos de cualquier estándar que deba ser compatible, por ejemplo, los estándares pueden ser requeridos por el cliente objetivo o pueden ser requeridos por el esquema de certificación que el proveedor ha elegido asegurar el servicio.
                li
                  i.fas.fa-chevron-right
                  | Asegurar que la implementación del servicio en la nube y su infraestructura de soporte (incluido el manejo de datos) cumpla con los requisitos reglamentarios que puedan existir para el servicio o para los datos almacenados o procesados por el servicio.


        .py-3
        .row.py-3
          #7.subtitulo.mb-4(data-aos="fade")
            h3.mb-0 Proveedor de red

          p El proveedor de red puede proporcionar conectividad de red entre sistemas dentro del #[em Datacenter] del proveedor o proporcionar conectividad de red entre los sistemas del proveedor y los sistemas fuera del #[em Datacenter] del proveedor, por ejemplo, sistemas de clientes o sistemas que pertenecen a otros proveedores homólogos.
          p Las actividades de computación en la nube del proveedor de red, son:

        .row.justify-content-center.align-items-center(data-aos="fade-rigth")
          .col-lg-12.col-12
            acordionA.mb-3(tipo="b" clase-tarjeta="tarjeta gris-claro")
              div(titulo="Proporciona conectividad de red")
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    p Esta actividad implica la configuración de las conexiones de red solicitadas y las capacidades relacionadas incluidas, entre otras, conexiones entre el cliente y el sistema del proveedor y entre el sistema de un proveedor y el sistema de otro proveedor. Esto puede incluir el establecimiento de instalaciones como una VPN o conexiones dedicadas. Las capacidades de red incluyen la capacidad de proporcionar retardo, fluctuación, ancho de banda, calidad de servicio y confiabilidad adecuados para todas las categorías de servicios en la nube y para fines, tanto en la nube, como fuera de la nube en el caso de NaaS.
                  .col-lg-6
                    img(src="@/assets/curso/temas/tema2/img36.png", alt="")
              
              div(titulo="Prestar servicios de red")
                .row.justify-content-center.align-items-center
                  .col-md-6
                    p.mb-0 Esta actividad implica la prestación de servicios relacionados con la red, como #[em firewalls] o equilibrio de carga.
                  .col-lg-6
                    img(src="@/assets/curso/temas/tema2/img37.png", alt="")

              div(titulo="Proporcionar servicios de gestión de red")
                .row.justify-content-center.align-items-center 
                  .col-md-6
                    p.mb-0 Esta actividad se centra en la gestión de la infraestructura de red utilizada para transportar servicios en la nube. Proporciona métodos, herramientas y procedimientos que permiten la operación, administración, mantenimiento y aprovisionamiento de la infraestructura de la red en la nube. Incluye tareas para:
                    ul.lista-ul--color
                      li 
                        i.fas.fa-chevron-right
                        | Mantener la red funcionando sin problemas.
                      li
                        i.fas.fa-chevron-right
                        | Realizar un seguimiento de los recursos en la red y cómo se asignan.
                      li 
                        i.fas.fa-chevron-right
                        | Realizar reparaciones y actualizaciones, por ejemplo, cuando el equipo debe reemplazarse o actualizarse con nuevas funciones.
                      li
                        i.fas.fa-chevron-right
                        | Configurar recursos en la red para soportar un servicio en la nube.
                  .col-lg-6
                    img(src="@/assets/curso/temas/tema2/img38.png", alt="")


        Separador
        #t_2_3.titulo-segundo.color-acento-contenido
         h2 2.3 Roles y actividades asociadas a los #[em partners] 

        p Un #[em partner], socio u operador de servicios en la nube (CSN) es una parte que se dedica a respaldar o proporcionar actividades de soporte auxiliar a las actividades del proveedor de servicios y el cliente o de ambos.
        p Por tanto, las actividades de un #[em partner] pueden ser muy diversas según el tipo de socio de que se trate y de sus relaciones con el cliente y/o el proveedor.
        p Por ejemplo, siguiendo el modelo de proveedores en nube pública, algunos de los tipos de #[em partners]  que se pueden encontrar son:

        .py-4
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.size(src='@/assets/curso/temas/tema2/img37.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-2
                  h4 Consultor
                  p Socio que cuenta con un equipo técnico capacitado, certificado por el proveedor y que es capaz de brindar consultoría en cuanto a la mejor utilización de los recursos de la nube pública, servicios de optimización de costos, integración de #[em software] de terceros, arquitectura para diferentes cargas de trabajo, entre otro tipo de apoyos. 
              
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.size(src='@/assets/curso/temas/tema2/img38.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-2
                  h4 Proveedor de servicios gestionados (MSP)
                  p Socio que realmente se ocupa del entorno de nube pública del cliente y actúa como un equipo de infraestructura o DevOps externo, de acuerdo con los principios de confiabilidad del sitio.
            
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.size(src='@/assets/curso/temas/tema2/img39.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-2
                  h4 Revendedores
                  p Socio que brinda acceso a los servicios de nube pública a través de su propia consola. También se ocupan de la facturación y brindan soporte administrativo relacionado con la facturación.
  
          p Entre los beneficios típicos destacados por los propios #[em partners]  a los clientes se encuentran:



        .row.justify-content-center.align-items-center(data-aos="fade-rigth")
          .col-lg-12.col-12
            acordionA.mb-3(tipo="b" clase-tarjeta="tarjeta gris-claro")
              div(titulo="Optimización de gastos y más flexibilidad")
                .row.justify-content-center
                  .col-lg-6
                    p La compra de servicios por el cliente directamente del proveedor público de la nube o a través del socio es inicialmente exactamente el mismo al ser un modelo de pago por uso de los recursos consumidos. Sin embargo, en algunos casos un socio puede ofrecer mejores precios mediante la negociación directa con el proveedor, además del asesoramiento sobre las técnicas y enfoques efectivos de optimización de costos.
                    p La estrategia de compra por volumen, es decir, alta concentración de clientes y/o servicios el mismo proveedor o en un número reducido de ellos, se consigue que la facturación proporcionada por el socio sea más reducida, los socios pueden aportar más flexibilidad en los métodos de pago y en las fechas de vencimiento, entre otros aspectos relevantes a la fiscalidad o riesgos de fluctuación en los cambios de las monedas proporcionando una facturación en la moneda local. 
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema2/img40.png", alt="")
              
              div(titulo="El socio se ocupa de tu <i>Cloud</i>")
                .row.justify-content-center
                  .col-md-6
                    p.mb-0 Los proveedores desarrollan una red de asociaciones con el objetivo de crear centros de excelencia. Un socio calificado tiene un amplio conocimiento de los diferentes servicios ofrecidos por el proveedor y puede asesorarlo sobre las mejores prácticas y brindarle soporte de migración y planificación arquitectónica. 
                    p También puede consultar temas de desarrollo y operación, seguridad y estrategia de salida. De esta manera, el cliente puede concentrarse totalmente en las actividades de su negocio mientras un socio de confianza se encarga de los aspectos y habilitación de las funcionalidades de los servicios en la nube en su lugar.
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema2/img41.png", alt="")

              div(titulo="Especialistas disponibles en cualquier momento que los necesite")
                .row.justify-content-center
                  .col-md-6
                    p.mb-0 La escasez de personal preparado complica a las organizaciones la disponibilidad de profesionales a los equipos de infraestructura o de desarrollo de aplicaciones en entornos actuales como DevOps, un socio puede evitar la espera de meses de contratación asignando miembros de su equipo cuando sea requerido. Además de las habilidades necesarias, estos miembros estarían respaldados por otros arquitectos y expertos de soluciones certificados de alto nivel y directamente del proveedor.
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema2/img42.png", alt="")
              
              div(titulo="Soporte 24/7")
                .row.justify-content-center
                  .col-md-6
                    p.mb-0 Los socios pueden ofrecer asistencia las 24 horas, los 7 días de la semana en el idioma local y dentro de su zona horaria. El soporte de un socio es proporcionado por consultores y arquitectos certificados y capacitados y su objetivo es resolver el problema sin necesidad de planteárselo al proveedor. 
                    p En último término, un socio puede presentar el #[em ticket] en nombre del cliente directamente con el proveedor y escalar el problema a instancias superiores dentro de la organización de soporte del proveedor si es necesario. 
                    p Existe una gran variedad de programas de atención al cliente disponibles con la planificación proactiva de las actividades futuras con el cliente en los más avanzados.
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema2/img43.png", alt="")


              div(titulo="Servicios gestionados")
                .row.justify-content-center
                  .col-md-6
                    p.mb-0 La forma más avanzada de asociación con el proveedor es la provisión de servicios administrados (MSP), los socios de nivel MSP son capaces de ofrecer un paquete completo de servicios expertos para mantener la pila de aplicaciones del cliente en la nube funcionando 24 horas al día, 7 días a la semana.
                    p El objetivo es permitir que el departamento TI del cliente se concentre en las actividades principales del negocio mientras el socio se encarga del mantenimiento, las reparaciones y la configuración de la infraestructura. 
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema2/img44.png", alt="")
        .py-3
        p A modo de clasificación general resumida, únicamente como ayuda para la identificación de las actividades principales en un mercado competitivo entre socios cada vez más diverso y variado, a continuación, se indican los roles y actividades principales de los #[em partners].  El objetivo de esta introducción es la de diferenciar la labor de los #[em partners] con respecto al rol y actividades de los proveedores de forma más clara.
        .py-3
        TabsB.color-primario
          .py-4.py-md-5(titulo="<i>Partner</i> como proveedor" :icono="require('@/assets/curso/temas/tema2/img45.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Utiliza su experiencia para analizar modelos comerciales.

                  li
                    i.fas.fa-chevron-right
                    | Crea servicios en la nube personalizados para satisfacer las necesidades de negocio de los clientes.

                  li 
                    i.fas.fa-chevron-right
                    | Admite solicitudes de usuarios finales.

                  li
                    i.fas.fa-chevron-right
                    | Cobra tarifas a los clientes.
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema2/img49.svg', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="<i>Partner</i> como comprador" :icono="require('@/assets/curso/temas/tema2/img46.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Asesora a los clientes para garantizar que una solución en la nube se utilice en todo su potencial.

                  li
                    i.fas.fa-chevron-right
                    | Aprovecha recursos propios de valor añadido (una red extensa, una marca de renombre y escala) para comprar servicios en la nube que se ajustan al modelo comercial de un cliente.

                  li 
                    i.fas.fa-chevron-right
                    | Trabaja junto con un cliente para la instalación de la aplicación de servicio en la nube que compra.
                  
                  li 
                    i.fas.fa-chevron-right
                    | Proporciona soporte al servicio en nube.
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema2/img50.svg', alt='Texto que describa la imagen')
     
          .py-4.py-md-5(titulo="<i>Partner</i> como soporte" :icono="require('@/assets/curso/temas/tema2/img47.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Actúa como comerciante vendiendo el #[em software] del proveedor a sus clientes nuevos y existentes.

                  li
                    i.fas.fa-chevron-right
                    | Trabaja con un cliente para instalar y respaldar la infraestructura tecnológica necesaria para ejecutar un servicio en la nube (por ejemplo, red y alojamiento). Mientras que el proveedor de servicios en la nube crea y actualiza el #[em software], el socio gestiona las relaciones entre el proveedor y los clientes.
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema2/img51.svg', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="<i>Partner</i> como orquestador de segundo nivel" :icono="require('@/assets/curso/temas/tema2/img48.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Trabaja en estrecha colaboración con los proveedores para agregar e integrar varios servicios en la nube para un cliente.

                  li
                    i.fas.fa-chevron-right
                    | Interactúa con sus clientes únicamente a través de un ecosistema de segundo nivel

                  li 
                    i.fas.fa-chevron-right
                    | Proporciona recomendaciones para servicios en la nube o para obtener el máximo valor de un servicio según los datos de uso del cliente.

                  li
                    i.fas.fa-chevron-right
                    | Diseña portales web fáciles de usar con gestión de identidad para el cliente.
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema2/img52.svg', alt='Texto que describa la imagen')


        Separador
        #t_2_4.titulo-segundo.color-acento-contenido
         h2 2.4 Desarrollador de servicios de nube

        p Es el responsable de diseñar, desarrollar, probar y mantener la implementación de un servicio en la nube, esto puede implicar componer la implementación del servicio a partir de implementaciones de servicios existentes.
        p El integrador de servicios en la nube y el desarrollador de componentes de servicios en la nube describen sub-roles del desarrollador de servicios en la nube, donde el integrador de servicios en la nube se ocupa de la composición de un servicio desde otros servicios y donde el desarrollador del componente del servicio en la nube se ocupa del diseño, creación, prueba y mantenimiento de componentes de servicio individuales. Esto incluye implementaciones de servicios y componentes de servicios que implican interacciones con proveedores de servicio homólogos.
        p Las actividades de computación en la nube del desarrollador de servicios en la nube incluyen:
        
        .bg2.mb-4(data-aos="fade-down")
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Diseñar, crear y mantener componentes de servicio
                p Esta actividad implica la gestión de la relación comercial del proveedor con el cliente en la nube, que incluye:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Diseñar y crear componentes de #[em software] que son parte de la implementación de un servicio.

                  li
                    i.fas.fa-chevron-right
                    | Crear la funcionalidad que se ofrece a los usuarios del servicio, lo que también implica conectar los componentes del servicio a los sistemas de soporte operativo del proveedor, de modo que la implementación del servicio pueda ser monitoreada y controlada.

                  li 
                    i.fas.fa-chevron-right
                    | Procesar informes de problemas relacionados con el funcionamiento de la implementación de un servicio.

                  li
                    i.fas.fa-chevron-right
                    | Proporcionar arreglos para las implementaciones de servicios.

                  li
                    i.fas.fa-chevron-right
                    | Proporcionar mejoras a las implementaciones de servicios.
       
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img53.svg', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Redactar servicios
                p Esta actividad consiste en la composición de servicios utilizando servicios existentes e implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Crear funcionalidad de servicio mediante la composición de uno o más servicios existentes proporcionados en otro lugar.

                  li
                    i.fas.fa-chevron-right
                    | Describir los aspectos técnicos del servicio (#[em interfaces] funcionales, SLA, entre otros).

                  li 
                    i.fas.fa-chevron-right
                    | Diseñar una #[em interfaz] para el cliente del servicio en la nube que represente los servicios compuestos a través de múltiples ofertas de proveedores de servicios en la nube.

                  li 
                    i.fas.fa-chevron-right
                    | Realizar una composición que pueda implicar la intermediación, agregación o arbitraje de los servicios existentes.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img54.svg', alt='')
           
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-md-6.mb-4.mb-md-0
                h4.py-2 Servicios de prueba/test
                p Esta actividad tiene por objetivo probar los componentes y servicios creados por el desarrollador de servicios en la nube. Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Realizar pruebas de los componentes que componen la implementación de un servicio para asegurar que realizan la funcionalidad del servicio completa y correctamente.

                  li
                    i.fas.fa-chevron-right
                    | Garantizar la interoperabilidad con los servicios en la nube proporcionados por un proveedor de servicios en la nube homólogo.
                  li 
                    i.fas.fa-chevron-right
                    | Pruebas que deben incluir la verificación de que las conexiones a los sistemas de soporte operativo del proveedor de servicios en la nube funcionan correctamente. Como resultado, normalmente es necesario realizar algunas de las pruebas en un área de prueba del #[em Datacenter] del proveedor de servicios en la nube.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema2/img55.svg', alt='')
        Separador
        #t_2_5.titulo-segundo.color-acento-contenido
         h2 2.5 Auditor de servicios en la nube

        p El auditor de la nube es el responsable de realizar una auditoría de la provisión y uso de los servicios en la nube, una auditoría de la nube generalmente cubre las operaciones, el rendimiento y la seguridad y examina si se cumple un conjunto específico de criterios de auditoría. 

        .cajon.color-secundario.bg-9.p-4.mb-4
          p Los criterios de auditoría son el conjunto de requisitos a verificar y que pueden proceder de normas internacionales (por ejemplo: normas ISO), regulatorias (por ejemplo: del propio sector económico o industrial en el que la organización desarrolla sus actividades de negocio principales), normativas (por ejemplo: políticas internas de la organización), legales (por ejemplo: leyes para el almacenamiento, intercambio y/o tratamientos de datos como el artículo 2 de la Ley 1581 de 2012, de propiedad intelectual, de privacidad como el artículo 4 de la Ley 1581 de 2012) y/o contractuales (por ejemplo: compromisos en los contratos).

        p En el área de las normas internacionales, se ha mencionado la relevancia en el cumplimiento de los criterios para la seguridad de la información indicados en la norma ISO/IEC 27001.
        p Este estándar se complementa con adaptaciones específicas en su interpretación a aspectos como los servicios en nube (ISO 27017), privacidad (ISO 27701) o en sectores de actividad de alta sensibilidad como sector hospitalario (ISO 27799) para la interpretación de controles en seguridad, entre otras guías de apoyo de la “serie 27000” de publicaciones relacionadas.

     
        .row.justify-content-center(data-aos="fade-left")
          .col-lg-10.fondopink
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-lg-8
                h5 Las actividades de computación en la nube del auditor de servicios en la nube incluyen:

            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-lg-7
                h4.subtitulo2 Realizar una auditoría
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Solicitar u obtener evidencia de auditoría.

                  li
                    i.fas.fa-chevron-right
                    | Realizar las pruebas necesarias en el sistema que se audita.

                  li 
                    i.fas.fa-chevron-right
                    | Obtener evidencia mediante programación, a través de un conjunto de #[em interfaces] proporcionadas por el sistema que se audita.

                  li
                    i.fas.fa-chevron-right
                    | Redactar la evidencia, si es necesario, para proteger información sensible o información sujeta a control regulatorio (por ejemplo: PII).

                  li 
                    i.fas.fa-chevron-right
                    | Comparar la evidencia de auditoría obtenida con los criterios de auditoría descritos por el esquema o estándar de auditoría que se está utilizando.
              .col-lg-4.col-8
                img(src='@/assets/curso/temas/tema2/img56.svg', alt='')
            
            img(src='@/assets/curso/temas/tema2/blanca.svg', alt='')
    
            .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-lg-5
                h4.subtitulo2 Informar los resultados de la auditoría
                img(src='@/assets/curso/temas/tema2/img57.svg', alt='').py-2
              .col-lg-7
                p El informe documentado y la forma de entrega, puede ser prescrito por el esquema de auditoría que se está utilizando. Los resultados de la auditoría pueden entregarse al proveedor de servicios en la nube, o posiblemente a solicitud de un CSP, según la situación comercial o el contexto legal. Esta actividad implica:
                ul.lista-ul--color
                  li 
                    i.fas.fa-chevron-right
                    | Proporcionar un informe documentado de los resultados de la realización de una auditoría, por ejemplo: en un determinado servicio en la nube, en un proveedor de servicios en la nube o en el uso de un servicio en la nube por parte del cliente.
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
