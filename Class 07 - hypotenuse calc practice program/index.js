let hipotenusa;
let catetoAdjacente;
let catetoOposto;

// catetoAdjacente = window.prompt("Digite o valor do cateto adjacente");
// catetoAdjacente = Number(catetoAdjacente);

// catetoOposto = window.prompt("Digite o valor do cateto oposto");
// catetoOposto = Number(catetoOposto);

// hipotenusa = Math.pow(catetoAdjacente, 2) + Math.pow(catetoOposto, 2);
// hipotenusa = Math.sqrt(hipotenusa);

// console.log(hipotenusa);

document.getElementById("submitButton").onclick = function () {
  catetoAdjacente = document.getElementById("catetoADTextBox").value;
  catetoAdjacente = Number(catetoAdjacente);

  catetoOposto = document.getElementById("catetoOPTextBox").value;
  catetoOposto = Number(catetoOposto);

  hipotenusa = Math.sqrt(
    Math.pow(catetoAdjacente, 2) + Math.pow(catetoOposto, 2)
  );

  document.getElementById("hipotenusa").innerHTML =
    "A hipotenusa tem valor: " + hipotenusa;
};
