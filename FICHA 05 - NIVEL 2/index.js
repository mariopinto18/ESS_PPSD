
let leiturasList = []

/**
 * Submit event listener
 */
document.querySelector('#idForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let CT  = document.getElementById('txtColesterol').value
    let HDL = document.getElementById('txtHDL').value
    let TG = document.getElementById('txtTG').value
    let LDL = calcValueLDL(CT,HDL, TG )
    document.getElementById('txtLDL').value =  LDL
    addLeitura(CT, HDL, TG, LDL)
    renderTable(leiturasList)
       
})


// calcula LDL
function  calcValueLDL(CT, HDL, TG) {
    let LDL = CT - HDL - 0.2*TG
    return LDL
}


// Adiciona a leitrura ao array 
function addLeitura(CT, HDL, TG, LDL){
    let riscoCoronario=""
    if (LDL < 70) {
        riscoCoronario = "Alto Risco Coronário"
    }
    else if (LDL < 100 ) {
        riscoCoronario = "Risco Coronário Médio"
    }
    else if (LDL < 115) {
        riscoCoronario = "Baixo Risco Coronário"
    }
    else{
        riscoCoronario = "Sem Risco Coronário"
    }

    let objectLeitura = {
        valorCT: CT,
        valorHDL: HDL,
        valorTG: TG,
        valorLDL: LDL,
        descRiscoC: riscoCoronario
    }
    leiturasList.push(objectLeitura)
}

/**
 * Render a table with all OR filtered tasks
 * @param {string} title name of the task
 * @param {string} category category of the task
 */
function renderTable(leiturasList) {
    const table = document.querySelector('table')       // specify table column width , class = col-x
    table.innerHTML = `
    <tr>
        <td>Colesterol</td>
        <td>HDL</td>
        <td>Triglicerídeos</td>
        <td>LDL</td>
        <td>Risco Cardiovascular</td>
       
    </tr>`;
   
      
    for (let leitura of leiturasList) {
        table.innerHTML+= `
        <tr>
            <td>${leitura.valorCT}</td>
            <td>${leitura.valorHDL}</td>
            <td>${leitura.valorTG}</td>
            <td>${leitura.valorLDL}</td>
            <td>${leitura.descRiscoC}</td>
        </tr> `;    
    }   

}   // renderTable



//----------------------------------
// FLTRAR
//----------------------------------
/**
 * Filter event listener
 */
document.querySelector('#btnFilter').addEventListener('click', function () {
    let txtFilter = document.getElementById('seletorFilter').value
    filteredList = []
    if (txtFilter == "Todos os registos") {
        filteredList = leiturasList
    }
    else
    {
        filteredList = leiturasList.filter(elem => elem.descRiscoC == txtFilter)
    }
    renderTable(filteredList)
})

//----------------------------------
// ORDENAR POR RISCO: Ordenado por valorLDL, que é o indicador que determina o risco coronário
//----------------------------------
document.querySelector('#btnOrder').addEventListener('click', function () {
    leiturasList.sort((a,b) => (a.valorLDL > b.valorLDL) ? 1: -1)
    renderTable(leiturasList)
})



