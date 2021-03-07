# Informe Práctica 3: Tipos de datos estáticos y funciones (Primeros ejercicios en TypeScript)


![Image](https://i.imgur.com/FGyMult.png)



╔═══════════════════════════════════════════════════════════════════╗

> - Autora: Andrea Calero Caro > [alu0101202952@ull.edu.es](alu0101202952@ull.edu.es)
> - Práctica 3: Tipos de datos estáticos y funciones (Primeros ejercicios en TypeScript)
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


Tras la estructura básica nos dedicaremos a trabajar en el directorio `./src` donde alojaremos los ficheros correspondientes a los ejercicios que se nos plantea en esta práctica



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PRIMEROS PASOS DE CONFIGURACIÓN CON TYPEDOC

Como en esta práctica era opcional realizar la documentación con **Typedoc**, pero en otras prácticas posteriores si se me iban a pedir, decidí iniciarme en esta práctica en el manejo de la documentación mediante Typedoc. Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/), gracias a la información de dicha página web,  la explicación en clase y el video de instalación y configuración de este he conseguido tener la documentación de mi práctica, la cual enseñaré más adelante, se localiza en el directori o `./doc` y cuya documentación presento tanto en el apartado **OBJETIVOS** de este informe y a continuación:

> - [Informe documentación en Typedoc](http://127.0.0.1:5500/p3_Ejercicios_datos_funciones/docs/index.html)





━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PRIMER PROYECTO EN TYPESCRIPT: "HOLA MUNDO"

En primer lugar instalamos la extensión obligatoria de **ESLint**, esta nos permite realizar comprobaciones de estilo sobre ficheros que incluyan código fuente en JavaScript y TypeScript.

A continuación abrimos una Nueva Terminal, en VSC dentro de la conexión SSH con mi máquina virtual, en la barra superior de tareas o con la combinación > `Ctrl + Shift + ñ`. Y procederemos a instalar el compilador de TypeScript, y veremos la versión en la que se encuentra con el comando > `tsc --version` tal que:

![Instalar compilador de TypeScript](https://i.imgur.com/j1JDNYP.jpg)

Y en la terminal comprobamos la ruta en la que estamos situados con > `pwd` y creamos el directorio hello-world, en el que trabajaremos para crear nuestro primer programa de **"Hola Mundo"**

Como ya sabemos tendremos primero que clonar el repositorio asignado en la tarea de GitHub Classroom con > `git clone [enlace]` y trabajaremos desde el repo, por tanto, comenzaremos con > `git init` para trabajar en la rama.

Y ya podríamos hacerlo:

![mkdir hello-world](https://i.imgur.com/jZOyq1d.jpg)

Veríamos a su vez cómo se creó dicho directorio y los permisos, tal que:

![Permisos](https://i.imgur.com/cYgy3Ou.jpg)

Para trabajar de forma eficiente creamos un espacio de trabajo en la opción > `Add Folder to Workspace...`, puse un nombre por defecto asociado al directorio de **hello-world** y lo guardé con > `Save Workspace As...`. A continuación, creo un fichero dentro del directorio con el nombre de  **tsconfig.json** esto lo hago desde la terminal con el comando `touch`, y le añadimos las líneas:

> `{
>  "compilerOptions": {
>    "target": "ES2018",
>    "outDir": "./dist",
>    "rootDir": "./src",
>    "module": "CommonJS"
>  }
>}`

Con ello configuraríamos cómo se compilaría el código de TypeScript, quedando:

![Crear tsconfig.json](https://i.imgur.com/ncNThAE.jpg)

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Procederemos creando otro fichero **index.ts** que será necesario para la implementación del código de "Hola Mundo" a compilar, para que quede organizado y como se especificó en el código anterior del fichero **tsconfig.json**("rootDir": "./src"), quedando:

![Src directorio,index.ts](https://i.imgur.com/3sznxD3.jpg)

Creándose así satisfactoriamente el fichero.

Ahora rellenamos el fichero **index.ts** con el código que imprimirá por pantalla el "Hola Mundo", tal que:

![Código Hola Mundo](https://i.imgur.com/FfHtaAZ.jpg)

Y lo compilamos con el comando > `tsc`, esto compilará el código en un .js que se denotará como **index.js** y que se alojará en el directorio **./dist**, tal y como se especificó en el fichero **tsconfig.json** ("outDir": "./dist"), el directorio dist se crearía sin nosotros haberlo creado manualmente:

![Creacion index.js y directorio ./dist](https://i.imgur.com/5zDEPvR.jpg)

Ahora comprobaremos si entre ambos ficheros existe diferencia y para ello hacemos, con el comando > `diff` :

![Diff comando](https://i.imgur.com/IlkFYJE.jpg)

Analizando la imagen en mi caso detecta diferencia entre en la línea > `let myString: string = "Hola Mundo";` y la línea > `let myString = "Hola Mundo";`. Además, por error mío detecta un error más porque en el fichero **.ts** hay un espacio más al final del código, esto nos da a ver que el comando detecta todo tipo de diferencias, como si es de tener una línea más en blanco:

![diff](https://i.imgur.com/fOSQzk3.jpg)

Una vez que ya tenemos el código compilado sería hora de ejecutarlo con el comando > `node`, quedando de la manera:

![Node](https://i.imgur.com/EZBjxxW.jpg)

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Comprobando así que se ejecuta perfectamente.

Damos por concluída la práctica hacemos un **commit** con el comando: > `git add .` y luego con > `git commit -m` y así guardamos los cambios del proceso. Por último subimos los cambios con > `git push -u origin master` y así tenerlos en el repositorio GitHub.


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
