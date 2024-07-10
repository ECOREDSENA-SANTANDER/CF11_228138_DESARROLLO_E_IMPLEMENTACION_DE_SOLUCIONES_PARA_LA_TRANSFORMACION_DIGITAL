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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'AWS',
      significado:
        'Amazón Web Services: servicios de cloud ofrecidos por Amazon.',
    },
    {
      termino: 'Azure',
      significado: 'Servicios de computación en la nube de Microsoft. ',
    },
    {
      termino: 'CapEx',
      significado:
        'En los sistemas de TI es una inversión a largo plazo que inmoviliza una gran suma de dinero en una sola inversión. ',
    },
    {
      termino: 'CSC',
      significado: 'Cliente de Servicios Cloud. ',
    },
    {
      termino: 'CSP',
      significado: 'Proveedor de Servicios Cloud. ',
    },
    {
      termino: 'GCP',
      significado: 'Google Cloud Platform. ',
    },
    {
      termino: 'Huella de Carbono ',
      significado:
        'Representa el volumen total de gases de efecto invernadero (GEI) que producen las actividades económicas y cotidianas del ser humano. ',
    },
    {
      termino: 'Hypervisor',
      significado:
        'Un hipervisor, conocido también como monitor de máquina virtual (VMM), es un software que crea y ejecuta máquinas virtuales (VM) y que, además, aísla su sistema operativo y recursos de las máquinas virtuales y permite crearlas y gestionarlas. ',
    },
    {
      termino: 'IaaS',
      significado: 'Infraestructura como servicio. ',
    },
    {
      termino: 'NaaS',
      significado: 'Redes como servicio. ',
    },
    {
      termino: 'Nube Hibrida ',
      significado:
        'Son nubes que combinan las características de dos nubes privadas, las nubes públicas o compartidas, se caracterizan por que permiten el poder compartir servicios e infraestructura entre ambas nubes. ',
    },
    {
      termino: 'Nube Privada',
      significado:
        'En este tipo de nube los servicios y la infraestructura es gestionada específicamente por una organización y no se ofrecen estos servicios al público en general. ',
    },
    {
      termino: 'Nube Publica    ',
      significado:
        'Los servicios e infraestructura son gestionados por un proveedor de tecnológico el cual ofrece estos servicios al público en general.',
    },
    {
      termino: 'OpEx',
      significado:
        'Es un gasto recurrente que podría dotar a la compañía de la agilidad de usar los fondos en otras inversiones rentables. ',
    },
    {
      termino: 'Partner    ',
      significado:
        'Socio u operador de servicios en la nube (CSN) es una parte que se dedica a respaldar o proporcionar actividades de soporte auxiliar a las actividades del cliente o proveedor de servicios cloud. ',
    },
    {
      termino: 'PaaS    ',
      significado: 'Plataforma como servicio. ',
    },
    {
      termino: 'SaaS    ',
      significado: 'Software como servicio. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Del Vecchio, J. F., Paternina, F. J., y Henríquez Miranda, C. (2015). La computación en la nube: un modelo para el desarrollo de las empresas. Prospectiva, 13(2), 81-87. ',
      link: '',
    },
    {
      referencia:
        'Escobar, V. C., Celis, M. T. B., y Ramírez, J. D. S.  (2015). Modelo, diseño y técnicas básicas para implantar un sistema de computación en la nube. [Tesis de pregrado, Institución Universitaria Politécnico Grancolombiano]. Sistema Nacional de Bibliotecas SISNAB. ',
      link: '',
    },
    {
      referencia:
        'Giraldo, L. A. (2019). ¿Cómo ha evolucionado la computación en la nube a través del tiempo?',
      link:
        'https://www.pragma.com.co/blog/como-ha-evolucionado-la-computacion-en-la-nube-a-traves-del-tiempo',
    },
    {
      referencia: 'ISO/IEC 17789:2014. (2021).',
      link: 'https://www.iso.org/standard/60545.html',
    },
    {
      referencia:
        'Padilla Aguilar, J. J., & Pinzón Castellanos, J. (2015). Estándares para Cloud Computing: estado del arte y análisis de protocolos para varias nubes. Puente. Revista Científica. Vol. 9 No. 2. ',
      link: '',
    },
    {
      referencia:
        'Califf, C.; Sarker, S.; Skilton, M. (2016). The role and Value of a Cloud Service Partner. MIS Quarterly Executive. 15:3.',
      link:
        'https://www.researchgate.net/publication/309285232_The_Role_and_Value_of_a_Cloud_Service_Partner.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma ',
          cargo: 'Instructor',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Revisora metodológica y pedagógica ',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor Pedagógico ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura. ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Diseñador y Evaluador Instruccional ',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica  ',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
