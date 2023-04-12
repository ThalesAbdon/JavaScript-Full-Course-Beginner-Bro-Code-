// let username = window.prompt("Qual é o seu nome?");
// console.log(username);

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Olá, seu nome é: " + username;
};
