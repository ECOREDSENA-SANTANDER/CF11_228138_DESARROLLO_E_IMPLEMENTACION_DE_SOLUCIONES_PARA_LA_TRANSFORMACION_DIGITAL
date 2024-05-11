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
    
          .col-lg-3.col-12.mb-4-lg-0.py-2
            .tarjeta.resaltado-azul.p-4
              img.recurso(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
              h4.py-2.text-center.txt-naranja Sass
              p.text-center.text-white Es el acceso a Aplicaciones o plataformas totalmente administradas por el proveedor, el cliente solo requiere de un navegador y conexión a internet para acceder a los servicios contratados.
          
          .col-lg-3.col-12.mb-4-lg-0.py-2
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
 
          .col-lg-4.col-7.py-2 
            img(alt="" src="@/assets/curso/temas/tema1/img5.svg")

        Separador
        #t_1_2.titulo-segundo.color-acento-contenido
         h2 1.2 Capas funcionales: usuario, acceso, servicio y recursos
        .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
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
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema1/img7.1.svg', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="Capa de acceso" :icono="require('@/assets/curso/temas/tema1/img8.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema1/img8.1.svg', alt='Texto que describa la imagen')
     
          .py-4.py-md-5(titulo="Capa de servicios" :icono="require('@/assets/curso/temas/tema1/img9.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p Contiene la implementación de los servicios que proporciona el proveedor. Esta capa contiene y controla los componentes de software que implementan los servicios, sin incluir aquellos componentes subyacentes como los hipervisores, los sistemas operativos, los controladores de dispositivos, entre otros; y se encarga de ofrecer los servicios en la nube a los usuarios a través de la capa de acceso.
                p El software de implementación de servicios en esta capa, a su vez, se basa en las capacidades disponibles en la capa de recursos, para proporcionar los servicios que se ofrecen y así garantizar que se cumplan los requisitos de cualquier acuerdo de nivel de servicio (SLA-Service Level Agreement), por ejemplo, mediante el uso de suficientes recursos.
              .col-md-4.col-8
                figure
                  img(src='@/assets/curso/temas/tema1/img9.1.svg', alt='Texto que describa la imagen')
      
          .py-4.py-md-5(titulo="Capa de recursos" :icono="require('@/assets/curso/temas/tema1/img10.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-8.mb-4.mb-md-0
                p En esta capa es donde residen los recursos y que incluye equipamiento típico de un Datacenter como: servidores, switches y routers de red, dispositivos de almacenamiento y también el software correspondiente no específico de la nube que se ejecuta en los servidores y otros equipos como sistemas operativos host, hipervisores, controladores de dispositivos y software de gestión de sistemas genérico.
                |La capa de recursos también representa y aloja la funcionalidad de la red de transporte en la nube, necesaria para la conectividad de red subyacente entre el proveedor de servicios en la nube y los usuarios, así como en la parte interna del propio proveedor de servicios en la nube y sus proveedores de servicios de soporte asociados en la cadena de provisión.
                |Tenga en cuenta que para que un proveedor de servicios en la nube proporcione servicios consistentes con el SLA, puede requerir conexiones dedicadas y/o seguras entre los usuarios y el proveedor de servicios en la nube.
              .col-md-4.col-8
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
          
          .col-lg-3.col-12.mb-4-lg-0.py-2
            .tarjeta.resaltado-azul.p-4.tamano-tarjeta
              img.recurso(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
              h5.py-2.text-center.txt-naranja Servicios de networking (Acceso a Redes)
              p.text-center.text-white.text-small Aquí, el proveedor proporciona la plataforma para el desarrollo de aplicaciones, así como su mantenimiento y gestión. Es decir, ofrece todo lo que se necesita para completar el ciclo de vida y despliegue de dichas aplicaciones o servicios web. El usuario carece de control sobre la infraestructura de almacenamiento o redes.
          
          .col-lg-3.col-12.mb-4-lg-0.py-2
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
        
        .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
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
                .col-md-6.col-9.py-2
                  img(src="@/assets/curso/temas/tema1/img20.png", alt="")

            div(titulo="Capa de servicio")
              .row.justify-content-center.align-items-center(data-aos="fade-rigth") 
                .col-md-5
                  p.mb-0 Incluye componentes funcionales que proporcionan los propios servicios en la nube más las capacidades administrativas y comerciales relacionadas, y las capacidades de orquestación necesarias para realizarlos.
                .col-md-6.col-9.py-2
                  img(src="@/assets/curso/temas/tema1/img21.png", alt="")
          
            div(titulo="Capa de recursos")
              .row.justify-content-center.align-items-center(data-aos="fade-rigth") 
                .col-md-5
                  p.mb-0  Incluye los componentes funcionales que representan los recursos necesarios para implementar el sistema de computación en la nube.
                .col-md-6.col-9
                  img(src="@/assets/curso/temas/tema1/img22.png", alt="")

      .row.py-4
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Componentes funcionales
      .row 
        .col-lg-9
          .cajon.cajon-gris.p-4.mb-4
            p.mb-4 Un componente funcional es un bloque de construcción funcional necesario para participar en una actividad, respaldado por una implementación. Las capacidades de un sistema de computación en la nube están completamente definidas por el conjunto de componentes funcionales implementados.
            p.mb4 Existen funciones multicapa que proporcionan capacidades que se utilizan en múltiples capas funcionales y que se agrupan en subconjuntos, entre ellos se puede encontrar:
        .col-lg-3
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              | Apoyo al desarrollo.
            li
              i.fas.fa-chevron-right
              | Integración.
            li 
              i.fas.fa-chevron-right
              | Sistemas de seguridad.
            li
              i.fas.fa-chevron-right
              | Sistemas de apoyo operativo.
            li
              i.fas.fa-chevron-right
              | Sistemas de apoyo empresarial.

      #menu1.row.justify-content-center.mb-5(data-aos="fade")
        .col-lg-12
          img(src='@/assets/curso/temas/menu.png')
        .col-lg-11    
          .tarjeta.fondo-menu.mt-n5.p-4
            .row.justify-content-center
              .menu7.mb-3
                .caja.p-3
                  img.m-auto.mb-3(src='@/assets/curso/temas/tema1/01.svg' alt='')
                  a(href="#1", title="Redes de datos").mb-0 Capas de usuario
              .menu7.mb-3
                .caja.p-3
                  img.m-auto.mb-3(src='@/assets/curso/temas/tema1/02.svg' alt='')
                  a.indicador__container(href="#2", title="Modelos de referencia" @mouseover="mostrarIndicador = false").mb-0 Capas de acceso
                    .indicador--click(v-if="mostrarIndicador")
              .menu7.mb-3
                .caja.p-3
                  img.m-auto.mb-3(src='@/assets/curso/temas/tema1/03.svg' alt='')
                  a(href="#3", title="Modelo de referencia TCP /IP").mb-0 Capa de servicio
        

      .row.py-4
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Capas de usuario
      
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.size(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h4 La función de usuario
                  p Este componente funcional da soporte al usuario para poder acceder y utilizar los servicios en la nube. 
                  p En algunos casos, este componente funcional podría ser tan simple como un navegador que se ejecuta en un dispositivo de usuario. En otros casos, podría implicar un sistema empresarial sofisticado que ejecute procesos de negocio, aplicaciones, middleware e infraestructura asociada.

            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.size(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h4 La función comercial
                  p Apoya las actividades de computación en la nube del Gerente comercial del Cliente de Servicios en la Nube, incluida la selección y compra de servicios, la gestión contable y la financiera relacionada con el uso de servicios en la nube, generalmente las capacidades comerciales se ofrecen a través de servicios en la nube.
            
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.size(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h4 La función comercial
                  p Este componente funcional es compatible con las actividades de computación en la nube del administrador de servicios en la nube del Cliente. 
                  p Esto incluye funciones para la administración de identidades y perfiles de usuarios, el monitoreo de la actividad y el uso del servicio, el manejo de eventos y la notificación de problemas.

      .row
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Capas de acceso
      
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-7
          p Los componentes funcionales de la capa de acceso incluyen:
          LineaTiempoD.color-acento-botones
              .row(numero="1" titulo="Control de acceso")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Se debe proporcionar control de acceso a los servicios en la nube, los recursos de los que dependen y las funciones de control relacionadas, por tanto, este componente funcional limita el uso a los servicios particulares de los usuarios, implica la autenticación de un usuario a través de la plataforma de acceso, validación de credenciales, seguida de la autorización de este usuario autenticado para utilizar servicios específicos, es fundamental en este componente la gestión de identidades.
              .row(numero="2" titulo="Acceso al servicio")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Proporciona acceso a los servicios en la nube ofrecidos por el proveedor de servicios.         
              .row(numero="3" titulo="Acceso comercial")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Este componente funcional proporciona acceso a las capacidades empresariales ofrecidas por el proveedor y adquiridas por el cliente, incluye sistemas y mecanismos de soporte de tipo empresarial.
              .row(numero="4" titulo="Administración acceso")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Proporciona acceso a las capacidades de administración ofrecidas por el proveedor, son las interfaces de gestión y administración de los accesos con que cuenta cada usuario al adquirir un servicio en la nube.
              .row(numero="5" titulo="Acceso al desarrollo")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Capacidades dentro del sistema ofrecidas por el proveedor de servicios en la nube, que respalda el desarrollo, la prueba y el mantenimiento de las implementaciones de servicios adquiridos.
              .row(numero="6" titulo="Gestión de conexiones")
                .col-md-12.mb-4.mb-md-0
                  p.text-small Este componente funcional proporciona la aplicación de las políticas de QoS con respecto al tráfico desde y/o hacia los componentes funcionales de la capa de usuario. El componente funcional de gestión de la conexión interactúa con las funciones de múltiples capas para recuperar las políticas almacenadas allí y las aplica localmente en la capa de acceso.
        .col-lg-5.col-8.py-3
          img(src="@/assets/curso/temas/tema1/img27.svg", alt="")
      .py-4
      .row.py-4
        #7.subtitulo.mb-4(data-aos="fade")
          h3.mb-0 Capa de servicio
        .py-3
        .bg2.mb-4(data-aos="fade-down")
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                h4 Capacidades de servicio
                p Consiste en el software necesario para implementar el servicio ofrecido a los proveedores de servicios cloud, despliega y entrega la interfaz del servicio, es decir, la interfaz ofrecida a los clientes, independientemente del modo o tipo de implementación del servicio.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img28.svg', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                h4 Capacidades comerciales
                p Proporciona un conjunto de capacidades para acceder a la función comercial relacionada con la prestación de servicios en la nube. La función empresarial en sí está contenida dentro de los componentes funcionales de los sistemas de soporte empresarial.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img29.svg', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                h4 Capacidades de administración
                p Suministra capacidades para acceder a la función de administración relacionada con la prestación de servicios en la nube.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img30.svg', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-5.mb-4.mb-md-0
                h4 Orquestación de servicio
                p Proporciona coordinación, agregación y composición de múltiples componentes de servicios para brindar el servicio en la nube.
              .col-md-5.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/img31.svg', alt='')

        Separador
        #t_1_4.titulo-segundo.color-acento-contenido
         h2 1.4 Consideraciones operativas de los servicios en la nube

        .row.p-4.mb-4.justify-content-center.align-items-center
          .col-lg-10
            .row.cajon-gris.justify-content-center.align-items-center(data-aos="fade-left").p-4
              .col-lg-2.col-8.py-2
                img(src='@/assets/curso/temas/tema1/img32.svg', alt='')
              .col-lg-9
                p.mb-4 Existen aspectos transversales que, como su nombre lo indica, aplican tanto a la vista del usuario como en la arquitectura y en lo funcional del lado del proveedor de servicios de computación en la nube. Estos aspectos transversales son cuestiones compartidas entre los roles, actividades y componentes funcionales que aplican a roles y sub-roles en la vista del usuario y deben considerarse en las actividades que desempeñan directa o indirectamente.
        
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-9
            p Un ejemplo de aspecto transversal es la seguridad porque aplica a la infraestructura, los servicios, los proveedores de servicios en la nube, los clientes de servicios en la nube y los socios de servicios en la nube (auditores de la nube, desarrolladores de servicios en la nube, etc.).
            p Aunque la seguridad es transversal, el proceso, implementación y gestión de esta es distinta dependiendo de la capa del servicio y del nivel funcional, (figura 1). A continuación, se mencionarán de manera general los diferentes aspectos que de manera transversal intervienen en la computación en la nube.
          .col-lg-3
            img(src='@/assets/curso/temas/tema1/img33.svg', alt='')
        .py-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.  
          span Servicios en la nube
    
    .container.fondo2
      .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
        .col-lg-12
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/img34.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/img35.svg',alt='')
    
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        h2.titulo1 Auditabilidad
        .row.justify-content-center.align-items-center(data-aos="fade-left").p-4
          .col-lg-4.col-8.py-2
            img(src='@/assets/curso/temas/tema1/img36.svg', alt='')
          .col-lg-8
            p Hace referencia a la propiedad o capacidad de poder auditarse, este es un aspecto que se refiere a la capacidad de recopilar y poner a disposición la información probatoria necesaria relacionada con la operación y el uso de un servicio en la nube, con el objetivo de realizar una auditoría. 
            p Está relacionado con la gobernanza de los servicios en nube como garantía que esos servicios se prestan y utilizan en coherencia con los acuerdos de servicios asociados entre los clientes, proveedores y partners de servicios en la nube. Por tanto, esta garantía se logra con mayor frecuencia mediante auditorías independientes de servicios.
        .py-3
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10  
            .cajon.color-secundario.bg-9.p-4.mb-4
              p Una auditoría generalmente produce como resultado final un informe de auditoría que incluye algún tipo de recomendación o aval de certificación final y que se pone a disposición de las partes de los acuerdos de servicios asociados, la auditoría en sí depende de la disponibilidad de datos y pruebas que sostienen la evidencia en el uso, el entorno, la disponibilidad y el rendimiento de los servicios y los recursos asociados.
        p Como garantía de la auditabilidad esta información documentada debe recopilarse y mantenerse de manera segura, por tanto, el objetivo de la auditoría de la computación en la nube es:

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
          .col-lg-6
            p Entre estas áreas se destacan:
            ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right
                  | Gestión de la identidad, si el sistema de gestión de la identidad de la organización está integrado con el sistema de computación en la nube.
                li
                  i.fas.fa-chevron-right
                  | Gestión de incidentes de seguridad y su interacción y gestión con los incidentes de computación en la nube.
                li 
                  i.fas.fa-chevron-right
                  | Seguridad del perímetro de la red al ser el punto de acceso típico a Internet.
                li 
                  i.fas.fa-chevron-right
                  | Desarrollo de sistemas para aquellos en los que la nube es parte de la infraestructura de la aplicación.
                li
                  i.fas.fa-chevron-right
                  | Gestión de proyectos.
                li 
                  i.fas.fa-chevron-right
                  | Gestión de riesgos de TI.
                li
                  i.fas.fa-chevron-right
                  | Gestión de datos para aquellos que son transmitidos y almacenados en sistemas en la nube.
                li 
                  i.fas.fa-chevron-right
                  | Gestión de vulnerabilidades.
          .col-lg-6
            img(src='@/assets/curso/temas/tema1/img37.svg', alt='')
        .py-4
        h2.titulo1 Disponibilidad

        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-6
            img(src='@/assets/curso/temas/tema1/img38.svg', alt='')
          .col-lg-6.py-2
            p Este aspecto se refiere a la propiedad de poder garantizar que los servicios estén siempre disponibles, o accesibles y utilizables en todo momento a pedido de una entidad autorizada. La “entidad autorizada” suele ser un cliente de servicios en la nube.
            p La implicación de este aspecto se integra dentro de otros aspectos que se explican de forma más amplia como el de la seguridad y del gobierno, tal y como se puede ver más adelante.
            p La disponibilidad como tal en los servicios en nube es un aspecto que debe ser concretizado en los SLA asociados.

        .py-4
        h2.titulo1 Gobernanza 
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-4
            img(src='@/assets/curso/temas/tema1/img39.svg', alt='')
          .col-lg-8
            .cajon.color-secundario.bg-9.p-4.mb-4
              p Este aspecto se refiere al sistema mediante el cual se dirige y controla la prestación y el uso de los servicios en la nube, el término de gobierno interno de la nube se utiliza para la aplicación de políticas de tiempo de diseño y tiempo de ejecución para garantizar que las soluciones basadas en la computación en la nube se diseñen e implementen de acuerdo con las expectativas especificadas, junto con la entrega de los servicios asociados.
              p Dentro de la gobernanza se pueden incluir algunos o todos los aspectos transversales al diseño y puesta en funcionamiento de servicios en la nube.
            p Las prácticas de gobierno individuales aplicadas de manera continua por los clientes y los proveedores, van desde lo más sencillo hasta lo sofisticado y están encapsuladas dentro de cada rol. Por tanto, es responsabilidad de cada rol implementar la gobernanza de acuerdo con sus necesidades. 
            p El gobierno de la nube se incluye como un aspecto transversal debido al requisito de transparencia y la necesidad de racionalizar las prácticas de gobernanza respecto a los SLA y otros elementos contractuales que determinan la relación entre el cliente y el proveedor.
        .py-4
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-2
              .col-lg-8
                p.px-3 Adicionalmente se conoce el término de gobierno externo de la nube al acuerdo entre el cliente y el proveedor de servicios en la nube respecto al uso de los servicios por parte del cliente, puede hacer referencia a un acuerdo de nivel de servicio que proporciona información detallada sobre los aspectos funcionales y no funcionales de los servicios.
              .col-lg-4.py-2
                img.desbordante(src='@/assets/curso/temas/tema1/img40.svg', alt='')

        .py-4
        h2.titulo1 Interoperabilidad

        p Este aspecto en el contexto de la computación en nube se refiere a la capacidad de un cliente de servicios de computación en la nube para interactuar e intercambiar información de acuerdo con un método prescrito y obtener resultados predecibles. En el siguiente vídeo se podrá conocer más a este respecto.
        
        figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/ftIakHaCcxA" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Arquitectura y servicios en la nube

        .py-4
        h2.titulo1 Control de versiones
        .py-3
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="fade-left").fondo2.p-4
              .col-lg-7
                p El mantenimiento puede tener lugar por una variedad de razones, incluida la necesidad de reparar fallas y también la necesidad de actualizar o ampliar las instalaciones, estos procesos de mantenimiento pueden cambiar el comportamiento de los servicios en la nube, por ejemplo, afectando el funcionamiento de un servicio cuando lo utiliza un cliente, por estos motivos es un elemento importante relacionado con la gobernanza tanto por las actividades en sí mismas como por los recursos subyacentes relacionados con estas acciones.
              .col-lg-4
                img(src='@/assets/curso/temas/tema1/img41.svg', alt='')

        .py-4
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-7
            p Se debe diferenciar los mantenimientos desarrollados por cliente de los desarrollados por el proveedor de servicios en la nube especialmente dependerá del tipo de servicio al cual se le programa, por ejemplo. para el caso de un servicio SaaS prácticamente todas las acciones de mantenimiento se espera que sean realizadas por el proveedor mientras que, en el caso de los servicios IaaS y PaaS, los componentes de la aplicación pertenecen al cliente y consecuentemente será el responsable del mantenimiento de esos componentes que podrá realizar con personal propio o mediante un partner asociado que proporcione servicios gestionados en su portfolio. 
            p En cualquier caso, el proveedor es responsable del entorno en el que se ejecutan los componentes de la aplicación, que varía según los detalles del servicio pero que puede incluir elementos como los recursos de hardware, el sistema operativo o el middleware.
            .cajon.color-secundario.bg-9.p-4.mb-4
              p Aunque inicialmente es interesante para el cliente que un servicio o una plataforma de servicios se actualice o se arregle hay que considerar que cualquier cambio en el comportamiento de un servicio puede tener un impacto negativo en la parte del cliente y que acarrea, frecuentemente, cambios en los componentes de la aplicación y en los sistemas TIC del cliente y/o nuevas acciones de capacitación de los usuarios del servicio del proveedor. Por tanto, es importante que el mantenimiento de los servicios esté sujeto a prácticas de gobierno transparentes para que el proveedor pueda estar en la mejor posición para estar prevenido anticipando acciones internas convenientemente y con el objetivo de evitar impactos significativos en el negocio.
          .col-lg-4.col-8
            img(src='@/assets/curso/temas/tema1/img42.svg', alt='')
        
        p.py-2 Las prácticas de mantenimiento en los servicios deben estar documentadas en el SLA e incluir la capacidad para que el cliente informe problemas y solicite soluciones junto a mecanismos de comunicación para que el proveedor notifique al cliente los cambios asociados a mantenimientos pendientes y su programación en el tiempo.

        .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
          .col-lg-10      
            .bloque-texto-g.color-secundario.p-sm-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img43.png')})`}")
              .bloque-texto-g__texto.p-4
                p El denominado versionado se refiere al etiquetado adecuado de un servicio o de los propios componentes que lo componen según su nivel de complejidad y/o atomización (p.ej. típicas de arquitecturas de micro servicios o realizada en función de las capas que lo componen como el nivel de sistema operativo utilizado en un servicio IaaS), de tal modo que el cliente tenga claro qué se está utilizando en una versión en particular.<br><br>
                p Es importante que el servicio reciba una etiqueta de nueva versión cuando se realiza el mantenimiento de un servicio en la nube para poder aplicar actividades eficaces de control de versiones de manera adecuada y según procesos garantistas basados en buenas prácticas ampliamente conocidas y aplicadas como modelos (ITIL).
        
        p Por ejemplo, cuando se realicen cambios significativos en un servicio de una versión a una nueva, la versión más antigua del servicio debería estar disponible en paralelo con la nueva versión durante un período de tiempo acordado.
        .py-4
        h2.titulo1 Portabilidad
        .py-3
        p Este aspecto es importante considerando que los potenciales clientes están interesados en evitar quedar cautivos del proveedor cuando eligen utilizar los servicios en la nube. 

        .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
          .col-lg-10      
            .bloque-texto-g.color-secundario.p-sm-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img44.png')})`}")
              .bloque-texto-g__texto.p-4
                p Los clientes necesitan saber que pueden transferir sus datos o aplicaciones entre múltiples proveedores a un nivel de costes y de interrupción aceptables y que puede variar según el tipo específico de servicio en la nube.<br><br>
                p Un ejemplo típico es la portabilidad de una organización en su rol de cliente que pueda considerar pasar de su proveedor actual en IaaS a otro alternativo. En este escenario y para el aspecto de portabilidad que se está tratando, el cliente debería poder tomar sus datos y las imágenes de sus máquinas virtuales (VM) y ponerlos en funcionamiento en un servicio IaaS equivalente de una manera relativamente sencilla. 
        .py-2
        p De forma similar cuando un cliente desea trasladar o cambiar de proveedor de servicios SaaS, debería poder llevar sus datos consigo, pero hay que considerar los costes relacionados a costes asociados a las actividades de exportar, mapear e importar los datos en la aplicación SaaS del nuevo proveedor.
        p Un nivel más o menos elevado de costes asociados a estas actividades va a quedar determinado por el grado de alineación de los modelos y formatos de datos de los SaaS de ambos proveedores considerados. Idealmente estos SaaS deberían adoptar formatos de intercambio de datos estándar relevantes según el dominio de aplicación. El cambio entre aplicaciones SaaS también puede implicar que el cliente se adapte a una nueva interfaz de servicio y que está relacionada con la interoperabilidad del servicio como se ha indicado.

        .cajon.color-secundario.bg-9.p-4.mb-4
          p En la portabilidad de aplicaciones en la nube se permite la migración de elementos de un modo similar a instancias de máquina virtual completamente detenida o una Imágen de máquina (servicio IaaS) de un proveedor a otro o la migración de componentes de aplicaciones (servicio PaaS) desde un proveedor u otro.

        p En ambos casos, existe un aspecto importante a considerar relacionado con la portabilidad de los metadatos relacionados con los componentes de la aplicación que proporcionan información sobre las relaciones de los componentes de la aplicación y sobre la infraestructura requerida asociada, por ejemplo, la configuración de balanceo de cargas o la configuración del firewall.
        p De forma similar a la pérdida de la tabla de indexación de una base de datos relacional, la conservación de los metadatos en un proceso de portabilidad es fundamental para poder materializarla.

        .py-4
        h2.titulo1 Resiliencia
        .py-3
        p Este aspecto se refiere a la capacidad de un sistema para proporcionar y mantener un nivel aceptable de servicio ante fallas (involuntarias, intencionales o causadas naturalmente) que afecten el funcionamiento normal.
        .py-3 
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-8
            .row.fondo33.p-4.d-none.d-md-block
              p.d-none.d-md-block La resiliencia describe el conjunto de procesos de monitoreo, preventivos y de respuesta que permiten que un servicio en la nube brinde operaciones continuadas, con cortes predecibles y verificables, a través de acciones de falla y recuperación.  
            .row.fondoazulito.p-4.d-none.d-md-block
              p.d-none.d-md-block Estos procesos, pueden incluir fallas de hardware, comunicaciones y/o software y pueden ocurrir como incidentes aislados o en combinación, incluyendo fallas en serie en forma de efecto dominó. 
            .row.fondo33.p-4.d-none.d-md-block  
              p.d-none.d-md-block También pueden incluir acciones tanto automáticas como manuales, que generalmente abarcan múltiples sistemas y, por lo tanto, su descripción y realización son parte de la infraestructura de nube en global y no una función.
                | Está ligado a temas de seguridad ya que se buscará siempre encontrar el lugar más débil o menos resilientes. 
          .col-lg-3
            img.d-none.d-md-block(src='@/assets/curso/temas/tema1/img46.svg', alt='').alaizq
            img.d-block.d-md-none(src='@/assets/curso/temas/tema1/img47.svg',alt='')
        .py-4
        h2.titulo1 Reservisibilidad
        .py-3
        p Este aspecto es un término relacionado con el proceso para que los clientes de servicios en la nube recuperen sus datos de cliente y componentes de aplicaciones en la nube.
        p Desde el punto de vista del proveedor para que pueda eliminar todos los datos de un cliente, así como los datos derivados de la prestación del servicio de nube especificados contractualmente después de un período acordado.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p El principio es el “derecho al olvido” en el sentido de que el cliente tiene derecho a esperar que, una vez que indique al proveedor que dejará de utilizar el servicio o los servicios, habrá un proceso ordenado para que el cliente recupere sus datos del servicio en la nube y sus componentes de aplicación y que el proveedor borrará finalmente todas las copias sin conservar ningún material que pertenezca al cliente después del transcurso de un período acordado.


























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
