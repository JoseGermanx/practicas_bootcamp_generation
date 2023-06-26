// Ejercicio #2
// Escriba una función con el nombre de esVocal() que tome un carácter, devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.

let esVocal = (letra) => {
    if (typeof letra !== "string") {
        return "Error: El parámetro debe ser de tipo string";
    }
    if (letra.length !== 1) {
        return "Error: El parámetro debe ser un solo carácter";
    }    
    if (letra.to === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" || letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
        return true;
    } else {
        return false;
    }
}
console.log(esVocal("h"));