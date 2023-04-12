/*
Conversão de tipos = mudar o datatype de um valor para outro.
Exemplos: string para number, number para boolean...


let idade = window.prompt("Qual sua idade?");
console.log(typeof idade);
idade = Number(idade);
console.log(typeof idade);
idade += 1;
console.log("Feliz aniversário!! você tem:", idade);
*/

let x;
let y;
let z;

x = Number("pizza"); // Not a Number
y = String(3.14); // String
z = Boolean("pizza"); // true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
