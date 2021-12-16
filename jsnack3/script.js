/*

  Crea due tag div con due id diversi:
  un div avrà il testo colorato di rosso mentre l’altro di verde.
  Partendo da un array di numeri, stampiamo nell’id rosso
  i numeri dispari e in verde i numeri pari.

*/

// Div Rosso
let divRed = document.createElement("div");
divRed.setAttribute("id", "red");
divRed.innerHTML = "Emblema";
document.body.appendChild(divRed);

// Div verde
let divGreen = document.createElement("div");
divGreen.setAttribute("id", "green");
divGreen.innerHTML = "Problema";
document.body.appendChild(divGreen);