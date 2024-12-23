 /* MÓDULOS
Son unidades de código reutilizable

Una función, un controlador, una ruta de node, etc. Todo es un módulo

Pueden ser locales (hechos por nosotros) o externos (debemos de instalarlos)

Se importan con require() o import

*/

// Ejemplo de módulos locales

const saludar = (nombre) => 
{
    return `Hola ${nombre}`
}

const sumarXY = (x, y) => 
{
    return x + y
}
module.exports = { saludar, sumarXY}

 
/* PAQUETES
    Son colecciones de módulos relacionados emapquetados
*/

/* DEPENDENCIAS
    Son paquetes que tu aplicación necesita para funcionar
    Se declaran en el package.json:
        - dependencies: dependencias hoy y siempre
        - devDependencies: dependencias solo necesarias durante desarrollo
    
    Se instalan usando npm install o yarn add
*/

/*Ejemplo de dependencias en package.json:
{
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.0.0"
  },
  "devDependencies": {
    "jest": "^27.0.0",
    "nodemon": "^2.0.0"
  }
}
*/

/* LIBRERÍAS

    Termino más general para describir a GRAN codigo reutilizable
    Pueden ser uno o varios paquetes para proporcionar funcionalidades específicas
    Ejemplos:
        - React (UI) 
        - Lodash (utilidades)
        - Express (servidor web)
        - 
        -  
        -  
*/