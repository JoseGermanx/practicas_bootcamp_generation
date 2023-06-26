//Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

function booleanoArray(arreglo1, arreglo2) {
    let arreglo3 = arreglo1.concat(arreglo2);
    if (arreglo3.length >= 10) {
        return true;
    } else {
        return false;
    }
}

console.log(booleanoArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11,12,13,14,15,16,17,18,19,20])); // true