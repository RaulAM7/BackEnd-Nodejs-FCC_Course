// MÓDULOS
/*
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


