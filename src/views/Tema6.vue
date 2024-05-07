<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 6
        h1 Internet de las cosas (IoT)

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg.col
          p.mb-5 <b>La gestión de proyectos de tecnologías de la información y la comunicación - TI,</b> puede ser abordado desde diversos aspectos de la gestión empresarial según el contexto, pero en cualquiera de los casos, escenarios y/o contextos, para una adecuada administración de los proyectos de TI se deben considerar los siguientes aspectos.
        
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 14.] Aspectos contenidos en la administración de proyectos TI
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/temas/tema6/banner6.svg")
          

      .row(data-aos="fade-right").p-4
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Fases (Planeación, Ejecución, Verificación y Mejora) 
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 560px; position: absolute" data-aos="fade-left")
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-04.col-12.mb-4-lg-0
         p <br>Para la buena administración de los proyectos de TI, es importante que se realice una estructuración por fases, teniendo en cuenta la planeación, ejecución, verificación y mejora de actividades del proyecto. Las actividades del proyecto son las acciones que se deben realizar para lograr los objetivos del mismo, estas deben ser planificadas y asignadas a los responsables de ejecución.<br><br>En general, las fases de un proyecto se estructuran con base al ciclo Deming o PHVA, por sus siglas en español: Planificar, Hacer, Verificar y Actuar, pero no es camisa de fuerza.
      

      TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
        .py-4.py-md-5(titulo="Planear" :icono="require('@/assets/curso/temas/tema6/icono01.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              h5 Planear
              p Es la primera fase o etapa donde se aborda el problema a resolver y se plantean los objetivos y alcances para solucionarlo. Asimismo, se designan las actividades para lograr los objetivos. Es esta fase también se deben considerar los recursos necesarios, humanos, económicos, tecnológicos y de información.
            .col-lg-4.col-22
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono01.svg', alt='')
      
        .py-4.py-md-5(titulo="Hacer" :icono="require('@/assets/curso/temas/tema6/icono02.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              h5 Hacer
              p En esta fase se deben poner en marcha o ejecución las actividades de gestión y técnicas que se planearon por realizar. En los proyectos de TI, son aquellas actividades de instalación, implementación y/o apropiación de tecnologías hardware y software. También, pueden involucrar la adquisición de nuevos servicios de TI, como los servicios en la nube o aplicaciones de terceros.
            .col-lg-4.col-22
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono02.svg', alt='')
      
        .py-4.py-md-5(titulo="Verificar" :icono="require('@/assets/curso/temas/tema6/icono03.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              h5 Verificar
              p En esta fase se deben poner en marcha o ejecución las actividades de gestión y técnicas que se planearon por realizar. En los proyectos de TI, son aquellas actividades de instalación, implementación y/o apropiación de tecnologías hardware y software. También, pueden involucrar la adquisición de nuevos servicios de TI, como los servicios en la nube o aplicaciones de terceros.
            .col-lg-4.col-22
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono03.svg', alt='')
      
        .py-4.py-md-5(titulo="Actuar" :icono="require('@/assets/curso/temas/tema6/icono04.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              h5 Actuar
              p En esta última fase se toman las acciones de mejora, con base en los resultados de verificación o evaluación, con el fin de demarcar las acciones correctivas para la mejora.
            .col-lg-4.col-22
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono04.svg', alt='')
    
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-04.col-12.mb-4-lg-0
          p <br>Para una adecuada planeación del proyecto, 
            span.resaltado-amarillo #[b se debe realizar un cronograma de actividades a ejecutar en cada fase,] 
            | dicho cronograma debe ser realizado en la fase de planeación. Un ejemplo de este cronograma puede ser:
        
        .col-lg-8.col-22.p-4
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Tabla 1.]  Cronograma de actividades de proyectos de TI.
          .tabla-a
            table
              thead
                tr.resaltado-rosado
                  th Fase
                  th Fase
                  th Actividad
                  th Fecha inicio 
                  th Fecha fin
              tbody
                tr
                  td(rowspan='3' style='') PLANEAR
                  td.text-center(rowspan='3' style='') Objetivo 1
                  td.text-center Actividad 1
                  td.text-center 01/11/2021
                  td.text-center 10/11/2021
                tr
                  td.text-center Actividad 2
                  td.text-center 11/11/2021
                  td.text-center 18/11/2021
                tr
                  td.text-center ...
                  td.text-center ...
                  td.text-center ...
                
                tr.rosado-clarito
                  td(rowspan='3' style='') HACER
                  td.text-center(rowspan='3' style='') Objetivo 1
                  td.text-center Actividad 1
                  td.text-center 25/11/2021
                  td.text-center 30/11/2021
                tr.rosado-clarito
                  td.text-center Actividad 2
                  td.text-center 0/12/2021
                  td.text-center 15/12/2021
                tr.rosado-clarito
                  td.text-center ...
                  td.text-center ...
                  td.text-center ...
 
                tr
                  td(rowspan='3' style='') VERIFICAR
                  td.text-center(rowspan='3' style='') Objetivo 1
                  td.text-center Actividad 1
                  td.text-center 16/12/2021
                  td.text-center 20/12/2021
                tr
                  td.text-center Actividad 2
                  td.text-center 21/12/2021
                  td.text-center 23/12/2021
                tr
                  td.text-center ...
                  td.text-center ...
                  td.text-center ...
                

                tr.rosado-clarito
                  td(rowspan='3' style='') ACTUAR
                  td.text-center(rowspan='3' style='') Objetivo 1
                  td.text-center Actividad 1
                  td.text-center 25/12/2021
                  td.text-center 28/12/2021
                tr.rosado-clarito
                  td.text-center Actividad 2
                  td.text-center 29/12/2021
                  td.text-center 31/12/2021
                tr.rosado-clarito
                  td.text-center ...
                  td.text-center ...
                  td.text-center ...
         
      .row(data-aos="fade-right").p-4
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Criterios para la determinación de recursos 
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 476px; position: absolute" data-aos="fade-left")
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-04.col-12.mb-4-lg-0
         p Los recursos de un proyecto de TI. pueden estar agrupados en recursos humanos, económicos o financieros, tecnológicos, y de información.<br><br>En la gestión de proyectos de TI, y en especial en los proyectos de servicios en la nube, es importante la determinación de recursos necesarios, por lo que se deben considerar los siguientes criterios:<br>
        .col-lg-12.col-22
        .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Tabla 2.]  Criterios en la gestión de proyectos TI
        .tabla-b
          .tabla-b__header.resaltado-rosado
            th #[b Recurso]
            td #[b Criterio]
          table
            tr
              th Humano
              td Conocimiento: Profesión y especialidad que se requiere según el proyecto de TI. (Especialista, Profesional, Tecnólogo, Técnico, etc.)<br><br>Experiencia: La experiencia que se requiere para tener mayor seguridad y confianza para la ejecución de las actividades del proyecto.
            tr.rosado-clarito
              th.rosado-clarito Económico y finaciero
              td.rosado-clarito Costos de Administración y Seguimiento: Se deben considerar los costos de personal, viáticos, maquinaria y equipo, vehículos, transporte, estudios y auditorias, materiales y suministros.<br><br>Costos Directos: Considerar Salarios, viáticos, mano de obra, materiales y suministros, transferencias, Estudios y auditorias, Consultorías, capacitación y divulgación.<br><br>Costos concurrentes: Considerar Salarios, viáticos, servicios generales, insumos y materiales, mantenimiento, capacitación y concientización.<br><br>Imprevistos: Rubros para afrontar posibles sucesos adversos.
            tr
              th Tecnólogico
              td Aplicaciones: Se deben considerar los requisitos de aplicaciones y/o software. <br><br>
                |Usuarios: Según la cantidad de usuarios actual y provista se deben asignar recursos tecnológicos.<br><br>
                |Procesamiento: Considerar la capacidad de procesamiento requerida para aplicaciones, según el uso y cantidad de usuarios concurrentes.<br><br>
                |Memoria: Considerar la capacidad de memoria para el procesamiento requerida para aplicaciones, según el uso y cantidad de usuarios concurrentes.<br><br>
                |Almacenamiento: Establecer la capacidad de almacenamiento requerida para aplicaciones y datos, según la información procesada, el uso y cantidad de usuarios concurrentes.<br><br>
                |Conectividad: Determinar la capacidad de conectividad requerida para aplicaciones, según el uso y cantidad de usuarios concurrentes.
            tr
              th.rosado-clarito Información
              td.rosado-clarito Datos: Considerar la información y datos necesaria para el correcto funcionamiento de las aplicaciones y una adecuada ejecución de los procesos por parte de los usuarios.
            tr
              th Otros
              td Instalaciones y equipos: Se debe considerar los recursos de instalaciones, maquinaria, dispositivos y equipos técnicos y tecnológicos que se requieren.
      
      .row(data-aos="fade-right").p-4
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h4.col.px-4.mb-0.text-white(data-aos="fade-right") Criterios para la planeación de actividades 
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 476px; position: absolute" data-aos="fade-left")
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-04.col-12.mb-4-lg-0
          p Dentro de los proyectos de TI se establecen las actividades que están a un nivel más bajo y las cuales se crean en función del cumplimiento de los objetivos específicos del proyecto. Para la planeación de actividades se deben considerar los siguientes criterios:<br>
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.col-12.mb-4-lg-0.py-2
          .tarjeta.resaltado-azul.p-4
            img.recurso(src='@/assets/curso/temas/tema6/recurso.svg' alt='AvatarTop')
            h4.py-3.text-white Recursos disponibles
            p.text-white Se debe tener en cuenta los recursos que se disponen (Humanos, económicos, tecnológicos, e información), de esta manera se pueden planear la realización de las actividades de manera objetiva.
  
        .col-lg-6.col-12.mb-4-lg-0
          .tarjeta.resaltado-azul.p-4
            img.recurso(src='@/assets/curso/temas/tema6/tiempo.svg' alt='AvatarTop')
            h4.py-3.text-white Tiempo estimado de realización
            p.text-white Establecer con base a los recursos disponibles, especialmente los humanos, el conocimiento y el esfuerzo que se requiere para realizar la actividad el periodo de tiempo que tomaría realizar cada actividad del proyecto.
          

    
    .container.tarjeta--neutral.p-4.p-md-5
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-4.col-6
          img(alt="" src="@/assets/curso/temas/tema2/mujer.png")
        .col-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/1.svg' alt='AvatarTop')
              p.text-center Nombre de la actividad
            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
              p.text-center Descripción de la actividad

            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/3.svg' alt='AvatarTop')
              p.text-center Responsable de la realización o ejecución

            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/4.svg' alt='AvatarTop')
              p.text-center Objetivo especifico relacionado
            
            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/5.svg' alt='AvatarTop')
              p.text-center Fecha de inicio

            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/6.svg' alt='AvatarTop')
              p.text-center Fecha de finalización

            .tarjeta.resaltado-blanco.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema6/7.svg' alt='AvatarTop')
              p.text-center Porcentaje de avance
    
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Aspectos legales 
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 240px; position: absolute" data-aos="fade-left")
      
      p.p-2 #[b En la gestión de proyectos de TI,] se deben tener en cuenta los aspectos legales según el contexto, para lo cual se recomienda tener claro una matriz de cumplimiento legal, en donde se pueda identificar dentro de cada proyecto que requisitos legales se deben cumplir, esto con el fin de evitar incumplimientos que puedan generar impactos adversos de tipo económico, operativo o reputacional.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-7.col-12.mb-4-lg-0
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Contexto jurídico")
              .col-md-8.mb-4.mb-md-0
                p.text-small <br>El contexto jurídico, según la constitución política, corresponde con las leyes, decretos, entre otros lineamientos estatales del gobierno nacional y gobiernos locales, los cuales pueden ser prohibitivos o permisivos.
                      
            .row(numero="2" titulo="Validez legal")
              .col-md-8.mb-4.mb-md-0
                p.text-small <br>La validez legal, refiere al cómo se realiza el procedimiento legal, y se lleva a su realización. 
                      
            .row(numero="3" titulo="Contratación de servicios")
              .col-md-8.mb-4.mb-md-0
                p.text-small <br>En la contratación de servivico, se deben revisar las condiciones y acuerdos de nivel de servicio con proveedores, incluyendo el soporte, de tal manera que se cumplan con los requerimientos específicos del proyecto.

            .row(numero="4" titulo="Protección de datos")
              .col-md-8.mb-4.mb-md-0
                p.text-small <br>Protección de datos personales, es de vital importancia que los prestadores de servicios cuenten con las regulaciones de protección de datos personales y que el procesamiento y almacenamiento de datos e información se de en países que cuentes con leyes o regulaciones sobre la protección de datos personales.
        
        .col-lg-4.col-7 
          img(alt="" src="@/assets/curso/temas/tema6/aspectoslegales.svg")

    .container.tarjeta--neutral.p-4.p-md-5
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.azul-borde
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Riesgos
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/img01.svg' style="max-width: 70px; left: 166px; position: absolute" data-aos="fade-left")
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
          .col-lg-7.col-12
            p.mb-4 Un riesgo se define como aquello que puede generar una situación adversa a una meta, objetivo, propósito, proyecto, proceso o empresa. Dentro de la gestión de proyectos de TI, se deben gestionar los riesgos asociados a los mismos, para ello es importante que se identifiquen las posibles amenazas que generan riesgos al proyecto de tal manera que se pueda establecer la probabilidad de ocurrencia, el impacto generado, para finalmente determinar el nivel de cada riesgo del proyecto, y así poder realizar las acciones de mitigación o tratamiento de riesgos del proyecto.
            p.p-4.fondo-amarilloclaro Las organizaciones establecen o utilizan diversos métodos y escalas de valoración de riesgos según su contexto y gustos, ya que no existe una única metodología de riesgos. Se recomienda investigar sobre metodologías de riesgo, entre ellas <b>ISO/IEC 31000, COSO, Magerit v3.</b>
            p.mb-4 En cualquier caso, para la determinación de riesgos de los proyectos de TI, se puede realizar siguiendo la siguiente fórmula:<br>
            p.text-center.p-4.fondo-amarillo.mb-4 <i>Riesgo, R = Probabilidad, P. multiplicado por el Impacto, I. = R = P x I</i>
          .col-lg-5.col-8
            img.mb-0(alt="" src="@/assets/curso/temas/tema6/imagenriesgos.png")



  

</template>

<script>
export default {
  name: 'Tema6',
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
