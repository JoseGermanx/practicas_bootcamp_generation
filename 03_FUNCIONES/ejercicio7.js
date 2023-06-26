// Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

function funcionArray(arreglo1, arreglo2) {
    let arreglo3 = arreglo1.concat(arreglo2);
    let arreglo4 = [];
    for (let i = 0; i < arreglo3.length; i++) {
        arreglo4.push(arreglo3[i] * 2);
    }
    return arreglo4;
}

console.log(funcionArray([2, 5, 2], [1, 5, 3])); // [4,10,4,2,10,6]