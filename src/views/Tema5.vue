<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 5
        h1 Internet de las cosas (IoT)

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-5.col-9.p-1
          img.mb-0(alt="" src="@/assets/curso/temas/tema5/img01.png")
        .col-lg-7.col-12.p-2
          p.mb-2 Debido a la gran importancia y progreso que ha logrado la IoT es valorada como una de las tecnologías de mayor impacto a 2025, debido a que se intuye que a una gran cantidad y variedad de objetos se les incorporará variados tipos de sensores que estarán conectados a Internet produciendo un flujo de datos muy grande, el cual debe ser tratado, almacenado y expuestos de una forma sencilla y fácil de entender (Molano, 2015).
          p.mb-lg-0.mb-3 El concepto de IoT (Internet de las cosas) fue presentado por primera vez en Proctor y Gamble en el año de 1999 por Kevin Ashton, describiendo que consistía en la generalización de una variedad de diferentes cosas, objetos o elementos de tipo cotidiano integrados como etiquetas de identificación por medio de radiofrecuencias (RFID), los cuales eran controlados por Internet, generando una gran cantidad de datos que necesitaban ser recolectados y almacenados, razón por la cual IoT se integra con Cloud Computing para que estos datos se alojen en Internet facilitando que estén en continua disponibilidad, para que las empresas, usuarios puedan acceder desde cualquier lugar.<br><br>

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-12
          p.fondo-amarillo.p-4 En resumen, se puede decir que IoT es la agrupación de sensores y equipos electrónicos conectados entre sí con el objetivo de calcular, recolectar y mandar datos a un servicio de almacenamiento en la nube.
          p.mb-lg-0.mb-3 El IoT en la actualidad está organizado por una recolección extendida de diferentes redes y con propósitos distintos, por ejemplo, los carros modernos cuentan con una cantidad variada de redes para moderar la puesta en marcha del motor, el monitoreo de comunicación, los sistemas de seguridad, etc., de manera parecida los centros comerciales, las oficinas, los apartamentos manejan diferentes sistemas que permiten controlar la calefacción, el aire acondicionado, los sistemas de seguridad, etc., en tanto que el IoT avanza todas estas redes quedarán conectadas incorporando medidas de análisis, administración y seguridad, haciendo del IoT una herramienta todavía más poderosa.<br><br>
        .col-lg-5.col-22
          img.mb-0(alt="" src="@/assets/curso/temas/tema5/img02.png")
        P <br><br>

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-12
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 13.] Internet de las cosas red de redes
          img.mb-0.p-2(alt="" src="@/assets/curso/temas/tema5/tema5.png")
          figcaption <b>Nota:</b> Tomado de Cisco IBSG (2011).
          Separador
      #t_5_1.titulo-segundo.color-acento-contenido
        h2 5.1 Aplicaciones

      p Entre las diferentes áreas de aplicación que tiene el mundo del IoT se destacan las siguientes:<br>

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-4.col-12
      
        SlyderA(tipo="b").fondo-banner.p-4
          .row.justify-content-center
            .col-lg-6.col-10.p-2
              h5.p-2 Domótica. 
              p.p-2 Consiste en la sistematización de una edificación, casa, o inmueble, conectando entre sí diferentes tipos de servicios como (energía, agua, ventilación) y dispositivos como (cerrojos, electrodomésticos), optimizando la seguridad y eficiencia energética garantizando un mejor bienestar para el usuario.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema5/5.1img01.png")

          .row.justify-content-center
            .col-lg-6.col-10.p-4
              h5.p-2 Automatización y control de procesos de producción
              p.p-2 Se emplea la tecnología de IoT para incrementar la eficiencia en la fabricación de los productos conseguidos, así como su fiabilidad y el continuo seguimiento del producto en la fábrica. 
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema5/5.1img02.png") 

          .row.justify-content-center
            .col-lg-6.col-10.p-4
              h5.p-2 Transporte y logística.
              p.p-2 Consiste en monitorizar medios de transporte y el proceso de envío de productos, validar estados de conservación, ubicación, evitando robos o pérdidas, logrando realizar análisis de mejores rutas o administración de tráfico. Unos ejemplos donde son utilizados son en las empresas de envíos o en las plataformas de servicios de carros o como se puede ver en la figura 5 gestión de tiempos de traslados, gestión y control de vehículos.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema5/5.1img03.png")

          .row.justify-content-center
            .col-lg-6.col-10.p-4
              h5.p-2 Agricultura, ganadería y silvicultura.
              p.p-2 Al igual que en las fábricas IoT es utilizado para la automatización de trabajos primordiales con lo relacionado del agro, como por ejemplo, sistema de riego, sistema de detector de temperatura para siembra, detección de enfermedades de los animales, etc.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema5/5.1img04.png")

          .row.justify-content-center
            .col-lg-6.col-10.p-4
              h5.p-2 Videovigilancia y seguridad.
              p.p-2 Consiste en la configuración y control de una variedad de equipos de seguridad tales como sensores de movimiento, alarmas inteligentes, detección de amenazas para proteger la seguridad de edificaciones, casas y así contar con una prevención cuando se presenten situaciones de riesgo.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema5/5.1img05.png")

          .row.justify-content-center
            .col-lg-6.col-10.p-4
              h5.p-2 Medicina. 
              p.p-2 Sus objetivos son detectar de una persona sus signos vitales, así como las variaciones para suministro de medicinas. Aunque la orientación es más a los humanos es posible también monitorear el estado de salud de los animales domésticos. La incorporación de IoT en el sector de la salud transformará el cuidado médico, ya que los centros de atención serán mucho más eficientes, brindando al personal de la salud datos muy importantes de los pacientes en tiempos más cortos, para poder agilizar los procesos médicos.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema5/5.1img06.png")


      Separador
      #t_5_2.titulo-segundo.color-acento-contenido
        h2 5.2  Desarrollos

      p En la actualidad existen muchos desarrollos que incorporan IoT en sus diferentes áreas de aplicación. <br><b>A continuación se nombran unos de los más novedosos y curiosos.</b>
      
      TabsC.color-acento-contenido(data-aos="fade-left")
        .py-3.py-md-4(titulo="Hidrate Spark").tarjeta--neutral
          .row.justify-content-center
            .col-lg-3.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema5/5.2img01.svg")
            .col-lg-6.col-12.mb-4-lg-0
              br
              h4.mb-4 Hidrate Spark
              p.mb-0 Se trata de un termo de agua que tiene colores metálicos muy llamativos, que informa el tiempo en que se debe tomar agua y reporta la cantidad de agua tomada según lo que se configure, este funciona por medio de un sensor que recolecta cada trago de agua y lo envía al celular por medio de bluetooth.
        
        .py-3.py-md-4(titulo="Ability MyCite").tarjeta--neutral
          .row.justify-content-center
            .col-lg-3.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema5/5.2img02.svg")
            .col-lg-6.col-12
              br
              h4.mb-4 Ability MyCite
              p.mb-0 Es una pastilla inteligente que fue creada por Otsuka Pharmacutical Co y Proteus Digital utilizada para tratar a las personas que sufren de trastorno bipolar o esquizofrenia, la pastilla incluye un sensor que envía señales a una APP, el sensor es activado cuando la pastilla se disuelve con los ácidos gástricos del estómago, permitiendo así realizar un seguimiento al paciente verificando la hora de toma del medicamento y si en efecto se lo está tomando.
        
        .py-3.py-md-4(titulo="Waymo").tarjeta--neutral
          .row.justify-content-center
            .col-lg-3.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema5/5.2img03.svg").tarjeta--neutral
            .col-lg-6.col-12
              br
              h4.mb-4 Waymo
              p.mb-0 Es el primer carro autónomo creado por Google, que permite a un automóvil conducirse autónomamente por carreteras, detecta señales de tráfico, peatones y otros carros, inicialmente el nombre del proyecto era Google self-driving car Project y luego recibió el nombre de Waymo.
        
        .py-3.py-md-4(titulo="Google Glass").tarjeta--neutral
          .row.justify-content-center
            .col-lg-3.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema5/5.2img04.svg")
            .col-lg-6.col-12
              br
              h4.mb-4 Google Glass
              p.mb-0 Son unas gafas desarrolladas por Google para realidad aumentada, su función principal es poder manejar aplicaciones sin utilizar las manos, solo con comandos de voz, estas gafas incorporan un miniproyector que muestra una imagen virtual al ojo. Estas gafas son usadas en diferentes áreas como la educación, la industria, la medicina, etc.
              
</template>

<script>
export default {
  name: 'Tema5',
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
