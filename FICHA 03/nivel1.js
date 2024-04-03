//FICHA 03 - STRINGS

// -------------------------------------------
 // EX1
 // -------------------------------------------
 /*
function showStates() {
   let text = prompt("Texto: ")
   let spaces =0

   for (let i=0; i< text.length; i++) {   //percorrer TODAS as posições /caracteres do texto
    if (text[i] == ' ')    // SE caracter é um espaço
        spaces++            // soma o contador
   }
    console.log(`O texto inclui ${text.length} caracteres e ${spaces+1} palavras `)
}
showStates()
*/

//--------------------------------------
// EX 2
//--------------------------------------
/* 
function verifyCapicua(word) {

    let reverseWord = ''
    for (let i = word.length-1;i >=0; i--) {
        reverseWord+= word[i]
    }
    if (word == reverseWord) {
        alert(`a palavra ${word} é capicua!`)
    }
    else {
        alert(`a palavra ${word} não é capicua!`)
    }
}

verifyCapicua('asa')
verifyCapicua('teste')
verifyCapicua('osso')
*/
//-----------------------------------------------
/* EX3 e EX4 */
// ----------------------------------------------
/*
function showShortName(completeName) {
    if (completeName.includes(" ") == false) {
        return
    }
    let pos1 = completeName.indexOf(" ")
    let pos2 = completeName.lastIndexOf(" ")
    //let nomeAbr= completeName.slice(0,pos1+1) + completeName.slice(pos2, completeName.completeName)
    let nomeAbr= completeName.slice(pos2+1, completeName.length) + ", " + completeName.slice(0,pos1+1)
    console.log(nomeAbr)

}

showShortName('Carlos Manuel Cardoso Pereira')
showShortName('Carla Maria Andrade')

*/


