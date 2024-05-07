<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 Arquitectura Cloud Computing
    .container.fondo1
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-5.col-8.p-3
          img.px-3(alt="" src="@/assets/curso/temas/tema1/img1.svg")
        .col-lg-6.col-12.mb-0
          p La arquitectura de la nube establece la forma en la que se integran las diferentes tecnologías para crear los entornos de TI, que extraen, agrupan y comparten los recursos escalables de una red, es decir es la organización de los componentes y las funciones que se necesitan para diseñar una nube y obtener una plataforma en línea en la que se puedan ejecutar las aplicaciones, de manera efectiva, y lógica, posibilitando de esta forma trabajar conjuntamente en un mismo objetivo,  robusteciendo los puntos fuertes y minimizando los puntos débiles.
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido
         h2 1.1 Tipos de servicios y modelos Cloud 

        .row.justify-content-center.align-items-center(data-aos="fade-rigth")
          .col-lg-4.justify-content-center
            p Los servicios tradicionales se categorizan en tres tipos
      
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-3.col-12.mb-4-lg-0.py-2
            .tarjeta.resaltado-azul.p-4
              img.recurso(src='@/assets/curso/temas/tema1/img2.svg' alt='AvatarTop')
              h4.py-2.text-center.txt-naranja Pass
              p.text-white.text-center Se refiere a un servicio que ofrece una plataforma para desarrollar y ejecutar aplicaciones, usualmente incluye un lenguaje de programación, acceso a APIS, farmework de desarrollo, bases de datos entre otros.
    
          .col-lg-3.col-12.mb-4-lg-0
            .tarjeta.resaltado-azul.p-4
              img.recurso(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
              h4.py-2.text-center.txt-naranja Sass
              p.text-center.text-white Es el acceso a Aplicaciones o plataformas totalmente administradas por el proveedor, el cliente solo requiere de un navegador y conexión a internet para acceder a los servicios contratados.
          
          .col-lg-3.col-12.mb-4-lg-0
            .tarjeta.resaltado-azul.p-4
              img.recurso(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
              h4.py-2.text-center.txt-naranja Idas
              p.text-center.text-white Proporciona el hardware virtualizado en forma de máquinas virtuales en diferentes instancias de Sistemas operativos o Contenedores generalmente docker, incluye de igual manera el networking. 
        .py-4
        p Los proveedores de servicios de computación en la nube (CSP) actuales, ofrecen una variedad de servicios disponibles y listos para dar respuesta a los problemas o necesidades del cliente, estos servicios pueden ser adquiridos solos independientes o en combinación de varios de ellos, la oferta va desde algunos considerados “básicos”  se conocen de esta manera porque proporcionan una capa de abstracción sobre los recursos físicos en el centro de datos en la nube.
        p En términos generales los servicios más importantes son: servicios de computo, almacenamiento y redes, a continuación de mencionan de manera general algunos de los servicios más comunes o de mayor demanda por parte de los clientes:
        .py-4
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-8.col-12.mb-4-lg-0
            LineaTiempoD.color-acento-botones
              .row(numero="1" titulo="Servicios informáticos")
                .col-md-8.mb-4.mb-md-0
                  p.text-small Generalmente son los servicios más importantes, representan la columna vertebral para los clientes, acá se encuentra regularmente el acceso a máquinas virtuales, instancias de distintos tipos, contenedores docker, clúster de alto rendimiento, normalmente usados para el alojamiento de aplicaciones y servicios web.
              .row(numero="2" titulo="Servicios de almacenamiento")
                .col-md-8.mb-4.mb-md-0
                  p.text-small Este tipo de servicio ofrece una variedad que va desde el almacenamiento de objetos y archivos, bases de datos SQL tradicionales como MySQL, PostgreSQL, Oracle, SQLServer o bases de datos NOSQL.         
              .row(numero="3" titulo="Servicios se networking (Acceso a Redes)")
                .col-md-8.mb-4.mb-md-0
                  p.text-small Los accesos a los servicios de la computación en la nube son alojados en internet para lograr acceder a los servicios contratados PaaS, SaaS, LaaS, se requiere contar con acceso desde y hacia redes externas, regularmente al crear un servicio en la nube se incluye la creación de una red virtual que permita la interconexión.
              .row(numero="4" titulo="Servicios de analítica")
                .col-md-8.mb-4.mb-md-0
                  p.text-small El gran crecimiento en los datos que con lleva a la generación de la big Data obliga o posibilita que las empresas puedan adquirir servicios que realicen el análisis de los datos de tal manera que se facilite la inteligencia de negocios, aqui se incluyen las bodegas de datos, herramientas de transformación y extracción (ETL), y herramientas de big Data.
              .row(numero="5" titulo="Servicios de autenticación o control de identidad")
                .col-md-8.mb-4.mb-md-0
                  p.text-small Se ofrecen herramientas de control de acceso basado en roles, por supuesto la seguridad debe ser parte fundamental en el acceso a los servicios, por lo que el control de la identidad, se requiere mediante la gobernanza, autenticación, autorización en el control del acceso.
              .row(numero="6" titulo="Servicios IoT")
                .col-md-8.mb-4.mb-md-0
                  p.text-small Las tecnologías IoT precisamente se han convertido en un disparador de la generación de datos que deben ser capturados, almacenados y procesados, por esta razón los proveedores ofrecen motores de procesamiento de flujo que permiten el trabajo en tiempo real con los datos generados por estos dispositivos.
              .row(numero="7" titulo="Servicios de IA")
                .col-md-8.mb-4.mb-md-0
                  p.text-small En este tipo de servicios se incluye el aprendizaje profundo y automático, ofrece aplicaciones para crear, capacitar y probar modelos de aprendizaje automático, con soporte de GPU, en forma de servicios SaaS a los que se accede a través de un navegador.
              .row(numero="8" titulo="Servicios de gestión y gobernanza")
                .col-md-8.mb-4.mb-md-0
                  p.text-small Incluyen funciones de recuperación ante desastres como copia de seguridad y replicación, servicios de regulación de implementación que hacen cumplir las reglas sobre los tipos y la configuración de servicios que se pueden usar, automatización de la configuración y servicios de monitoreo que brindan información (en algunos casos, en tiempo real o alertas casi en tiempo real) sobre problemas de rendimiento y seguridad.,
 
          .col-lg-4.col-7 
            img(alt="" src="@/assets/curso/temas/tema1/img5.svg")

        Separador
        #t_1_2.titulo-segundo.color-acento-contenido
         h2 1.2 Capas funcionales: usuario, acceso, servicio y recursos
        .row.justify-content-center.t1-1.mb-5(data-aos="fade-down")
          .col-lg-10      
            .bloque-texto-g.color-secundario.p-sm-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img6.png')})`}")
              .bloque-texto-g__texto.p-4
                p.mb-0 Cada proveedor de servicios cloud dispone de una arquitectura propia como elemento diferenciador del resto de competidores de mercado y/o para adaptarse mejor a la evolución de sus propios servicios tradicionales y necesidades de sus clientes actuales y potenciales.<br><br>
                p.mb-0 Si bien existen diferencias marcadas entre las nubes públicas o privadas, a continuación se mencionan los diferentes componentes funcionales de alto nivel presentes en una arquitectura de nube en términos generales o genérica.
        
        .cajon.color-secundario.bg-9.p-4.mb-4
          p Los componentes funcionales representan conjuntos de funciones que se requieren para realizar las actividades de computación en nube para los diversos roles y sub-roles involucrados, de acuerdo con una abstracción más general la arquitectura funcional define unos componentes funcionales divididos en capas en las cuales cada una determina unas funciones específicas y existe una conexión sucesiva entre cada capa dada a través de interfaces. 
        .py-3
        p La ISO /IEC 17789:2014 determina cuatro capas con sus respectivas funciones:
        .py-3
        TabsB.color-primario
          .py-4.py-md-5(titulo="Capa de usuario" :icono="require('@/assets/curso/temas/tema1/img7.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p  La capa de usuario es la interfaz de usuario a través de la cual un cliente de servicios en la nube interactúa con el proveedor de servicios en la nube y con los servicios en la nube, realiza actividades administrativas relacionadas con el cliente y monitorea los servicios adquiridos por su organización.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img7.1.svg', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="Capa de acceso" :icono="require('@/assets/curso/temas/tema1/img8.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img8.1.svg', alt='Texto que describa la imagen')
     
          .py-4.py-md-5(titulo="Capa de servicios" :icono="require('@/assets/curso/temas/tema1/img9.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p Contiene la implementación de los servicios que proporciona el proveedor. Esta capa contiene y controla los componentes de software que implementan los servicios, sin incluir aquellos componentes subyacentes como los hipervisores, los sistemas operativos, los controladores de dispositivos, entre otros; y se encarga de ofrecer los servicios en la nube a los usuarios a través de la capa de acceso.
                p El software de implementación de servicios en esta capa, a su vez, se basa en las capacidades disponibles en la capa de recursos, para proporcionar los servicios que se ofrecen y así garantizar que se cumplan los requisitos de cualquier acuerdo de nivel de servicio (SLA-Service Level Agreement), por ejemplo, mediante el uso de suficientes recursos.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img9.1.svg', alt='Texto que describa la imagen')
      
          .py-4.py-md-5(titulo="Capa de recursos" :icono="require('@/assets/curso/temas/tema1/img10.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p En esta capa es donde residen los recursos y que incluye equipamiento típico de un Datacenter como: servidores, switches y routers de red, dispositivos de almacenamiento y también el software correspondiente no específico de la nube que se ejecuta en los servidores y otros equipos como sistemas operativos host, hipervisores, controladores de dispositivos y software de gestión de sistemas genérico.
                |La capa de recursos también representa y aloja la funcionalidad de la red de transporte en la nube, necesaria para la conectividad de red subyacente entre el proveedor de servicios en la nube y los usuarios, así como en la parte interna del propio proveedor de servicios en la nube y sus proveedores de servicios de soporte asociados en la cadena de provisión.
                |Tenga en cuenta que para que un proveedor de servicios en la nube proporcione servicios consistentes con el SLA, puede requerir conexiones dedicadas y/o seguras entre los usuarios y el proveedor de servicios en la nube.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img10.1.svg', alt='Texto que describa la imagen')
        .py-4  
        p #[b Funciones multicapa.] Las funciones multicapa incluyen una serie de componentes funcionales que interactúan con los componentes funcionales de las cuatro capas anteriores para proporcionar capacidades de apoyo que incluyen, entre otras:
        
        .bg2.mb-4(data-aos="fade-down")
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                p Capacidades de los #[b sistemas de soporte operativo] (administración, monitoreo, aprovisionamiento y mantenimiento en tiempo de ejecución).
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img11.svg', alt='')
           
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img12.svg', alt='')
              .col-md-5.mb-4.mb-md-0
                p Capacidades de los #[b sistemas de soporte empresarial] (catálogo de productos, facturación y gestión financiera).
              
            
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                p Capacidades de los #[b sistemas de seguridad] (autenticación, autorización, auditoría, validación, cifrado).
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='')
           
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img14.svg', alt='') 
              .col-md-5.mb-4.mb-md-0
                p Capacidades de #[b integración]
                | (vinculación de diferentes componentes para lograr la funcionalidad requerida).
              
            
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                p Capacidades de #[b apoyo al desarrollo] (que implican la creación, prueba y gestión del ciclo de vida de servicios y componentes de servicio)
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img15.svg', alt='')

        Separador
        #t_1_3.titulo-segundo.color-acento-contenido
         h2 1.3 Relaciones entre la vista del usuario y la funcionalidad

        p La computación en la nube desde la mirada del usuario comprende el reconocimiento de algunas actividades y conceptos de los cuales debe de tener claridad, a continuación, se mencionan algunos de esos conceptos y actividades necesarias para adquirir y/o acceder a servicios ofrecidos a través de la nube.

        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Actividades de computación en la nube
        .cajon.cajon-gris.p-4.mb-4
          p.mb-4 Los servicios en la nube son los elementos esenciales de la computación en la nube, son los diferentes tipos de capacidades ofertados por un proveedor de servicios de Cloud, en la actualidad son muchos los diferentes tipos de servicios ofertados, pero de acuerdo al estándar ISO/IEC 17788, son tres los tipos de servicios o capacidades proporcionados por el servicio en la nube, estos son:
        
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Roles y subroles
        .cajon.cajon-gris.p-4.mb-4
          p.mb-4 Un rol es un conjunto de actividades de computación en la nube que tienen un propósito común. A continuación, se mencionarán tres roles esenciales:

        .row.justify-content-center.d-none.d-md-flex.mb-5(data-aos="fade-down")
          .col-lg-9
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                img.d-none.d-md-block(src='@/assets/curso/temas/tema1/infografia.svg',alt='') 
                img.d-block.d-md-none(src='@/assets/curso/temas/tema1/infomobile.svg',alt='')
              
              .tarjeta.bg4.p-3(x="4%" y="50%" numero="1")
                .row.space-between.img-infog1.align-items-center.mb-0
                p.mb-0 Cliente de servicio en la nube (CSC): usuario o empresa que mantiene una relación comercial con el propósito de utilizar servicios en la nube ofertados por un proveedor.
              
              .tarjeta.bg4.p-3(x="28%" y="50%" numero="2")
                .row.space-between.img-infog1.align-items-center.mb-0
                p.mb-0 Proveedor de servicios en la nube (CSP): es la empresa quien ofrece y pone a disposición de los clientes un conjunto de servicios, en todas las categorías a fin de dar solución y respuesta a cada cliente de acuerdo a sus particularidades o necesidades.
              
              .tarjeta.bg4.p-3(x="51.7%" y="50%" numero="3")
                .row.space-between.img-infog1.align-items-center.mb-0
                p.mb-0 Partner de servicios en la nube (CSN): parte que se dedica a proporcionar soporte o asistencia a las actividades del CSP, del CSC o de ambos.
              
              .tarjeta.bg4.p-3(x="76%" y="50%" numero="4")
                .row.space-between.img-infog1.align-items-center.mb-0
                  p.mb-0 Un sub-rol es un subconjunto de las actividades de computación en la nube para un rol determinado. Diferentes sub-roles pueden compartir las actividades de computación en la nube asociadas con un rol determinado.

        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Partes
        .row.align-items-center.mb-4
          .col-lg-1.col-md-3.col-7.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/corporacion.svg', alt='')
          .col-lg-10.col-md-9(data-aos="fade-left")
            p Una parte es una persona física o jurídica, incorporada o no, o un grupo de ambas, conocidas como partes interesadas.
            p Una parte puede asumir más de un rol en cualquier momento dado y puede participar en un subconjunto específico de actividades de ese rol, una parte interesada puede ser entre otras: grandes corporaciones, pequeñas y medianas empresas, departamentos gubernamentales, instituciones académicas y ciudadanos a nivel particular.

        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Servicios en la nube
        .cajon.cajon-gris.p-4.mb-4
          p.mb-4 La Los servicios en la nube son los elementos esenciales de la computación en la nube, son los diferentes tipos de capacidades ofertados por un proveedor de servicios de Cloud, en la actualidad son muchos los diferentes tipos de servicios ofertados, pero de acuerdo al estándar ISO/IEC 17788, son tres los tipos de servicios o capacidades proporcionados por el servicio en la nube, estos son:
        
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-3.col-12.mb-4-lg-0.py-2
            .tarjeta.resaltado-azul.p-4.tamano-tarjeta
              img.recurso(src='@/assets/curso/temas/tema1/img2.svg' alt='AvatarTop')
              h5.py-3.text-center.txt-naranja Aplicación
              p.text-white.text-center.text-small Se encuentra en la capa más alta, es un servicio ofrecido bajo demanada a través de multitenencia, es accesible por medio de un navegador web, el usuario no tiene control sobre ella, y posibilita la reducción de costos de soporte y mantenimiento.
          
          .col-lg-3.col-12.mb-4-lg-0
            .tarjeta.resaltado-azul.p-4.tamano-tarjeta
              img.recurso(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
              h5.py-2.text-center.txt-naranja Servicios de networking (Acceso a Redes)
              p.text-center.text-white.text-small Aquí, el proveedor proporciona la plataforma para el desarrollo de aplicaciones, así como su mantenimiento y gestión. Es decir, ofrece todo lo que se necesita para completar el ciclo de vida y despliegue de dichas aplicaciones o servicios web. El usuario carece de control sobre la infraestructura de almacenamiento o redes.
          
          .col-lg-3.col-12.mb-4-lg-0
            .tarjeta.resaltado-azul.p-4.tamano-tarjeta
              img.recurso(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
              h5.py-3.text-center.txt-naranja Infraestructura
              p.text-center.text-white.text-small En éste, el cliente adquiere del proveedor externo todos los recursos. Normalmente se lleva a cabo mediante una plataforma de virtualización. De los tres tipos de servicios, es el que mayor control otorga al usuario y, por ende, el que tiene mayor complejidad de uso.
        .py-3
        p Los servicios en la nube también se agrupan en categorías (categoría corresponde a un grupo de servicios en la nube), las cuales poseen un conjunto común de cualidades. Los servicios de estas categorías pueden incluir capacidades de uno o más de los tipos de capacidades en la nube anteriores, entre otros pueden ser:
    
    .container.fondo1
      .row.justify-content-center.align-items-center(data-aos="fade-right").p-3
        .col-lg-11
          img(src='@/assets/curso/temas/tema1/img16.svg' alt='')
      
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p Estos servicios fueron descritos en el componente formativo denominado “Generalidades de la Computación en la Nube” se invita a revisarlo, para recordar o profundizar estas temáticas.
      .py-3

        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Modelos de implementación en la nube
      p Los modelos de implementación en la nube son una forma en la que puede organizar en función del control y el intercambio de recursos físicos o virtuales. Como se vio anteriormente en este mismo curso, los modelos de implementación en la nube son:
        
        .row.justify-content-center.align-items-center(data-aos="fade-right").p-3
          .col-lg-8
            img(src='@/assets/curso/temas/tema1/img17.svg' alt='')
          
      p Existen algunos aspectos que se llaman transversales, porque se aplican a múltiples roles individuales o componentes funcionales, por ejemplo, la seguridad.
        
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 La vista funcional
        
        .row.justify-content-center.t1-1.mb-5(data-aos="fade-down")
          .col-lg-10      
            .bloque-texto-g.color-secundario.p-sm-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img18.png')})`}")
              .bloque-texto-g__texto.p-4
                p.mb-0 Este punto de vista funcional trata de aportar una visión similar al del modelo OSI (Open Systems Interconnection) de “Interconexión de Sistemas Abiertos” en el ámbito de los protocolos de comunicación de las redes informáticas, es decir, las funcionalidades que cada capa debe aportar en relación al resto en relación a las dependencias entre funciones.
        
      p Esto permite situar a los fabricantes y sus tecnologías específicas dentro de los objetivos de funcionalidad concretos dentro de cada capa para que todos los componentes de todas las capas del sistema tengan sentido encajando unos con otros según lo esperado e independientemente de las diferencias particulares en prestaciones, fiabilidad, calidad, rendimiento, entre otras que cada vendedor incorpore en su caso particular.
      p Según este sentido, los conceptos presentes en la vista funcional son: las capas funcionales y los componentes funcionales. Se ampliará la información sobre cada uno de ellos.
        
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Capas funcionales

        .cajon.cajon-gris.p-4.mb-4
          p.mb-4La arquitectura funcional está segmentada en capas junto a un conjunto de funciones multicapa, cada capa representa un conjunto de componentes funcionales que proporcionan capacidades similares o tienen un propósito común.
          p Las siguientes cuatro capas representadas son de referencia típica, pero se debe tener en cuenta que no todas las capas o componentes funcionales requeridos están necesariamente instanciados en un sistema de computación en la nube específico:

      .row.justify-content-center.align-items-center(data-aos="fade-rigth")
        .col-lg-12.col-12
          acordionA.mb-3(tipo="b" clase-tarjeta="tarjeta gris-claro")
            div(titulo=" Capa de usuario")
              .row.justify-content-center.align-items-center(data-aos="fade-rigth")
                .col-md-5
                  p Incluye los componentes funcionales que respaldan las actividades de la nube de los Clientes de Servicios en la Nube y los Partners de Servicios en la Nube.
                .col-md-6.col-9
                  img(src="@/assets/curso/temas/tema1/img19.png", alt="")
            
            div(titulo="Capa de acceso")
              .row.justify-content-center.align-items-center(data-aos="fade-rigth")
                .col-md-5
                  p.mb-0 Incluye componentes funcionales que facilitan la distribución de funciones y la interconexión.
                .col-md-6.col-9
                  img(src="@/assets/curso/temas/tema1/img20.png", alt="")

            div(titulo="Capa de servicio")
              .row.justify-content-center.align-items-center(data-aos="fade-rigth") 
                .col-md-5
                  p.mb-0 Incluye componentes funcionales que proporcionan los propios servicios en la nube más las capacidades administrativas y comerciales relacionadas, y las capacidades de orquestación necesarias para realizarlos.
                .col-md-6.col-9
                  img(src="@/assets/curso/temas/tema1/img21.png", alt="")
          
            div(titulo="Capa de recursos")
              .row.justify-content-center.align-items-center(data-aos="fade-rigth") 
                .col-md-5
                  p.mb-0  Incluye los componentes funcionales que representan los recursos necesarios para implementar el sistema de computación en la nube.
                .col-md-6.col-9
                  img(src="@/assets/curso/temas/tema1/img22.png", alt="")






</template>

<script>
export default {
  name: 'Tema1',
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
