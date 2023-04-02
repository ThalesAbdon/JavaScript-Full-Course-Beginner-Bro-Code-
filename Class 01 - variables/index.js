//Variavel é um espaço que armazena dados.

let firstName = "Thales"; //string
let age = 26; // number
let student = true; //boolean

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Student:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Student: " + student;
