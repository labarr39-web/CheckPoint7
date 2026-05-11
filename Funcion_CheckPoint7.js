function checkPoint7(num1, num2, num3, num4) {
    let resultado = (num1 + num2) * (num3 + num4);

    if (resultado > 50) {
        return "¡El número es mayor que 50!";
    } else if (resultado < 50) {
        return "¡El número es menor que 50!";
    } else {
        return "¡El número es igual a 50!";
    }
}

/*
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));
let numero4 = parseInt(prompt("Ingrese el cuarto número:"));
*/

let numero1 = 7;
let numero2 = 5;
let numero3 = 2;
let numero4 = 6;




let mensaje = checkPoint7(numero1, numero2, numero3, numero4);
console.log(mensaje);
