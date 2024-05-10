<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 Roles y responsabilidades en la nube

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/0mbw-CgmkEA" title="Tecnologías y conceptos básicos de <i>networking</i>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Tecnologías y conceptos básicos de <i>networking</i>

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 3.1  Conceptos básicos <i>Networking</i>

     
      .topSquare03.clr--rosado.mb-5(data-aos="fade-left")
        .row
          .col-lg-1.col-auto
            figure
              img(src="@/assets/curso/temas/tema3/icono3.1.svg", alt="alt").img75.m-auto
          .col-lg-11
            p.mb-0.p-2 Se puede definir como un sistema de apoyo para compartir información y servicios entre usuarios, dispositivos, terminales y grupos de trabajo que pertenecen a redes comunes o independientes. A continuación, se abordan los conceptos básicos de Networking.


    .container.tarjeta--neutral.p-4.p-md-5
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Conexión a internet
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 266px; position: absolute" data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-center")
        .col-lg-04.col-12.mb-4-lg-0
          p <br>Dentro de los requisitos necesarios para la conexión a internet se tienen, conexión física utilizando una tarjeta adaptadora, tal como un módem o una NIC, desde un PC a una red, una conexión lógica que aplica estándares denominados protocolos, unas aplicaciones encargadas de interpretar datos y mostrar la información en un formato comprensible como los navegadores Web Google Chrome, Microsoft Edge, Firefox, entre otros.<br>

      
      .row.justify-content-center.align-items-center.mb-10(data-aos="fade-center")
        .col-12.col-md-10.col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 11.] Conexión a internet.
          img.mb-lg-5.mb-0(src="@/assets/curso/temas/tema3/internet.png")
        

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Ancho de banda
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 236px; position: absolute" data-aos="fade-left")

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-12
          p <br>Los datos enviados por una red de computadoras, son divididos en bloques pequeños llamados paquetes, cada cual contiene información de la dirección de origen y destino, este paquete, junto con la información de dirección física, se denomina trama, también posee información que describe cómo volver a unir los paquetes en el destino. El ancho de banda determina la cantidad de paquetes que pueden transmitirse en un lapso de tiempo fijo. La unidad de medida del ancho de banda es el bit por segundo y generalmente, se indica con las siguientes unidades:
        .col-lg-5.col-8.resaltado-rosado
          .row
            .col-lg-6.p-4
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/icono.png")
            .col-lg-6.p-4
              p #[b Bits por segundo:]b/s.<br>#[b Kilobits por segundo:] Kb/s.<br>#[b Megabits por segundo:] Mb/s.<br> #[b Gigabits por segundo:] Gb/s
  
    .container.tarjeta--neutral.p-4.p-md-5
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Direccionamiento de equipos de red
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 416px; position: absolute" data-aos="fade-left")

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-04.col-22.mb-4-lg-0
          p <br>Las direcciones binarias de 32 bits usadas para acceder a Internet se llaman direcciones de Protocolo Internet (IP) La dirección IP de un dispositivo se forma por una parte de red y una de host que representa a un dispositivo específico de una red en particular. Para que el dispositivo sepa cómo está dividida la dirección IP, se utiliza un segundo número de 32 bits llamado máscara de subred, que se conforma de números unos identifican la porción de red y por números ceros que indican el host en la red. Con la ayuda de la matemática de red al realizar una operación AND booleana entre la dirección IP 10.10.23.134 y la máscara de subred 255.0.0.0 se obtiene como resultado la dirección de red de este host.<br>

        .row.justify-content-center.align-items-center
          .col-lg-5.p-4
            .row.justify-content-center.align-items-center(data-aos="fade-center").resaltado-azul.p-4
              p.text-white #[b IP      10.10.23.134]  	
              p.text-white 00001010.00001010.00010111.10000110
              p.text-white #[b Máscara      255.255.255.0]    	
              p.text-white 11111111.00000000.00000000.00000000
              p.text-white #[b Red  	   10.0.0.0]    	
              p.text-white 00001010.00000000.00000000.00000000
          .col-lg-7.p-4
            .row.justify-content-center.align-items-center.mb-10(data-aos="fade-center").resaltado-rosado.p-2
              .col-lg-3.col-3
                img(src="@/assets/curso/temas/tema3/02.png")
              .col-lg-9.p-4
                p Dentro de los direccionamientos se tiene dos tipos básicos de direcciones IP que son IPv4 e IPv6, estos direccionamientos se pueden realizar también de dos formas básicas que son el direccionamiento estático y el direccionamiento DHCP o dinámico. Igualmente se encuentra el ICMP o Protocolo de mensajes de Control de Internet, que sirve de apoyo en el conjunto de protocolos de Internet, se utiliza por los routers, para enviar mensajes de error e información operativa que indica el éxito o el fracaso en la comunicación con otra dirección IP.
            
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
