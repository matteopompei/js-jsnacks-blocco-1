/*

  Fai inserire un numero, che chiameremo N, all’utente.
  Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
  Ogni volta che ne crei uno, stampalo a schermo.

*/

let n = prompt("Inserisci un numero");

for (let i = 0; i < n; i++) {
  let myArray = [4, 8, 15, 16, 23, 42];
  document.writeln("<h1>" + myArray + "</h1>");
}