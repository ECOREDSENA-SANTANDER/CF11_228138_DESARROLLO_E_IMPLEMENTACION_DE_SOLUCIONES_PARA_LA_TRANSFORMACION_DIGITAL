<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
        P Se da la bienvenida al componente formativo “Arquitectura y servicios en la nube”. Para comenzar el recorrido por el mismo, se debe visitar el recurso didáctico que se presenta a continuación:
      
      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/lony6fxahJQ?si=SgN0eU1lJlvGPdpy" title="Arquitectura y servicio en la nube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Arquitectura y servicios en la nube
        
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
