function showNumber(number) {
  console.log("El número ingresado es" + " " + number);
}

function showTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

function sumar(number1, number2) {
  const resultado = number1 + number2;
  console.log(resultado);
  return resultado;
}

function restar(number1, number2) {
  console.log(number1 - number2);
}

function multiplicar(number1, number2) {
  console.log(number1 * number2);
}

function dividir(number1, number2) {
  console.log(number1 / number2);
}

function calcularPromedio(number1, number2) {
  const total = sumar(number1, number2);

  console.log(total / 2);
}
