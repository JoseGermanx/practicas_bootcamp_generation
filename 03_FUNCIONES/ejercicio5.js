// Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

function multiplicarArreglo(arreglo) {
    let min = Math.min(...arreglo);
    let max = Math.max(...arreglo);
    return min * max;
}

console.log(multiplicarArreglo([2, 3, 4, 5, 6, 7, 8, 9, 10])); // 20