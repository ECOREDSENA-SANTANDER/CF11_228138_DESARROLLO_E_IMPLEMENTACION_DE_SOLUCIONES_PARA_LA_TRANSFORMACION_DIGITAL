<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 Infraestructura de <i>hardware y software</i>

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-9.col-12.mb-0
          p Una infraestructura habitual de Tecnologías de la información (TI), está conformada por los dispositivos usuales de hardware y software: instalaciones, centros de datos, servidores, computadoras de escritorio de hardware de red y varios recursos de software de aplicaciones institucionales.
          p Se deben tener claras estas dos definiciones:
        .col-lg-2.col-8.p-3
          img.px-3(alt="" src="@/assets/curso/temas/tema1/subir.svg")

      .row(data-aos="fade-left").justify-content-center.align-items-center
        .col-lg-6.p-2
          .container.tarjeta.container-gris.p-2.p-md-4
            .row.justify-content-center.align-items-center 
              .col-lg-4.col-5.p-2
                img(src="@/assets/curso/temas/tema1/p1.png")
              .col-lg-8
                h5.text-white.relleno-rojo.p-2 Infraestructura de <i>hardware</i>
                p Con infraestructura de hardware, se está haciendo referencia a todos los equipos físicos necesarios para poner en marcha la solución. Ejemplo: computadores, servidores, portátiles, impresoras, escáneres, entre otros dispositivos físicos.
        
        .col-lg-6.p-2
          .container.tarjeta.container-gris.p-2.p-md-4
            .row.justify-content-center.align-items-center
              .col-lg-4.col-5.p-2
                img(src="@/assets/curso/temas/tema1/p2.png")
              .col-lg-8
                h5.text-white.relleno-rojo.p-2 Infraestructura de <i>software</i>
                p Una infraestructura de software se utiliza para almacenar, operar y tramitar las acciones necesarias dentro de una organización, basado en las tecnologías de la información.
      
      p.p-4 Entre los tipos de hardware, se pueden mencionar los siguientes:

      .row.justify-content-center.align-items-center(data-aos="fade-rigth")
        .col-lg-7.col-12
          acordionA.mb-3(tipo="b" clase-tarjeta="tarjeta gris-claro")
            div(titulo=" Procesamiento")
              .row(data-aos="fade-rigth")
                .col-md-9
                  p Se encarga de ejecutar instrucciones que se dan desde el mismo software del dispositivo.
                .col-md-2.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema1/1.svg", alt="")
            
            div(titulo="Almacenamiento")
              .row(data-aos="fade-rigth")
                .col-md-9
                  p.mb-0 Se utiliza, principalmente, para almacenar datos. Todas las computadoras de escritorio, portátiles, tablets y teléfonos inteligentes tienen algún tipo de dispositivo de almacenamiento.
                .col-md-2.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema1/2.svg", alt="")

            div(titulo="Periféricos de entrada")
              .row(data-aos="fade-rigth") 
                .col-md-9
                  p.mb-0 Captan y digitalizan los datos introducidos por el usuario o por otro dispositivo y los envían al ordenador para ser procesados. Los más conocidos son el teclado, el mouse, el escáner, la cámara web, etc.
                .col-md-2.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema1/3.svg", alt="")

            div(titulo="Periféricos de salida")
              .row(data-aos="fade-rigth") 
                .col-md-9
                  p.mb-0 Muestran o proyectan información hacia el exterior del ordenador. Generalmente informan, alertan, comunican, proyectan o dan al usuario alguna información.
                .col-md-2.col-3.py-2
                  img.m.auto(src="@/assets/curso/temas/tema1/4.svg", alt="")
            
            div(titulo="Periféricos de entrada y salida")
             .row(data-aos="fade-rigth") 
              .col-md-9
                p.mb-0 Mandan y reciben información. Su función es almacenar permanente o virtualmente, todo aquello que se ejecute en el ordenador, para que se pueda utilizar por los mismos usuarios o por otros sistemas.
              .col-md-2.col-3.py-2
                img.m.auto(src="@/assets/curso/temas/tema1/5.svg", alt="")
  
        .col-lg-5.col-8
          img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema1/img15.svg") 


      p.p-4 Por su parte, las estructuras de software también tienen algunas características y componentes específicos, como son:

      .row.justify-content-center(data-aos="fade-center")
        .col-lg-2.col-12.d-flex
          .px-lg-2.py-lg-3.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3.clase1
            img.mb-5.m-auto(style="width: 85px" alt="" src="@/assets/curso/temas/tema1/img16.svg")
            h4.mb-4.text-center Corrección
                p.mb-0 <br>Que cumpla con su objetivo.
                .row.justify-content-center(data-aos="fade-center")
        .col-lg-2.col-12.d-flex
          .px-lg-2.py-lg-3.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3.clase1
            img.mb-5.m-auto(style="width: 85px" alt="" src="@/assets/curso/temas/tema1/img17.svg")
            h4.mb-4.text-center Usabilidad
                p.mb-0 <br>Que sea fácil de aprender.
                .row.justify-content-center(data-aos="fade-center")
        .col-lg-2.col-12.d-flex
          .px-lg-2.py-lg-3.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3.clase1
            img.mb-5.m-auto(style="width: 85px" alt="" src="@/assets/curso/temas/tema1/img18.svg")
            h4.mb-4.text-center Seguridad
                p.mb-0 <br>Que sea resistente a ataques externos.
                .row.justify-content-center(data-aos="fade-center")
        .col-lg-2.col-12.d-flex
          .px-lg-2.py-lg-3.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3.clase1
            img.mb-5.m-auto(style="width: 85px" alt="" src="@/assets/curso/temas/tema1/img19.svg")
            h4.mb-4.text-center Flexibilidad
                p.mb-0 <br>Que pueda ser reformado por los desarrolladores.
                .row.justify-content-center(data-aos="fade-center")
        .col-lg-2.col-12.d-flex
          .px-lg-2.py-lg-3.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3.clase1
            img.mb-5.m-auto(style="width: 85px" alt="" src="@/assets/curso/temas/tema1/img20.svg")
            h4.mb-4.text-center Portabilidad
                p.mb-0 <br>Que pueda ser manejado en diversos equipos.
      


  
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Tipos de software

      p Los tipos de software son establecidos en virtud de la funcionalidad de los mismos y se pueden clasificar en tres grupos: 
        span.resaltado-rosado #[b <i>softwares de aplicación</i>]
        |(dentro del cual se encuentran los softwares de gestión),
        span.resaltado-rosado #[b <i>softwares</i> de programación]
        | y, como tercer grupo,
        span.resaltado-rosado #[b <i>softwares</i> de sistema]

      p A continuación, se pueden conocer en detalle los aspectos más importantes de cada grupo y apropiar los elementos que los constituyen. Se debe procurar llevar registro, de lo más destacado, en una libreta. personal de apuntes:
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-4.col-12

        SlyderA(tipo="b").fondo-banner.p-4
          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5 Grupo 1: softwares de Aplicación.
              p.mb-lg-0.mb-3 Son muchos los tipos de herramientas de software que incluyen base de cálculo, programas empresariales o de diseño sugeridos; en este se construye el software dependiendo del modelo de negocio y los requerimientos que desee el cliente.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img01.png")


          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5 Grupo 1: softwares de gestión.
              p.mb-lg-0.mb-3 Hacen parte del primer grupo. Son todos los relacionados con la gestión integral de la organización, como la facturación, la contabilidad o el departamento de tesorería y nómina de la entidad. Son de alta confiabilidad, agilidad y eficiencia, ahorran tiempo y evitan errores manuales y mejoran la productividad.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img02.png") 

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5 softwares de programación
              p.mb-lg-0.mb-3 Su importancia radica en que hacen posible el desarrollo de aplicaciones, por lo que su función es clave para el desarrollo de la computación y los otros programas. Dentro de este grupo están, por ejemplo, los compiladores o editores de texto.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img03.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5 Softwares de sistema.
              p.mb-lg-0.mb-3 En este grupo es importante que las características de hardware sean las mejores, para el óptimo funcionamiento. Ejemplo del mismo son los sistemas operativos de Windows, Linux o MAC ya que, cuando se instalan y configuran, se establece una conexión entre maquina u ordenador, realizando las tareas requeridas.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img04.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5 Software por tipo de licencia.
              p.mb-lg-0.mb-3 Las licencias de software son un elemento clave, puesto que establecen los términos que admiten el uso correcto del mismo. Es usual hallar dos tipos de software por licencia (software libre y software de propietario). Las cláusulas de uso de software permanecen almacenadas en el mismo, por lo que, previamente a su instalación o descarga, se deben admitir las condiciones.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img05.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5 Software por tipo de alojamiento. 
              p.mb-lg-0.mb-3 Cuando se va a seleccionar qué tipo de software es el más conveniente para la organización o modelo de negocio, es posible también apreciar el tipo de tecnología sobre la que puede apoyarse como, por ejemplo, on premise y en la nube.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img06.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h5  Software on premese y software en la nube.
              p.mb-lg-0.mb-3 On premise, se baja en la instalación y configuración dentro de la misma organización, trabajando dentro de la misma estructura interna de la entidad. El software en la nube, trabaja con la información alojada en la misma nube, donde su principal característica es el control y la seguridad de los datos, siendo uno de los más extendidos en los últimos años.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/Banner1.1img07.png")

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2.p-2 1.2 Escalabilidad
      
      p Se concibe por escalabilidad en el hardware, a la capacidad de ajuste y contestación de un sistema con relación al rendimiento del mismo, a medida que se acrecientan de forma significativa el número de usuarios del mismo.
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-12
          p Escalar hacia lo alto en un sistema, representa una migración de todo el sistema a un nuevo hardware que sea más potente y eficaz que el presente. Una vez se ha configurado el sistema futuro, se realizan unas validaciones y se realizan las copias de seguridad, poniéndose en funcionamiento.
          p.fondo-amarillo2.p-4 Las aplicaciones que estén trabajando bajo la arquitectura de <i>hardware</i> antigua, no sufren con la migración (el impacto en el código es mínimo).<br>
          p En relación con la escalabilidad, es importante tener en cuenta que:        
        .col-lg-5.col-12
          img.mb-0(alt="" src="@/assets/curso/temas/tema1/1.2Escalabilidad.svg")

      .row.justify-content-center(data-aos="fade-center")
        .col-lg-4.col-12.d-flex
          .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta2.p-3.clase1
            img.mb-5.m-auto(style="width: 75px" alt="" src="@/assets/curso/temas/tema1/1.2img01.svg")
            h4.mb-4.text-center Requerimientos técnicos
             p.mb-0 <br>Los requerimientos técnicos y de componentes que integran la máquina, aumentan frecuentemente según las características que requiera el software para su correcto y óptimo funcionamiento.
        
        .col-lg-4.col-12.d-flex
          .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta2.p-3.clase1
            img.mb-5.m-auto(style="width: 75px" alt="" src="@/assets/curso/temas/tema1/1.2img02.svg")
            h4.mb-4.text-center Compensación de necesidades 
             p.mb-0 <br>La escalabilidad en el software es el incremento de un sistema para compensar las necesidades empresariales.    
        
        .col-lg-4.col-12.d-flex
          .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta2.p-3.clase1
            img.mb-5.m-auto(style="width: 75px" alt="" src="@/assets/curso/temas/tema1/1.2img03.svg")
            h4.mb-4.text-center ¿Hardware adicional o actualización?
              p.mb-0 <br>Para poder escalar un sistema de almacenamiento de información, siempre se debe agregar hardware adicional o actualizar el hardware existente, sin transformar mucho la aplicación.

     
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3 Licenciamiento
        
      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-1.col-auto.p-3
            figure
              img(src="@/assets/curso/temas/tema1/icono1.3.svg", alt="alt").img75.m-auto
          .col-lg-11
              p.mb-0 Las licencias de software son un contrato entre el autor de un software informático y los usuarios que lo utilizan. En ellas se instauran las cláusulas y condiciones por cumplir para poder usar ese programa. Cada usuario que lo opera y descarga, instala, copia o lo utiliza, debe admitir esas condiciones.
      
      .row.justify-content-center.align-items-center(data-aos="fade-rigth")
        .col-lg-12.col-8
            p El valor de una licencia depende de muchas variables. En función de tal valor se deberán tener en cuenta aspectos como:
         
      .fondo1.p-4.mb-0
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-8.col-12.position-relative
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(alt="" src="@/assets/curso/temas/tema1/Licenciamiento1.3.svg")

          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
          p En el siguiente vídeo, se muestran en detalle, generalidades y elementos orientadores sobre las licencias de software. Se debe observar con atención y llevar registro de lo más destacado en la libreta personal de apuntes:
  

      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/XiXnR4mssBY" title="Licenciamiento de software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video.
      
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido
        h2.p-2 1.4 Marcos de referencia y buenas prácticas

      p Dentro de los marcos de referencias en el software, están los componentes de la arquitectura de diseño y operabilidad que maneja el mismo.<br><br>En todos los proyectos de TI, se debe evaluar, direccionar y monitorear áreas como: alcance, costos, tiempo, equipo humano, compras, calidad, comunicación, manejo de los interesados, integración, entre otros.
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-9
          .resaltado-rosado.row.p-3.mb-4
            .col-lg-2.col-4
              img.mb-0(alt="" src="@/assets/curso/temas/tema1/computer.png")
            .col-lg-10
              h5.resaltado-rosado.p-2 Los proyectos deberán tener una relación directa con el portafolio, planes y programas definidos en la entidad y el sector.
          p.mb-lg-0.mb-3 Dentro de los componentes de la ingeniería del software, el ciclo de vida del software examina las fases necesarias para validar el desarrollo del mismo y así garantizar que este desempeñe los requerimientos para la aplicación y verificación de los procedimientos de desarrollo.
          p Estos son algunos aspectos clave sobre los ciclos de vida del software y las buenas prácticas de software, que se debe conocer:
        .col-lg-6.col-22
          img.mb-0(alt="" src="@/assets/curso/temas/tema1/marco1.4.png")
          P.p-2       
          figure(data-aos="fade-right")
        .video.mb-1 
          iframe(width="1280" height="720" src="https://youtube.com/embed/XiXnR4mssBY" title="Licenciamiento de software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video.
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
