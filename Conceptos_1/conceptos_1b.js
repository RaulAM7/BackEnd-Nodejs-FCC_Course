// ----------------------- 1.- EJEMPLOS DE MÓDULOS

// Puedo importar mediante destructuring
const {saludar, sumarXY} = require("./conceptos_1")
console.log('Usando destructuring')
console.log(saludar("raul"))
console.log(sumarXY(1, 3))


// O puedo importar todo el objeto y que las funciones sean métodos
const funciones = require("./conceptos_1")
console.log('Usando importación de un objeto completo')
console.log(funciones.saludar("raul"))
console.log(funciones.sumarXY(1, 3))


// ----------------------- 1.- EJEMPLOS DE MÓDULOS
