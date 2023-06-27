
const numeros = [1,2,3,4,5,6]

function multiplicarArreglo(arr) {
const min = Math.min([...arr]);
const max = Math.max(...arr);
return min*max; 
}
console.log("Resultado: ", multiplicarArreglo(numeros))