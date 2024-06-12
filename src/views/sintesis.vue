<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La arquitectura de la nube es la organización de los componentes y subcomponentes en una estructura efectiva, eficiente y lógica, lo que permite en el orden de un objetivo común, de esta forma se fortalecen los puntos fuertes, a la vez que se minimizan aquello que están débiles.
    p Está compuesta por componentes y subcomponentes que están disponibles en la nube, corresponde a la tecnología con la cual se trabaja en la nube, y se centra en entidades implicadas como: el cliente, el proveedor, el auditor, el servicio, además de trabajar también con el acceso a estos servicios, los recursos empleados, y los roles que se desempeñan en cada una de las capas funcionales de la nube.
    p el fin de verificar y hacer seguimiento en la entrega de los servicios que se venden, así como los recibidos, es importante tener presente la auditoría, que es un requisito indispensable para la mejora y optimización de la prestación y venta. Es seguro que ha sido interesante el contenido presente, así que se invita a revisar el siguiente mapa conceptual, el cual condensa los puntos más importantes de este componente formativo:
    .py-3
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt=" El diagrama presenta los temas y conceptos abordados en el componente formativo")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
