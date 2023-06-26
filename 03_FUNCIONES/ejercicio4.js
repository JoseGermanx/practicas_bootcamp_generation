// Ejercicio #4
// Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.


let sumaArreglo = arreglo => {
let total = 0;
arreglo.forEach(element => total+=element);
return total;
}

console.log(sumaArreglo([1,2,3]));

let sumaArreglo2 = (arreglo) => {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i];
    }
    return total;
}


