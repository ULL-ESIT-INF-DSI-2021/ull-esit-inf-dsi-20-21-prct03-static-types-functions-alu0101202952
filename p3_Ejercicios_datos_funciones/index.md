# Informe Práctica 3: Tipos de datos estáticos y funciones (Primeros ejercicios en TypeScript y Typedoc)


![Image](https://i.imgur.com/FGyMult.png)



╔═══════════════════════════════════════════════════════════════════╗

> - Autora: Andrea Calero Caro > [alu0101202952@ull.edu.es](alu0101202952@ull.edu.es)
> - Práctica 3: Tipos de datos estáticos y funciones (Primeros ejercicios en TypeScript y Typedoc)
> - Asignatura: Desarrollo de Sistemas Informáticos
> - Universidad de La Laguna

╚═══════════════════════════════════════════════════════════════════╝



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## Índice


  - Objetivos
  - Paso previo: Aceptación de tarea de GitHub Classroom
  - Estructura básica de proyectos
  - Primeros pasos de configuración con Typedoc 
  - Ejercicios en TypeScript con typedoc
    - Ejercicio 1
    - Ejercicio 2
    - Ejercicio 3
    - Ejercicio 4
    - Ejercicio 5
    - Ejercicio 6
    - Ejercicio 7
    - Ejercicio 8
    - Ejercicio 9
    - Ejercicio 10 
  - Desarrollo documentación con Typedoc
  - Desarrollo del informe con GitHub Pages
  - Conclusiones
  - Bibliografía y/o Webgrafía
  
  



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## OBJETIVOS


Los objetivos en esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad, tanto los tipos de datos estáticos en TypeScript, como las funciones, empleando también expresiones regulares. Además de configurar la documentación en typedoc.

- **ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc](http://127.0.0.1:5500/p3_Ejercicios_datos_funciones/docs/index.html)



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/5TY1Rmu.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica siguiendo algunos pasos indicados en :

> - [Estrutura](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html)


Para ello creo el directorio donde empezaremos a estructurar los directorios y ejercicios, además de configurar el **package.json**, quedando el package.json tal que:

![package.json](https://i.imgur.com/EVHNhZV.jpg)

También necesitamos crear a partir de este el **tsconfig.json** con la ruta de localización de los ejercicios.ts, en el directorio `./src` y sus ejecutables .js en el directorio `./dist`, tal que:

![tsconfig.json](https://i.imgur.com/KuKqur7.jpg)


Automáticamente, o manualmente, se crearía ambos directorios donde trabajaremos. Quedando la primera estructura básica de la forma:

![Estructura básica](https://i.imgur.com/9u30DB6.jpg)

También necesitaremos una compilación con control automático de cambios que instalaremos con el comando `npm install --save-dev tsc-watch`, tal que:

![Compilacion control de cambios automáticos](https://i.imgur.com/7Ip0IWk.jpg)


Tras la estructura básica nos dedicaremos a trabajar en el directorio `./src` donde alojaremos los ficheros correspondientes a los ejercicios que se nos plantea en esta práctica



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PRIMEROS PASOS DE CONFIGURACIÓN CON TYPEDOC

Como en esta práctica era opcional realizar la documentación con **Typedoc**, pero en otras prácticas posteriores si se me iban a pedir, decidí iniciarme en esta práctica en el manejo de la documentación mediante Typedoc. Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/), gracias a la información de dicha página web,  la explicación en clase y el video de instalación y configuración de este he conseguido tener la documentación de mi práctica, la cual enseñaré más adelante, se localiza en el directori o `./doc` y cuya documentación presento tanto en el apartado **OBJETIVOS** de este informe y a continuación:

> - [Informe documentación en Typedoc](http://127.0.0.1:5500/p3_Ejercicios_datos_funciones/docs/index.html)


Primero para ello necesitaremos instalar Typedoc así como sus dependencias para ello la opción `--save-dev`, quedando:

![Instalación de Typedoc](https://i.imgur.com/q8cER6s.jpg)

Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`:

![./node_modules](https://i.imgur.com/QzCbxpd.jpg)


Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, al cual le añadimos: 

![typedoc.json](https://i.imgur.com/oiYEcex.jpg)

Como observamos en `"entryPoints" :[]` pondremos la ruta de los ficheros sobre los cuales haremos su documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.

Pero para poder usar la herramienta necesitamos invocarla con un comando, dicho comando será: `npm run [nombre_invocación]`, el nombre de invocación es lo siguiente que configuraremos en el **package.json**, para ello pondremos en la parte de scripts del fichero:

> `"doc": "typedoc"`

- **doc**: será el nombre con el que ejecutaremos la herramienta
- **typedoc**: la herramienta que lleva la documentación de la práctica

Esto quedaría tal que:

![Typedoc configuracion package.json](https://i.imgur.com/pgYBgQ5.jpg)


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos:

![npm run doc](https://i.imgur.com/VDJ6hiu.jpg)

Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet quedaría tal que:

![Tipo de comentarios](https://i.imgur.com/HnRBdK0.jpg)

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación, como:

![TypeDoc final HTML](https://i.imgur.com/dCZG30B.jpg)

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━







▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## EJERCICIOS EN TYPESCRIPT CON TYPEDOC

En este apartado nombraremos en qué consisten los ejercicios pues los encontramos alojados en el repositorio en:

- [Ejercicios Práctica 3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101202952/tree/desarrollo/p3_Ejercicios_datos_funciones)

A continuación explicaré en qué consiste cada uno de los ejercicios con mi documentación de Typedoc


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 1

/**
 * ### EJERCICIO 1:
 * #### ¿En qué consiste?
 * Pasas al programa un año y si cumple las condiciones establecidas te dirá si el año es bisiesto o no
 * @param year Consiste en el año que pasaremos a la función para ver si es bisiesto
 * @return `true` Si el año es bisiesto 
 * @return `false` Si el año **NO** es bisiesto
 * 
 */
 
 
 /**
 * ```typescript
 * leapYear = isLeapYear(1997)
 * @return `false`
 * ```
 */



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 2

/**
 * ### EJERCICIO 2:
 * #### ¿En qué consiste?
 * Dos funciones, una te convierte el decimal en notación factorial y la otra el factorial en notación decimal
 * ##### FUNCIÓN `decimalToFactorial`
 * @param ndecimal Consiste en el decimal que pasaremos a la función para convertirlo en su notación factorial
 * @return `factorial` correspondiente
 * ##### FUNCIÓN `maxfactorial`
 * @param ndecimal Consiste en el decimal que pasaremos a la función para encontrar el máximo factorial por el que se puede dividir
 * @return `factorialrecursive` el factorial correspondiente de llamar a la función recursiva que calcula los factoriales
 * ##### FUNCIÓN `factorialrecursive`
 * @param nfactorial Consiste en el factorial que pasaremos a la función para encontrar su resultado
 * @return `nfactorial * factorialrecursive (nfactorial-1)` el factorial correspondiente 
 */


/**
 * ```typescript
 * resultado = decimalToFactorial(463)
 * @return 341010
 * ```
 */




▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## DESARROLLO DEL INFORME CON GITHUB PAGES


Tras finalizar la práctica se nos requiere un informe en con el formato de estilos de Markdown en **GitHub Pages**, para ello usamos la guía de estilos de Markdown en [Markdown guide](https://guides.github.com/features/mastering-markdown/).

Y así finalizamos esta práctica e informe redactado en el archivo **index.md** dentro de la rama **gh_pages**.





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## CONCLUSIONES


Conclusión sobre la práctica e informe, aquí plantearé la dinámica de la práctica y posibles dudas que me hayan surgido y solucionado. La práctica en sí la hice sin dificultad al igual que el informe pues ya en la práctica 1, me familiaricé con la herramienta de GitHub Pages.

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## BIBLIOGRAFÍA Y/O WEBGRAFÍA


- https://ull-esit-inf-dsi-2021.github.io/prct02-vscode/
