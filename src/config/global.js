export default {
  global: {
    componenteFormativo: 'Arquitectura y servicios en la nube',
    descripcionCurso:
      'La computación en la nube es cada vez más utilizada y con mayor frecuencia por empresas y particulares, es necesario conocer que existen diferentes tipos de servicios ofrecidos a través de la nube, así como formas y características de acceso a estos servicios, además de las funciones y responsabilidades que registran tanto para el cliente como para el proveedor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Arquitectura Cloud Computing',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de servicios y modelos Cloud ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Capas funcionales: usuario, acceso, servicio y recursos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relaciones entre la vista del usuario y la funcionalidad',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Consideraciones operativas de los servicios en la nube',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Roles y responsabilidades en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Roles asociados al cliente',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Roles y actividades asociadas al proveedor',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Roles y actividades asociadas a los partners',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Desarrollador de servicios de nube',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Auditor de servicios en la nube',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cableado estructurado',
      referencia:
        'Joskowicz, J. (2013). Cableado Estructurado.Universidad de la República Montevideo, URUGUAY',
      tipo: 'Documento PDF',
      link:
        'https://iie.fing.edu.uy/ense/asign/ccu/material/docs/Cableado%20Estructurado.pdf',
    },
    {
      tema: 'Conceptos básicos y componentes de una red',
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
      tipo: 'E-Libro',
      link:
        'https://books.google.es/books?id=RmYvfnMKrsgC&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      tema: 'Protocolos de comunicación',
      referencia:
        'Redes Informáticas - Nociones fundamentales (7ª edición) - (Protocolos, Arquitecturas, Redes inalámbricas, Virtualización, Seguridad, IPv6...) Editorial ENI',
      tipo: 'E-Libro',
      link:
        'https://www.ediciones-eni.com/open/mediabook.aspx?idR=9a76703d59b0fd180004f0cd38f2c537',
    },
    {
      tema: 'Arquitectura y equipos de cómputo, clientes y servidores',
      referencia:
        'Página relacionada con los proveedores de servicios en la nube. Accedida el 27 de diciembre de 2021 Public Cloud Services Comparison, comparecloud.in',
      tipo: 'Página web',
      link: 'https://comparecloud.in',
    },
    {
      tema: 'Tipos de contratos',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2013). Decreto Número 1317 del 27 de junio de 2013. https://www.mintic.gov.co/arquitecturati/630/articles-9011_documento.pdf',
      tipo: 'PDF',
      link:
        'https://www.mintic.gov.co/arquitecturati/630/articles-9011_documento.pdf ',
    },
    {
      tema: 'Contratación',
      referencia:
        'República de Colombia, Ministerio de tecnologías de la información y las comunicaciones.  (2012). Ley 1581 de 2012. https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
      tipo: 'PDF',
      link:
        'http://www.oas.org/es/sla/ddi/docs/Gu%C3%ADa%20para%20clientes%20que%20contraten%20servicios%20de%20Cloud%20Computing%20-%20AGPD.pdf',
    },
    {
      tema: 'Contratación',
      referencia:
        'República de Colombia, Ministerio de tecnologías de la información y las comunicaciones.  (2012). Ley 1581 de 2012. https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red:',
      significado: 'dispositivo que añade funcionalidad de red a su equipo.',
    },
    {
      termino: 'Ancho de banda:',
      significado:
        'capacidad de transmisión de un dispositivo o red determinado',
    },
    {
      termino: 'Bit (dígito binario):',
      significado: 'unidad más pequeña de información de una máquina.',
    },
    {
      termino: 'Comunicación',
      significado:
        'transmisión y recepción de datos entre dos o más actores con el fin de transmitir o recibir mensajes u opiniones distintas.',
    },
    {
      termino: 'Conmutador',
      significado:
        'dispositivo que es el punto central de conexión de equipos y otros dispositivos de una red, de forma que los datos puedan transmitirse a velocidad de transmisión completa.',
    },
    {
      termino: 'Contratación',
      significado:
        'según la RAE, “Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”.',
    },
    {
      termino: 'Cloud Computing',
      significado:
        'computación en la nube, conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en Internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Criptografía',
      significado:
        'arte de escribir con clave secreta o de un modo enigmático.',
    },
    {
      termino: 'Criptomoneda',
      significado: 'son monedas digitales que se intercambian online.',
    },
    {
      termino: 'DHCP (Protocolo de configuración dinámica de host):',
      significado:
        'protocolo que permite a un dispositivo de una red, conocido como servidor DHCP, asigna direcciones IP temporales a otros dispositivos de red y normalmente equipos.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'dirección que se utiliza para identificar un equipo o dispositivo en una red.',
    },
    {
      termino: 'Enrutador',
      significado:
        'dispositivo de red que conecta redes múltiples, tales como una red local e Internet.',
    },
    {
      termino: 'Migración',
      significado:
        'en tecnología, consiste en el desplazamiento del software, aplicaciones o sistemas de información de una infraestructura tecnológica a otra, por ejemplo, la migración de una aplicación de un servidor local a un servidor en la nube.',
    },
    {
      termino: 'Proveedor',
      significado: 'sujeto o entidad que suministra un producto o servicios.',
    },
    {
      termino: 'Red',
      significado:
        'serie de equipos o dispositivos conectados con el fin de compartir datos, almacenamiento y la transmisión entre usuarios.',
    },
    {
      termino: 'TCP (Transport Control Protocol):',
      significado:
        'protocolo de red para la transmisión de datos que requiere la confirmación del destinatario de los datos enviados.',
    },
    {
      termino: 'Topología',
      significado: 'distribución física de una red.',
    },
  ],
  referencias: [
    {
      referencia: 'Allcode.com (2021). 10 Top Cloud Providers in 2021',
      link: 'https://allcode.com/cloud-providers/',
    },
    {
      referencia:
        'Claranet.es (2021). 6 enfoques para afrontar la migración a la nube. ',
      link:
        '. https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube',
    },
    {
      referencia: 'Corona, A. E. (2004). Protocolos tcp/ip de internet.',
      link: 'https://basicamente18.wixsite.com/todored/historia',
    },
    {
      referencia: 'La red y todo sobre ella. ',
      link: 'https://basicamente18.wixsite.com/todored/historia',
    },
    {
      referencia:
        'Moro Vallina, M. (2013). Infraestructuras de redes de datos y sistemas de telefonía. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
      link: '',
    },
    {
      referencia: 'RAE / Real Academia Española (2021). Contratar',
      link: 'https://dle.rae.es/contratar ',
    },
    {
      referencia: 'SANTOS GARCÍA (2012).  Comunicación oral y escrita',
      link:
        'http://190.57.147.202:90/jspui/bitstream/123456789/650/1/Comunicacion_oral_y_escrita.pdf',
    },
    {
      referencia:
        'SECRETARIA GENERAL DE LA ORGANIZACIÓN DE LOS ESTADOS AMERICANOS (1992). Honduras - Proyecto de Manejo de los Recursos Naturales Renovables de la Cuenca del Embalse el Cajón - Estudio de Factibilidad. Costos y financiamiento. ',
      link: 'https://www.oas.org/dsd/publications/Unit/oea15s/ch09.htm',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., y Stevens, W. R. (2000). Comunicaciones y Redes de Computadores, 7ª Edición. Pearson Prentice-Hall',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'AUTORES',
      autores: [
        {
          nombre: 'Cesar Antonio Villamizar Núñez',
          cargo: 'Experto Temático',
          centro: 'Regional Norte de Santander - Centro CIES',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesor metodológico y pedagógico',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología. ',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander. Centro Industrial del Diseño y la Manufactura',
          fecha: 'Septiembre,2022',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Norte de Santander - Centro CIES',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander. Centro de la Industria, la Empresa y los Servicios',
          fecha: 'Septiembre,2022',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Ingeniero desarrollador Full Stack',
          centro: 'Regional Santander. San Gil',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
