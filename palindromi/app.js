const parola = prompt("inserisci una parola")
console.log(parola)


function isPalindrome(word){
  const wordSplit = word.split('')
  console.log(wordSplit)

  const reverseWord = invertArray(wordSplit)
  console.log(reverseWord)

  const areWordsSame = areArraysEqual(wordSplit, reverseWord)
  console.log(areWordsSame)
  
  if(areWordsSame){
    console.log("la parola é palindroma")
  }else{
    console.log(" la parola non é palindroma")
  }

}

isPalindrome(parola)












function areArraysEqual (arr1, arr2) {

	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;

};

function invertArray(array){
  let nuovoArray = []
  for( let i = array.length - 1; i >= 0; i--){
    nuovoArray.push(array[i])
  }
  return nuovoArray
}