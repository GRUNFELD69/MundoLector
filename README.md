# MiNTIC_mundolector
Repositorio correspondiente al ciclo 4 Desarrollo Web

## Commit 1
Se modifica el archivo .gitignore para proyecto con nodeJS

## Commit 2
Se agrega carpeta para los archivos nde backend del proyecto. Se inicia el proyecto con npm init y se modifica el archivo package.json para ejecutar los cmomando npm start y npm dev

## Commit 3 
Se instala dependencia firebase-admin. Se agrega llave para la base de datos. Se crea archivo index.js

## Commit 4
Se crea el directorio src (para alojar el codigo fuente) y dentro un directorio db (para guardar los archivos de operaciones con la base de datos). Se modifica el gitignore para evitar que la llave sea publicada dentro del repositorio. Se crea el archivo firebaseConnection para la conexion con la base de datos.

## Commit 5 
Se corrige la numeracion de los commits en el archivo readme.md. Se modifica la linea en el .gitignore para ignorar la llave de conexion a firebase. Se instala la dependencia express (npm install express --save).

## Commit 6
Se agrega el directorio key para guardar la llave de conexion con firebase. Se crea el archivo crud.js para guardar las funciones que modifican la base de datos.Pruebas de la funcion getBooks.

## Commit 7
Se agrega la app a traves de express. Se incluye la carpeta public para publicar archivos estaticos. Pruebas de los metodos getBooks y getBook a traves de una peticion get. Se agrega callback a las funciones para retornar los valores obtenidos de la base de datos. Se construye logica para determinar si el resultado de la consulta de un libro es vacia.

## Commit 8
Se cambia la clave de ingreso a firebase. Para evitar vulnerabilidades

## Commit 9
Se termina el CRUD mejorado para la coleccion Libros. Compuesto por metodos GET, POST, PATCH, UPDATE y DELETE. 

## Commit 10
Se agrega CRUD para las colecciones Usuarios y Ordenes. Se agregan metodos GET, POST, PUT, DELETE para users, orders. Se agrega el archivo app.js para guardar la configuración de la aplicación.

## Commit 11
Se agrega axion dependencia. Se agregan bookRoutes.js y userRoutes.js y orderRoutes para guardar las rutas de cada colección. Se agrega el archivo index.s (dentro de la carpeta routes) para exportat todas las direcciones a el archivo principal.

## Commit 12
Se agregan los metos searchBookbyCatgory (para buscar libros que sean de la misma categoria), searchBookByAuthor (retorna un arreglo de libros escritos por el mismo autor) y searchUserByUsername (encontar el usuario que corresponde al username). Se agregan las rutas localhost:3000/user/search/:username, /book/search/categoria/:Categoria y /books/search/autor/:Autor

## Commit 13
Se agrega el metodo para buscar oredenes por el destinatario. Se agrega el CRUD para la colección Facturas y se agregan los metodos de agregar y obtener la lista de facturas. Se agregan las rutas para las facturas.

## Commit 14
Se corrige error en el metodo get(/:id), que respondia siempre 'Error getting order'. Se corrige el metodo put en la coleccion usuarios (Se usa update Total). Se corrige metodo put en colección Ordenes. Solo hacia update en campos seleccionados.

## Commit 15
Se agrega react al archivo .gitignore. Se crea la aplicación con react dentro del archivo frontend. Se elimina el archivo .gitignore dentro de la carpeta frontend. Se crea el directorio compnents dentro de src para guardar los componentes asociados con la aplicación.

## commit 16
Se installa react, react-dom y react-boostrap-dom. Se crea el directorio screens para guardar las vistas. Directorio assets para guardar las imagenes. Se crea la NavBar y se agrega al archivo App.js para que aparezca en todas las vistas. Se agregan 3 vistas: BookSelect.js, Landing.js y OrderBook.js. Se agregan el componente BotonsingnIn.js.
