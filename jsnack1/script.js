/*

  Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
  Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
  la somma degli elementi è minore di 50.

*/

let myArray = []
let i = 0;
let sum = 0;

do {
  let n = parseInt(prompt("Inserisci un numero da inserire nell'array"));
  myArray.push(n);
  sum += myArray[i];
  i++;
}
while (sum < 50);

document.writeln("<h1>" + sum + "</h1>");