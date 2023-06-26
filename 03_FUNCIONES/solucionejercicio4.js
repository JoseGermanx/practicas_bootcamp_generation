// Ejercicio #4
// Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.

const arreglo = [1,2,3,4,5,6,7,8,9]
let sumaArreglo = arregloNumeros => {
    let suma = 0;
    let longitud = arregloNumeros.length;
    // ciclo for para iterar el arregloNumeros
    for(let i = 0; i < arregloNumeros.length; i++) {
       // suma = suma + arregloNumeros[i];
        suma += arregloNumeros[i];
   }
    return suma + longitud;
}

console.log("Solución, José:", sumaArreglo(arreglo))

function sumaArreglo3(list){
    return list.reduce((a,b) => a+b, 0)
    
}

const list3 = sumaArreglo3(arreglo)
const list4 = arreglo.length + list3

console.log("Solución Cristian:", list4)

// Solucion Franco
function arregloNumeros(arregloNumeros) {
    let suma = 0;
    let longitud = arregloNumeros.length;

    for (let i = 0; i < arregloNumeros.length; i++) {
        suma = suma + arregloNumeros[i];
    }
    return suma + longitud;
}

console.log("Solución Franco:", arregloNumeros(arreglo));

// Solucion Diego

let sumaArreglo2 = lista => {
    let suma = 0;
    lista.forEach( item => {
        suma += item;
    });
    return suma;
}

const sumaNumeros = sumaArreglo2(arreglo);

console.log("Solución Diego:", `El arreglo contiene ${arreglo.length} numeros, y la suma de estos son: ${sumaNumeros + arreglo.length}`);
