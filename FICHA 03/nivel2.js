// FICHA 03 - NIVEL 2

//----------------------------------------------
// EX1
// ---------------------------------------------
/*
function nameNormalized(completeName) {
    if (completeName.includes(" ") == false) {
        return null
    }
    let pos1 = completeName.indexOf(" ")
    if (pos1 == null) return null

    let pos2 = completeName.lastIndexOf(" ")
    if (pos2 == null) return null

    let nameInitials = completeName.slice(0,pos1+1) // primeiro nome
    for (let i= pos1; i< pos2; i++) {
        if (completeName[i] == " ")
            nameInitials+= completeName[i+1]+ '. '
    }
    
    nameInitials+=  completeName.slice(pos2+1, completeName.length)  // Ultimo nome
    return nameInitials

}

console.log(nameNormalized('Carla Maria Antunes'))
console.log(nameNormalized('Carlos Alberto Costa Pereira'))
*/

//-------------------------------------------------------
// EX2
//--------------------------------------------------------~/*
/*
function numberOccur(text, textFind) {
 
    let cont =0
    let position= 0
    let pos = text.indexOf(textFind, 0)
    while  (pos!= -1) {
        cont++
        position= pos+1
        pos= text.indexOf(textFind, position)
    }
    return cont
}


let text = prompt("Insira um texto: ")
let textFind = prompt("Indique uma palavra para pesquisa no texto: ")
let number = numberOccur(text, textFind)
alert(`Nº de ocorrências: ${number}`)
*/

//-------------------------------------------------
// EX 3
// ------------------------------------------------
function showInverse(text) {

    inverseText = ""
  /*
    let pos = text.lastIndexOf(" ")
    while  (pos!= -1) {
        inverseText+= text.slice(pos+1) + " "
        text = text.slice(0, pos)
        pos = text.lastIndexOf(" ")
    }
    inverseText+= text.slice(0) 
    alert(inverseText)
   */
    let words = text.split(" ")
    for (let word of words) {
        inverseText= word + " " + inverseText
    }
    alert(inverseText)
}

text= prompt("Indique um texto:")
showInverse(text)