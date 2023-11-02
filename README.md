# KeepCoding Web Bootcamp XV - Frontend PRO

Proyecto del módulo de Frontend PRO del Bootcamp de Web de KeepCoding.

### Requisitos
Para el seguimiento del curso vamos a utilizar las herramientas que ya conocemos:
- Visual Studio Code
- NodeJS
- NPM
- Git
- Navegador Web

### Proyecto

El proyecto consiste en la creación de una página web bàsica de la final de Quidditch de Harry Potter.

Partiremos de una estructura básica de HTML y CSS y la iremos mejorando a lo largo del curso.

Inicio:
```
index.html
teams.html
404.html
contact.html
|- css
    └---- main.css
|- img
    └---- logo.png
|- js
    └---- main.js

```

Final:
```
|- src
|---- index.html
|---- teams.html
|---- 404.html
|---- contact.html
|---- css
    └-------- reset.css
    └-------- styles.css
    └-------- form.css
|---- img
    └-------- logo.png
|---- js
    └-------- app.js
    └-------- form.js
|- dist
```

```
npm run build
comando "build" está configurado para ejecutar Webpack en modo de producción. Esto podría implicar la creación de un paquete optimizado listo para su implementación en un entorno de producción.
```

```
El comando npm i -D css-loader style-loader se utiliza para instalar dos paquetes de desarrollo (css-loader y style-loader) en un proyecto de Node.js que utiliza npm como administrador de paquetes. Estos paquetes son comunes en proyectos que involucran la construcción y procesamiento de hojas de estilo CSS, especialmente cuando se trabaja con herramientas como Webpack.

css-loader: Este paquete permite cargar archivos CSS en tu proyecto y es comúnmente utilizado con bundlers como Webpack. Te permite importar archivos CSS dentro de tu código JavaScript.

style-loader: Este paquete se usa para inyectar estilos CSS directamente en el documento HTML. Cuando trabajas con Webpack, puedes combinar style-loader con css-loader para cargar y aplicar estilos CSS en tu aplicación.

El uso de -D o --save-dev al instalar paquetes con npm significa que se instalarán como dependencias de desarrollo. Esto significa que estos paquetes no se utilizarán en producción, pero son esenciales para el desarrollo y construcción de tu proyecto.

Una vez que ejecutes el comando npm i -D css-loader style-loader, estos paquetes se agregarán al archivo package.json en la sección de devDependencies. Después, puedes configurar tu proyecto para utilizar estos paquetes en tu proceso de desarrollo, por ejemplo, al configurar Webpack para cargar y aplicar estilos CSS en tu aplicación.
```

```
Para desinstalar los paquetes css-loader y style-loader de tu proyecto Node.js que utiliza npm como administrador de paquetes,
npm uninstall css-loader style-loader
```