//const = é uma variável que não ter o seu valor alterado.

const PI = 3.14159;
let raio;
let circuferencia;

raio = window.prompt("Digite o tamanho do raio da circuferência");
raio = Number(raio);

circuferencia = 2 * PI * raio;
console.log("A circuferência é: ", circuferencia);
