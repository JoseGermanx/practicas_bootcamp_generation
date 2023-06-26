// Ejercicio #3
// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx».

let generar_caracteres = (n, caracter) => {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += caracter;
    }
    return resultado;
}
console.log(generar_caracteres(10, "xX")); 
