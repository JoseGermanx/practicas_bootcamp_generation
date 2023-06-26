// Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Mostrar por consola.

// Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).

let producto = {
    precio: 400,
    descuento: 10,
    imprimethis: console.log("Propiedad:", this), 
    neto: function() {
        console.log("Dentro del método:",this);
        return this.precio - this.descuento * this.precio / 100;
    }
}

function calculoResultado(precio, descuento) {
    return precio - descuento * precio / 100;
}

const resultado = producto.precio - producto.descuento * producto.precio / 100;

console.log("Función externa:", calculoResultado(producto.precio, producto.descuento));
console.log("Almacenada en variable:",resultado);
console.log("Función dentro del objeto:",producto.neto());