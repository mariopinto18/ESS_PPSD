// EX 2
limInf = +prompt("Indique o primeiro número:")
limSup = +prompt("Indique o segundo número:")

if (limInf>limSup) {   // caso o limInf seja superior, dev o trocá-los
    let temp = limInf
    limInf= limSup
    limSup = temp
}
let soma=0               // percorrer todos os nº entre limInf e limSup
for (let i=limInf; i<=limSup; i++) {
    soma+=i             // somar os numeros nesse intervalo
}
console.log("Somatório:", soma)

