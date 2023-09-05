var arrLang = {
    "en": {
      "HOME": "Home",
      "ABOUT": "About me",
      "KNOWLEDGES":"Technical knowledge",
      "RESUME":"Resume",
      "PORTFOLIO":"Portfolio",
      "COURSES":"Courses",
      "LANGUAGES":"Languages",
      "SKILLS":"Skills",
      "CONTACT": "Contact me",
      "BIRTHDAY":"Birthdate:",
      "CITY":"City:",
      "NATIONALITY":"Nationality:",
      "AGE":"Age:",
      "DEGREE":"Degree:",
      "ABOUT-DESCRIPTION":"I'm bioengineer graduated, currently working in web development with four year of professional experience. I've always been interested in understanding how the web works, regardless of the known languages and ever looking for the integration of concepts. This search has led me to learn about the history of the web, the data send from and to the server, the refresh of pages, the meaning of Single Page Application, the importance of the introduction of AJAX in browsers, the role of Apis y endpoints in the modern web. I've always believed that the programming language is like a tool in the development, and therefore it's more useful to know these concepts correctly before any development. I'm mainly interested at backend, although I also work with frontend currently. In my current job, I use codeigniter 3, Jquery, PostgreSQL and VueJS, with a lot of use of the developer tools of the browsers, where I use console, network, sources, elements and application tabs. Focused on continuos formation, I'm seeking to learn new technologies. Nowdays, I'm learning about microservices concepts, using Serverless with Vercel and NextJS or lambda functions in AWS",
      "BIOENGINEER":"Bioengineer",
      "MILESTONES":"Milestones",
      "MILESTONES-DESCRIPTION":"Some numbers about achieved achievements",
      "COURSES":"Courses and certificates",
      "PROJECTS":"Professional projects",
      "PROGRAMMING-HOURS":"Programming hours",
      "PROGRAMMING-YEARS":"Years in software development",
      "AWARDS":"Awards and honours",
      "MVC":"Design pattern model view controller",
      "ARQ-TYPE":"Monolitics and serverless app",
      "FRAMEWORKS-LIBRARIES":"Frameworks and libraries",
      "API-CREATION":"Modeling and creation of Application programming interfaces (APIs)",
      "SESSION-MANIPULATION":"Session manipulation",
      "USER-CONTROL":"User control with JSON web tokens",
      "API-CONSUMO":"API consumpion",
      "SQL":"Structured Query Language(SQL) usage",
      "DATABASE":"Databases",
      "AUTHORIZATION-AND-AUTENTICATION":"Authorization and authentication",
      "ENCRIPTATION":"Encription and hash of data",
      "DATABASE-RELATIONAL-NO-RELATIONAL":"Relational and no relational databases",
      "PROFESSIONAL-USE":"Professional usage",
    },
    "es": {
      "HOME": "Inicio",
      "ABOUT": "Acerca de mi",
      "KNOWLEDGES":"Conocimientos técnicos",
      "RESUME":"Currículum",
      "PORTFOLIO":"Portfolio",
      "COURSES":"Cursos",
      "LANGUAGES":"Idiomas",
      "SKILLS":"Habilidades",
      "CONTACT": "Contacto",
      "BIRTHDAY":"Fecha de nacimiento:",
      "CITY":"Ciudad:",
      "NATIONALITY":"Nacionalidad:",
      "AGE":"Edad:",
      "DEGREE":"Título:",
      "ABOUT-DESCRIPTION":"Bioingeniero trabajando en el campo del desarrollo web, con cuatro años de experiencia profesional. Al margen de los lenguajes conocidos, siempre estuve interesado en comprender el funcionamiento de la web, buscando la integración de conceptos. Esta búsqueda de integración me llevó a aprender de la historia de la web, los conceptos de envío de datos al servidor y refresco de páginas, el significado de Single Page Application, la importancia de la introducción de AJAX en los navegadores, el rol fundamental de las Apis y endpoints en la web moderna. Siempre creí que el lenguaje de programación es en realidad una herramienta, y que es más importante conocer correctamente estos conceptos antes de cualquier desarrollo. Interesado principalmente en backend, aunque en actualidad también trabajo con frontend. En empleo actual hago uso de codeigniter 3, Jquery, PostgreSQL y VueJS, con mucho de uso de las herramientas de desarrollador de los navegadores, donde utilizo las pestañas de consola, los elementos de red, las fuentes, los elementos, la aplicación. Siempre apuntando a la formación continua, busco aprender nuevas tecnologías. Hoy en día estoy aprendiendo conceptos de microservicios, haciendo uso de Serverless con Vercel usando NextJS o funciones Lambda en AWS",
      "BIOENGINEER":"Bioingeniero",
      "MILESTONES":"Hitos",
      "MILESTONES-DESCRIPTION":"Algunos números sobre logros alcanzados",
      "COURSES":"Cursos y certificados",
      "PROJECTS":"Proyectos profesionales",
      "PROGRAMMING-HOURS":"Horas de programación",
      "PROGRAMMING-YEARS":"Años en desarrollo de software",
      "AWARDS":"Premios y reconocimientos",
      "MVC":"Patrón de diseño modelo vista controlador",
      "ARQ-TYPE":"Aplicaciones monolíticas y serverless",
      "FRAMEWORKS-LIBRARIES":"Frameworks and librarias",
      "API-CREATION":"Modelado y creación de Application Programming Interfaces (API)",
      "SESSION-MANIPULATION":"Manipulación de sesiones",
      "USER-CONTROL":"Control de usuarios con JSON Web Tokens(JWT)",
      "API-CONSUMO":"Consumo de APIs",
      "SQL":"Uso de Structured Query Language(SQL)",
      "DATABASE":"Base de datos",
      "AUTHORIZATION-AND-AUTENTICATION":"Autorización y autenticación",
      "ENCRIPTATION":"Encriptation y hasheado de datos",
      "DATABASE-RELATIONAL-NO-RELATIONAL":"Base de datos relacionales y no relacionales",
      "PROFESSIONAL-USE":"Uso profesional",
    }
  };

  $(document).ready(function() {
    // The default language is English
    var lang = navigator.language.slice(0,2);
    console.log({lang})
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language
  $(".translate").click(function() {
    var lang = $(this).attr("id");

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
