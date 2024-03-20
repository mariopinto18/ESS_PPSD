//ler 10 numeros e imprimir o maior e média
let max = -Infinity
let soma=0

for (let i=1; i<11; i++) {   // percorrer o ciclo de 10 números
    numero = +prompt(`Indique o ${i}º número: `)
    soma+=numero            // somar números 
    if (numero > max) {     // determinar o maior deles
        max = numero
    }
}
console.log('MEDIA:', soma/10)
console.log ('MAIOR:', max )
