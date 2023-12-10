// Definir las variables para guardar la información del usuario
let cantidad = 0;
let variedad = '';

// Definir un array para almacenar las variedades de café
let variedades = ['latte', 'americano', 'flat white'];

// Definir un array para almacenar las variedades de café y sus precios
let precios = {
    'latte': 1100,
    'americano': 1000,
    'flat white': 1200
};

// Función para obtener la información del usuario a través de prompt
function obtenerInformacion() {
    cantidad = parseInt(prompt('Ingrese la cantidad de café que desea ordenar:'));
    variedad = prompt('Ingrese la variedad de café que desea ordenar (latte, americano, flat white):');
}
obtenerInformacion();

// calcular el total del pedido

function obtenerPrecioTotal() {
    let total = 0;
    for (let i = 0; i < cantidad; i++) {
        total += precios[variedad];
    }
    return total;
}

console.log("pediste", cantidad, "unidad/es de café", variedad,'Precio total: $', obtenerPrecioTotal())












