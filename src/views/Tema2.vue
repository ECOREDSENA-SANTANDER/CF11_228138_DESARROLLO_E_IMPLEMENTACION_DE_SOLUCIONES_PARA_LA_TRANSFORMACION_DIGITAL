<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 Redes de datos
  
      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-12
          .bg--piel.p-4.br_01.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-9
                figure
                  img(src='@/assets/curso/temas/tema2/redesdedatos.png', alt='imagen decorativa') 
              .col-lg-9.mb-3.mb-lg-0
                p.p-2 Una red informática es una colección de dispositivos conectados entre sí utilizando un medio de transmisión, que comparten recursos e intercambian información. La comunicación en la red informática posee dos roles para los elementos conectados, que son el emisor y receptor, estos se asumen y alternan en diferentes instantes de tiempo.<br><br>Las redes de datos son infraestructuras creadas para transmitir información a través del intercambio de datos. Según Moro (2013) son arquitecturas específicas para este fin, cuya base principal es la conmutación de paquetes y que atienden a una clasificación exclusiva, teniendo en cuenta la distancia que es capaz de cubrir su arquitectura física y por supuesto, el tamaño que presentan.

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
        Separador
        #t_2_1.titulo-segundo.color-acento-contenido
         h2 2.1 Historia  

        figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/Zx2p6cloSws" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Infraestructura y servicios tecnológicos

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido
         h2 2.2 Conceptos básicos y componentes de una red

      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-2.col-auto
            figure
              img(src="@/assets/curso/temas/tema2/icono2.2.svg", alt="alt").img75.m-auto
          .col
            p.mb-0 Una red implica que en ella intervengan varios actores que básicamente se pueden enmarcar en cuatro bien definidos que son: los dispositivos, el medio, la información y los recursos que va a utilizar o compartir para mejorar la eficiencia de los mismos.
      
      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-22
        p Los dispositivos son aquellos elementos que se conectan a la red y están divididos en dos grandes grupos:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10.col-22
          img.mb-0(alt="" src="@/assets/curso/temas/tema2/2.2.png")

      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-auto
        p El medio es la conexión que permite a dispositivos relacionarse entre sí. A su vez se define la información como la unidad que se intercambia entre dispositivos de gestión, acceso, comunicación y de usuario final como es el texto, imágenes, música, hipertexto, video, entre otros. Por otra parte, los recursos hacen referencia a todo aquello que un dispositivo pide a la red, se identifica y accede directamente. Estos recursos pueden ser archivos compartidos en otros dispositivos de la red, un documento a imprimir en una impresora compartida, un servicio a consumir, información, espacio en disco duro, tiempo de procesamiento, etc.<br><br>A continuación se definen los dispositivos y elementos más importantes en las redes de datos:
       
      TabsB.color-acento-botoness.mb-5(data-aos="fade-right")
        .py-4.py-md-5(titulo="Servidor" :icono="require('@/assets/curso/temas/tema2/img01.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Servidor<br>
                p Es un computador que en la red tiene la función de proveer servicios a otros dispositivos llamados clientes. También se suele denominar con la palabra servidor a una aplicación informática o programa que realiza algunas tareas en beneficio de otras aplicaciones llamadas clientes.  Entre los servicios ofrecidos por un servidor, está el manejo de archivos y aplicaciones. Los primeros consisten en un proceso de lectura y escritura por parte de los usuarios sobre archivos almacenados en una estación de trabajo. Las aplicaciones permiten a los usuarios finales realizar tareas acordes a sus necesidades.
            .col-lg-6.col-10
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img1.png', alt='')
      
        .py-4.py-md-5(titulo="Estación de trabajo" :icono="require('@/assets/curso/temas/tema2/img02.svg')")
         .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Estación de trabajo<br>
                p Son los nodos finales de una red de computadoras. Normalmente, las estaciones de trabajo permiten a los usuarios ejecutar aplicaciones y almacenar diferentes tipos de información. Sin embargo, una impresora conectada a la red podría verse como un nodo final de ésta y verse como una estación de trabajo, pero con prestaciones diferentes y reducidas comparadas con la de un computador.
            .col-lg-6.col-10
               img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img2.png', alt='')
      
        .py-4.py-md-5(titulo="Tarjeta de conexión a la red" :icono="require('@/assets/curso/temas/tema2/img03.svg')")
         .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Tarjeta de conexión a la red<br>
                p Es un dispositivo que le permite a todo computador conectarse a la red informática ya sea para conexión cableada o inalámbrica. Cuando se trata de una conexión alámbrica, se habla de una tarjeta de red o NIC (Network Interface Card) por sus siglas en inglés, la cual puede ser insertada directamente en la placa madre por medio de un puerto PCI. Dicha tarjeta trae consigo un conector para cable de red. Por otro lado, las tarjetas de red inalámbricas también pueden ser conectadas a la tarjeta madre por medio del puerto PCI o de manera externa por medio de un puerto USB.
            .col-lg-6.col-10
                img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img3.png', alt='')
        .py-4.py-md-5(titulo="Repetidores" :icono="require('@/assets/curso/temas/tema2/img04.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Repetidores<br>
                p Se trata de un dispositivo electrónico capaz de transmitir una señal recibida de bajo nivel y re transmitirla a más alto nivel, permitiendo con esto cubrir distancias largas sin que haya degradación considerable de la señal. En los inicios de la telegrafía se utilizó para regenerar las señales telegráficas.
            .col-lg-6.col-10
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img4.png', alt='')
        
        .py-4.py-md-5(titulo="Routers" :icono="require('@/assets/curso/temas/tema2/img05.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Routers<br>
                p Es un dispositivo de red encargado de indicar la ruta más adecuada para transmitir el mensaje que ha enviado el transmisor hacia un destino determinado dentro o fuera de la red a la cual pertenecen, utilizando los protocolos adecuados.
            .col-lg-6.col-10
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img5.png', alt='')
        
        .py-4.py-md-5(titulo="Switch" :icono="require('@/assets/curso/temas/tema2/img06.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Switch<br>
                p Es un dispositivo de red que se encarga de interconectar varios segmentos de red, por medio de la dirección MAC de los dispositivos destino de las tramas de red.
            .col-lg-6.col-10
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img6.png', alt='')
        
        .py-4.py-md-5(titulo="Cableado" :icono="require('@/assets/curso/temas/tema2/img07.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-5.col-10
                h4 Cableado<br>
                p Se trata del medio físico utilizado para la conexión de los dispositivos hacia la red en la cual solicitarán los servicios dependiendo de los requerimientos de longitud, velocidad entre otros.
            .col-lg-6.col-10
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img7.png', alt='')
        
        .py-4.py-md-5(titulo="Protocolo" :icono="require('@/assets/curso/temas/tema2/img08.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-10.col-10
                h4 Protocolo<br>
                p Es el elemento software de la red, encargado de establecer los parámetros de comunicación entre dispositivos, habilitar mecanismos de identificación de los equipos y usuarios en la red, definir el formato de la información que circula en la red. 
            .col-lg-8.col-10
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b figura 1.] Protocolo.
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img8.png', alt='')   

      Separador
      #t_2_3.titulo-segundo.color-acento-contenido
        h2 2.3 Medios de transmisión
       
      p Son los caminos por los cuales viaja la información o los datos. Estos medios según como como conducen las señales se clasifican en dos tipos:           

        
      .container.tarjeta.LineaTiempoD.p-4.p-md-5.mb-5
        .row 
          .col-lg-10
          SlyderE(indicadores="derecha") 
            .row
              .col-md-5.mb-3.mb-md-0
                h5 <br>Medios de transmisión guiados
                p <br>Están formados por cables que se encargan de guiar las señales de un extremo a otro. Dentro de las características de estos medios están: el tipo de conductor, velocidad máxima de transmisión, distancia máxima ofrecida entre repetidores, inmunidad ante interferencias electromagnéticas, facilidad de instalación y la compatibilidad con varias tecnologías de capa de enlace. Los medios guiados más usados para interconexión en el campo de las telecomunicaciones son: cable de par trenzado, cable coaxial y la fibra óptica
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema2/2.3.1.png', alt='Cable par trenzado')
                  h4.py-3 Cable par trenzado
            .row
              .col-md-5.mb-3.mb-md-0
                h5 <br>Medios de transmisión guiados
                p <br>Están formados por cables que se encargan de guiar las señales de un extremo a otro. Dentro de las características de estos medios están: el tipo de conductor, velocidad máxima de transmisión, distancia máxima ofrecida entre repetidores, inmunidad ante interferencias electromagnéticas, facilidad de instalación y la compatibilidad con varias tecnologías de capa de enlace. Los medios guiados más usados para interconexión en el campo de las telecomunicaciones son: cable de par trenzado, cable coaxial y la fibra óptica
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema2/2.3.2.png', alt='Cable par trenzado')
                  h4.py-3 Cable coaxial
            .row
              .col-md-5.mb-3.mb-md-0
                h5 <br>Medios de transmisión guiados
                p <br>Están formados por cables que se encargan de guiar las señales de un extremo a otro. Dentro de las características de estos medios están: el tipo de conductor, velocidad máxima de transmisión, distancia máxima ofrecida entre repetidores, inmunidad ante interferencias electromagnéticas, facilidad de instalación y la compatibilidad con varias tecnologías de capa de enlace. Los medios guiados más usados para interconexión en el campo de las telecomunicaciones son: cable de par trenzado, cable coaxial y la fibra óptica
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema2/2.3.3.png', alt='Cable par trenzado')
                  h4.py-3 Cable fibra óptica


      .container.tarjeta.LineaTiempoD2.p-4.p-md-5.mb-5
        .row 
          .col-lg-10
          SlyderE(indicadores="derecha") 
            .row
              .col-md-5.mb-3.mb-md-0
                h5 <br>Medios de transmisión no guiados
                p <br>Son aquellos que permiten la comunicación sin uso de cables o conductor físico, las señales electromagnéticas son radiadas a través del espacio libre y se encuentran disponibles para cualquier usuario con un dispositivo inalámbrico. Para estos medios es necesario el uso de antenas tanto para transmitir como para recibir las señales. Los medios no guiados más usados son: ondas de radio, microondas e infrarrojo.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema2/3.1.png', alt='Cable par trenzado')
                  h4.py-3 Ondas de radio
            .row
              .col-md-5.mb-3.mb-md-0
                h5 <br>Medios de transmisión no guiados
                p <br>Son aquellos que permiten la comunicación sin uso de cables o conductor físico, las señales electromagnéticas son radiadas a través del espacio libre y se encuentran disponibles para cualquier usuario con un dispositivo inalámbrico. Para estos medios es necesario el uso de antenas tanto para transmitir como para recibir las señales. Los medios no guiados más usados son: ondas de radio, microondas e infrarrojo.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema2/3.1.2.png', alt='Cable par trenzado')
                  h4.py-3 Microondas
            .row
              .col-md-5.mb-3.mb-md-0
                h5 <br>Medios de transmisión no guiados
                p <br>Son aquellos que permiten la comunicación sin uso de cables o conductor físico, las señales electromagnéticas son radiadas a través del espacio libre y se encuentran disponibles para cualquier usuario con un dispositivo inalámbrico. Para estos medios es necesario el uso de antenas tanto para transmitir como para recibir las señales. Los medios no guiados más usados son: ondas de radio, microondas e infrarrojo.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema2/3.1.3.png', alt='Cable par trenzado')
                  h4.py-3 Infrarrojos
      
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido
        h2 2.4 Protocolos de comunicación

      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-2.col-auto
            figure
              img(src="@/assets/curso/temas/tema2/2.4.svg", alt="alt").img75.m-auto
          .col
            p.mb-0 Cuando se trata de la comunicación entre ordenadores primero se deben conocer cuáles son las normas que permiten esta comunicación, o lo que es lo mismo, qué protocolo de comunicación utilizan. Para Stallings, Tanenbaum y Stevens (2000), un protocolo de red es un grupo de reglas que establece la forma para identificarse, transmitir la información y cómo procesar los datos en la red.  Los protocolos pueden ser de tipo hardware (tarjetas de red), software (drivers), o combinación de ambos.
      
      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-22
        p Existen diferentes protocolos, cada uno de ellos está identificado por la capa del modelo OSI en la que va a trabajar. Por nombrar algunos: 

      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-8
          .row.justify-content-center
            .col-lg-7.resaltado-rosado.p-4 
              ol.lista-ol
              li 
                | Capa 1: CGI. MIME, IEEE
              li 
                | Capa 2: Ethernet
              li 
                | Capa 3: Protocolo de internet IP
              li 
                | Capa 4: Protocolo de control de Transmisión TCP, UDP
              li 
                | Capa 5: Capa 5: NetBIOS
              li 
                | Capa 6: ASN.1
              li 
                | Capa 7: TELNET, FTP, SNMP
            .col-lg-5.col-3.resaltado-rojo.p-4
              img.mb-3(src="@/assets/curso/temas/tema2/prueba2.png", alt="alt")
    

      Separador
      #t_2_5.titulo-segundo.color-acento-contenido
        h2 2.5 Clasificación de redes

      p Las redes están clasificadas de diferentes maneras teniendo en cuenta el número de dispositivos conectados y la distancia entre los mismos, el tipo de conexión o la tecnología utilizada, esta clasificación se detalla a continuación:
      .row.justify-content-center.align-items-center(data-aos="fade-rigth")
        .col-lg-12.col-12
          acordionA.mb-3(tipo="b" clase-tarjeta="tarjeta tarjeta-gris")
            div(titulo="Por alcance")
              .row(data-aos="fade-rigth")
                .col-md-7
                  ul.lista-ul--color 
                    li 
                      i.fas.fa-car-side.px-2
                      | Red PAN o de área personal (Personal Area Network)
                    li 
                      i.fas.fa-car-side.px-2
                      | Red LAN o de área local (Local Area Network)
                    li 
                      i.fas.fa-car-side.px-2
                      | Red CAN o de área de campus (Campus Area Network)
                    li 
                      i.fas.fa-car-side.px-2
                      | Red MAN o de área metropolitana (Metropolitan Área Network)
                    li 
                      i.fas.fa-car-side.px-2
                      | Red WAN o de área amplia (Wide Area Network)
                    li 
                      i.fas.fa-car-side.px-2
                      | Red SAN o de área de almacenamiento (Storage Area Network)
                    li 
                      i.fas.fa-car-side.px-2
                      | Red VLAN o de área local virtual (Virtual LAN)
                
                .col-md-5.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema2/acor01.png", alt="")
            
            div(titulo="Por tipo de conexión")
              .row(data-aos="fade-rigth")
                .col-md-7
                  ul.lista-ul--color 
                    li 
                      i.fas.fa-car-side.px-2 
                      | Red cableada. es aquella red en la que se conectan mediante cable computadores y otros periféricos, se intercambian archivos, y se envían datos a otros dispositivos. La siguiente figura ilustra un ejemplo de red cableada:
                
                .col-md-4.col-3.py-2
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 2.] Red cableada
                  img.m.auto(src="@/assets/curso/temas/tema2/acor02.png", alt="")
              
            
                img.m.auto(src="@/assets/curso/temas/tema2/linea.svg", alt="").p-4
                
                .col-md-7 
                  ul.lista-ul--color  
                    li 
                      i.fas.fa-car-side.px-2 
                      | Red inalámbrica: aquella red en la cual dos o más dispositivos como computadores portátiles, agendas electrónicas, entre otros se comunican sin necesidad de una conexión por cable, con este tipo de red, los usuarios pueden estar conectados cuando se desplazan dentro de una determinada área geográfica. En la siguiente figura se observa una red de tipo inalámbrica:
                
                .col-md-4.col-3.py-2
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 3.] Red inalambrica
                  img.m.auto(src="@/assets/curso/temas/tema2/acor03.png", alt="")

            div(titulo="Por relación funcional")
              .row(data-aos="fade-rigth")
                .col-md-7
                  ul.lista-ul--color 
                    li 
                      i.fas.fa-car-side.px-2 
                      | Es una arquitectura o relación que consiste en realizar peticiones o solicitudes a un componente de la red informática llamado servidor y que puede estar alojado en la misma red del peticionario. Este componente a su vez puede o no responder satisfactoriamente la petición y si ésta es positiva entonces se dará lugar a un servicio.
                    img.m.auto(src="@/assets/curso/temas/tema2/linea.svg", alt="").p-2
                    li 
                      i.fas.fa-car-side.px-2 
                      | Peer-to-peer que consiste en la conformación de una red de datos en la que no hay componentes dominantes o que dirijan a los demás integrantes de la malla. Es decir, cada elemento de la red tiene los mismos privilegios y restricciones que cualquier otro.
                
                .col-md-4.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema2/acor04.png", alt="")
            
            div(titulo="Por tecnología")
              .row(data-aos="fade-rigth")
                .col-md-7
                  ul.lista-ul--color 
                    li 
                      i.fas.fa-car-side.px-2 
                      | Red Punto a Punto: es aquella donde se conectan parejas individuales de dispositivos terminales y que necesitan routers intermedios que establezcan rutas apropiadas para el envío de la información.
                    img.m.auto(src="@/assets/curso/temas/tema2/linea.svg", alt="").p-2
                    li 
                      i.fas.fa-car-side.px-2 
                      | Red Broadcast: es una red que transmite los datos por un solo canal de comunicación compartido por todos los dispositivos de la red, este mensaje o paquete se envía a todos los terminales  máquinas de la red, pero únicamente la destinataria puede procesarlo.
                
                .col-md-4.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema2/acor05.png", alt="") 
            
            div(titulo="Por la direccionalidad de los datos")
              .row(data-aos="fade-rigth")
                .col-md-7
                  ul.lista-ul--color 
                    li 
                      i.fas.fa-car-side.px-2 
                      | Unidireccional o Simplex: consiste en la transmisión de información en un solo sentido donde el emisor no tiene retroalimentación alguna por parte del receptor. Un ejemplo de este tipo de transmisión son las emisoras radiales, donde el oyente necesita de un radio receptor, pero este aparato no permite enviar señal alguna.
                    img.m.auto(src="@/assets/curso/temas/tema2/linea.svg", alt="").p-2
                    li 
                      i.fas.fa-car-side.px-2 
                      | Half-Duplex o Bidireccional: este tipo de comunicación permite que la información se transmita en ambos sentidos, pero con la restricción de uno solo a la vez. Es decir, para que uno de los dos involucrados (emisor o receptor) pueda transmitir, el otro debe estar en silencio. También es denominado semi-duplex. Un ejemplo de este tipo de transmisión son los radios de la policía.
                    img.m.auto(src="@/assets/curso/temas/tema2/linea.svg", alt="").p-2
                    li 
                      i.fas.fa-car-side.px-2 
                      | Full-Dúplex: la transmisión es en ambos sentidos y al mismo tiempo una misma información. Un ejemplo de este tipo de transmisión son los teléfonos móviles o celulares.
                
                .col-md-4.col-3.py-2
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 4.] Por la direccionalidad de los datos
                  img.m.auto(src="@/assets/curso/temas/tema2/acor06.svg", alt="")    

            div(titulo="Por tecnología")
              .row(data-aos="fade-rigth")
                .col-md-7
                  ul.lista-ul--color 
                    li 
                      i.fas.fa-car-side.px-2 
                      | Intranet: red privada de usuarios que solo comparte sus recursos e información con los clientes internos, es de uso educativo, comercial entre otros.
                    img.m.auto(src="@/assets/curso/temas/tema2/linea.svg", alt="").p-2
                    li 
                      i.fas.fa-car-side.px-2 
                      | Internet: red de área amplia que interconecta gran cantidad de redes de comunicación heterogéneas funcionando como una red de alcance mundial y lógica única, basada en el protocolo TCP/IP.
                
                .col-md-4.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema2/acor07.png", alt="")                
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido
        h2 2.6 Topologías de redes
        
      p Para la topología física, se consideran tres formas básicas para el montaje de una red:

      SlyderA(tipo="b").fondo-banner2.p-4
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6.col-10
            h5 BUS
            p.mb-lg-0.mb-3 Consiste en la conexión de todos los nodos de la red a un solo canal de comunicación lo que genera una serie de desventajas como degradación de la señal, sobre escalamiento entre otras.
          .col-lg-4.col-10
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 5.] Bus
            img.mb-0(alt="" src="@/assets/curso/temas/tema2/sly1.svg")

        .row.justify-content-center.align-items-center.p-4
          .col-lg-6.col-10
            h5 ANILLO
            p.mb-lg-0.mb-3 Cada terminal tiene conexión con la siguiente y la primera se conecta con la última, cerrando así la conexión razón por la cual se denomina anillo. 
          .col-lg-4.col-10
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 6.] Anillo
            img.mb-0(alt="" src="@/assets/curso/temas/tema2/sly2.svg")

        .row.justify-content-center.align-items-center.p-4
          .col-lg-6.col-10
            h5 ESTRELLA
            p.mb-lg-0.mb-3 Todos los dispositivos de la red se conectan con un dispositivo central llamado nodo el cual se encarga de establecer las comunicaciones entre terminales o usuarios. 
          .col-lg-4.col-10
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 7.] Estrella
            img.mb-0(alt="" src="@/assets/curso/temas/tema2/sly3.svg")
      
      p.py-4 En cuanto a la topología lógica, está determinada por la forma cómo se accede a los datos y recursos de la red, para este caso tenemos:
      
      .row.justify-content-center(data-aos="fade-center")
        .col-lg-4.col-12.d-flex
          .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta2.p-3.clase1
            img.mb-5.m-auto(style="width: 75px" alt="" src="@/assets/curso/temas/tema2/01.svg")
            h4.clr--prime.mb-4.text-center Transmisión de tokens
            p.mb-0.text-center Se realiza la transmisión de tokens electrónicos en forma secuencial hacia cada terminal. Los dos tipos de redes que utilizan esta topología son TokenRing y FDDI.
        
        .col-lg-4.col-12.d-flex
          .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta2.p-3.clase1
            img.mb-5.m-auto(style="width: 75px" alt="" src="@/assets/curso/temas/tema2/02.svg")
            h4.clr--prime.mb-4.text-center Broadcast
            p.mb-0.text-center Aquí cada dispositivo envía un mensaje hacia todos los demás integrantes de la red. Las operaciones se realizan por orden de llegada como si fuese Ethernet.   

      Separador
      #t_2_4.titulo-segundo.color-acento-contenido
        h2 2.7 Modelo TCP/IP y OSI 
  
      .row.mb-5
        .col-lg-4.mb-5.mb-lg-0 
          img(src='@/assets/curso/temas/tema2/2.7.png', alt='imagen decorativa') 
        .col-lg-8.mb-5.mb-lg-0
          h3.titulo-tercero 
          .bloque-texto-d.color-secundario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p.text-small Los protocolos IP (Protocolo de Internet) y TCP (Protocolo de Control de Transmisión) se originaron a principios de 1980 y fueron adoptados por la red ARPANET en 1983, integrada por cientos de computadoras de centros de investigación militar, universidades, y algunas empresas. El e-mail (electronic mail) se destacó como el servicio más utilizado, mientras que el sistema operativo más usado fue UNIX, en su versión BSD UNIX, desarrollada por la Universidad de California. A mediados de los ochenta se crea el protocolo TCP/IP con el propósito de tener un lenguaje común a todos los computadores conectados a Internet, con la unión de las redes ARPANET, CSNET y MILNET. El protocolo TCP/IP hace posible entonces, la conexión de dispositivos con marcas y tecnología diferentes por medio del establecimiento de normas y estándares. (p.4)
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 Corona (2004)
      .row.justify-content-center(data-aos="fade-center").py-4
        .col-lg-10
          .row.justify-content-center(data-aos="fade-center").py-4
            .col-lg-7
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 8.]  Modelo TCP/IP y OSI
              img(src='@/assets/curso/temas/tema2/figura8.svg', alt='imagen decorativa') 
            .col-lg-3.col-6
              img(src='@/assets/curso/temas/tema2/ima8.svg', alt='imagen decorativa') 
        
      
      p Iniciando los años ochenta, la Organización Internacional para la Estandarización (ISO, International Standards Organization) desarrolla el modelo de referencia para interconectar sistemas abiertos (OSI, Open Systems Interconnect) para normalizar la manera de comunicarse entre dispositivos de la red. El modelo es importante por el gran paso hacia la interoperabilidad entre dispositivos de red.
      p El modelo OSI enmarca las comunicaciones de red en siete diferentes capas así: 
      
      .row.justify-content-center(data-aos="fade-center").py-4
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 9.] Comunicación de red
          img(src='@/assets/curso/temas/tema2/comunicacion.svg', alt='imagen decorativa') 

      p El modelo OSI y el TCP/IP sirven como referencia para describir el proceso de comunicación de datos. El TCP/IP es usado para la suite de protocolos TCP/IP, y el OSI se utiliza para la comunicación estándar entre equipos y aplicaciones de diferentes proveedores. Ambos modelos realizan el mismo proceso, pero el modelo TCP/IP utiliza cuatro capas en lugar de siete.
      p En la figura siguiente se muestra una comparación entre las capas de los dos modelos.
      
      .row.justify-content-center(data-aos="fade-center").py-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 10.] Comparación entre las capas de los dos modelos
          img(src='@/assets/curso/temas/tema2/comparacion.svg', alt='imagen decorativa') 
      Separador
       #t_2_4.titulo-segundo.color-acento-contenido
        h2 2.8 Tecnología Ethernet

      .row.justify-content-center.align-items-center
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/tema2/2.8.1.png', alt='imagen decorativa') 
        .col-lg-8.mb-3.mb-lg-0
          p.p-2 Es una serie de estándares establecidos para la implementación de redes de área local o LAN. Para Forouzan (2002), se caracteriza por ser más estable, confiable y rápida en la transmisión de datos, ya que la interferencia con otros dispositivos de la misma red es mínima. Otra ventaja que presenta esta serie de estándares es la velocidad de transmisión pues puede ser del orden de los 100 Gbit/s. Para poder implementar una red tipo Ethernet es necesario contar con una serie de dispositivos que cumplen diferentes funciones. Algunos de ellos son: enrutadores, switches, cables UTP, bridges, entre otros.
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col 
          p <br>
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Objetivos
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 166px; position: absolute" data-aos="fade-left")
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        p Los principales objetivos de Ethernet son consistentes con los que se han convertido en los requerimientos básicos para el desarrollo y uso de redes LAN: 
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right").p-4
        .col-lg-10.col-12.mb-4-lg-0.fondo3
          .row.justify-content-center.align-items-center
            .col-lg-4
              img(src='@/assets/curso/temas/tema2/candado.svg', alt='imagen decorativa')
            .col-lg-3
              ul.lista-ul--color 
                li 
                  i.fas.fa-car-side.px-2
                  | Simplicidad.
                li 
                  i.fas.fa-car-side.px-2
                  | Bajo costo.
                li 
                  i.fas.fa-car-side.px-2
                  | Compatibilidad.
                li 
                  i.fas.fa-car-side.px-2
                  | Direccionamiento flexible.
                li 
                  i.fas.fa-car-side.px-2
                  | Equidad.
            
            .col-lg-3
              ul.lista-ul--color 
                li 
                  i.fas.fa-car-side.px-2
                  | Progreso.
                li 
                  i.fas.fa-car-side.px-2
                  | Bajo retardo.
                li 
                  i.fas.fa-car-side.px-2
                  | Estabilidad.
                li 
                  i.fas.fa-car-side.px-2
                  | Mantenimiento.
                li 
                  i.fas.fa-car-side.px-2
                  | Arquitectura en capas.
     
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
            h3.col.px-4.mb-0.text-white(data-aos="fade-right") La trama de Ethernet
            img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 266px; position: absolute" data-aos="fade-left")
      
      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-7.col-12  
          p Los dispositivos de una red Ethernet intercambian información o datos llamados paquetes Ethernet, cuyo contenido incluye la trama Ethernet o trama de datos, y a la vez se divide en otros conjuntos de datos. Los registros de datos contienen un código binario con información importante, como direcciones, datos de uso, información de control, y sumas de comprobación.<br><br>Ethernet tiene los siguientes tipos: 
           .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right").rosado-curvo.p-3
            .col-lg-2.col-4.p-2
              img(src='@/assets/curso/temas/tema2/2.8.4.svg', alt='imagen decorativa') 
            .col-lg-10
              p Ethernet: 10 Base-T, velocidad 10 Mbps
              p Fast Ethernet: 100 Base-T, velocidad 100 Mbps
              p Gigabit Ethernet: 1000 Base-X velocidad 1000 Mbps ó 1 Gbps
        .col-lg-5.col-9
          img.m-auto(src='@/assets/curso/temas/tema2/2.8.3.svg', alt='imagen decorativa') 


</template>

<script>
export default {
  name: 'Tema2',
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
