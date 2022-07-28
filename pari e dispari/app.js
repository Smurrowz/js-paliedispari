// mi prendo i dati dall'html
const playButton = document.getElementById('play-button')
const oddOrEvenElement = document.getElementById('odd-even')
const userPickElement = document.getElementById('number')
const imgWin = document.getElementById('win')
const imgLoss = document.getElementById('loss')
let pcPick

playButton.addEventListener('click', function (){


  // vado a recuperare i valori delle scelte del player
  const userPick = parseInt(userPickElement.value)
  const oddOrEven = oddOrEvenElement.value


  // scrivo le scelte del player
  console.log("il giocatore ha scelto: " + oddOrEven)
  console.log("il giocatore ha scelto: " + userPick)


  // genero un numero per il pc
  pcPick = pickGenerator()
  console.log("il computer gioca " +  pcPick)


  // calcolo la somma del numero scelto dall'utente e dal pc
  const somma = pcPick + userPick
  console.log("la somma é: " + somma)


  // stampo il risultato in base alle scelte del player e al numero generato
  if(oddOrEven === "even" && isEven(somma)){
    // se il giocatore ha scelto pari e la somma e' pari
    console.log(" il giocatore ha scelto pari, il risultato é pari e quindi ha vinto")
    imgLoss.classList.remove('active')
    imgWin.classList.add('active')
  }else if(oddOrEven === "odd" && !isEven(somma)){
    // se il giocatore ha scelto dispari e la somma e' dispari
    console.log(" il giocatore ha scelto dispari, il risultato é dispari e quindi ha vinto")
    imgLoss.classList.remove('active')
    imgWin.classList.add('active')
  }else{
    // se il giocatore perde
    console.log(" il computer vince")
    imgWin.classList.remove('active')
    imgLoss.classList.add('active')
  }
})





// funzione per verificare se un numero sia pari
function isEven(num) {
  return num % 2 === 0
}
// funzione per generare un numero da 1 a 5
function pickGenerator(){
  const n = Math.floor(Math.random() * 5) + 1
  return n
}

