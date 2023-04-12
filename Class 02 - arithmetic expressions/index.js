/*
Expressões aritméticas são combinações de: 
operandos (valores,variaveis, etc...)
operadores (+ - * / %)
exemplo:  5 + x - y = 15;
*/

// let number = 331;
// if (number % 2 == 0) {
//   console.log("esse número é PAR");
// } else {
//   console.log("esse número é IMPAR");
//   console.log("POIS SEU RESTO É:" + (number % 2));
// }

// students = students + 1; equivalente a students += 1;
// students = students - 1; equivalente a students -= 1;
// students = students * 2; equivalente a students *= 1;
// students = students / 2; equivalente a students /= 1;

// number % 2; 0,1... 0,1 ... n-1
// number % 7; 0,1,2,3,4,5,6
// number % 13; 0,1,2,3,4,5,6,7,8,9,10,11,12

/*
  PRECEDÊNCIA DE OPERADORES:
  1. Parênteses ()
  2. exponenciação 
  3. multiplicação e divisão
  4. adição e subtração
*/

let result = 1 + 2 * (4 + 5);
console.log(result);
