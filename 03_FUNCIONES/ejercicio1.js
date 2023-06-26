// Ejercicio #1
// Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».

let numeroMayor = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > c && b > a) {
        return b;
    } else if (a === b && a === c) {
        return "Los números son iguales";
    } else {
        return c;
    }
    }
    console.log(numeroMayor(2000, 3000, 3000));