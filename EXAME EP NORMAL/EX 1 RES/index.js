
let contador =0

let celulas = document.querySelectorAll("td")   // todas as celulas 
//let tabela = document.getElementsByClassName("table")


celulas.forEach(element => {

    element.addEventListener('click', function() {
        let numero = parseInt(1+Math.random()*9)
        element.innerHTML = numero
        contador++
        testarTabela() 
    })
    
});


function testarTabela() {
    let total=0
    for (let celula of celulas) {
        total+=parseInt(celula.innerHTML)
    }

    if (total >=35) {
        document.getElementById("table1").style.backgroundColor="cyan";
        document.getElementById("modalContent").innerHTML = `Parabéns! Atingiu os 35 pontos com ${contador} cliques`
        $("#myModal").modal('show')
   }
}

function reiniciar() {
  
    const table = document.querySelector('table')
  
    table.innerHTML = `
        <table id = "table1" class = "table table-bordered center">
            <tr class = "data" >
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr class = "data">
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr class = "data">
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        </table>`;

}

document.getElementById("btnInicio").addEventListener('click', function() {
    reiniciar();
    contador =0
    celulas = document.querySelectorAll("td")   // todas as celulas 
})