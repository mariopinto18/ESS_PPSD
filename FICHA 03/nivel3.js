// FICHA 03 - NIVEL 3

//----------------------------------------------
// EX1
// ---------------------------------------------
/*
function numCities1() {
   console.log(`Nº de cidades recebidas como argumento: ${arguments.length}`) 
}
*/


//-----------------------------------
// EX2
// ----------------------------------
/*
function numCities2(...arguments) {
    let cities = ""
    for (let city of arguments) {
        cities+= city + " "
    }
    console.log(`Cidades recebidas como argumento: ${cities}`) 
}

 
numCities1("Porto", "Madrid", "Barcelona", "Paris", "Londres")
numCities2("Porto", "Madrid", "Barcelona", "Paris", "Londres")
*/


//----------------------------------------
// EX3
//------------------------------------------------

let padindromo = (snumber) => {
    if (snumber[0] == snumber[2]) {
        return true
    }   
    else
    {
        return false
    }
}

do {
    snumber= prompt("Número:")
}
while (snumber.length != 3)
console.log(padindromo(snumber))
