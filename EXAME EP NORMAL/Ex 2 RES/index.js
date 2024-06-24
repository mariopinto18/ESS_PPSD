// Importa modulo dados.js
import * as data from "./init.js";

// declara array de films, que vai conter todos os objetos objectFilms
let films = []
// invoca função data (módulo dados.js) para preencher automaticamente array de objetos
films = data.init();
renderTable(films);   // preenche a tabela com o array de films


const currentYear = new Date().getFullYear()  // ano atual
//Definir o atributo max da caixa de texto do ano com o ano atual
document.querySelector("#txtYear").max = currentYear;


//---------------------- submissão fo form --------------------------------------
const form = document.querySelector("#frmFilm")
form.addEventListener('submit', function(event) {   // clicar ano botão submit dof formulário

    const txtFilm = document.querySelector("#txtFilm").value
    if (films.some(item => item.title == txtFilm)) {   // verify if film exists in the objects array 
        alert('O filme já existe!')
    }
    else {
        addFilm()       // add to the array
        renderTable(films)   // rendering table in html page
        form.reset()
      
    }

    // form Prevenir que o form seja submetido ao servidor
    event.preventDefault()

    })
    

//------------------------------------------------------------------
function addFilm() {

    const txtFilm = document.querySelector("#txtFilm").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtYear = document.querySelector("#txtYear").value

    const objFilm = {
        title:txtFilm,
        genre:sltGenre,
        year:txtYear
    }
    films.push(objFilm)
}


// ---------- renderizar o array de objetos films na tabela
function renderTable(films) {
    const table = document.querySelector('table')
      // Injetar o cabeçalho na tabela
      table.innerHTML = `
      <tr >
            <th>Título Filme</th>
            <th>Género</th>
            <th>Ano</th>
        </tr>
  `;
  // percorrer o array de objetos films, para rebderizar na table
    for (let film of films) {
        table.innerHTML+= ` <tr class = 'filmRow'>
                               <td>${film.title}</td>
                                <td>${film.genre}</td>
                                 <td>${film.year}</td>
                            </tr>`      

    }
}



//----------------------------- Buttons ---------------------------
// ------------------ Filtrar filmes ------------------------------
 document.getElementById('btnFilter').addEventListener('click', function(event) {

    let seletor = document.getElementById('sltFilter').value
    if (seletor == "Todos") {
        renderTable(films)
    }
    else
    {
        const filmsFiltered = films.filter(item => item.genre == seletor)
        renderTable(filmsFiltered)
    }
    
 }
) 

// ----------- Nº de Filmes -----------------------------
document.getElementById('btnNumber').addEventListener('click', function(event) {
    alert(`Número de filmes : ${films.length}`) 
}
)

// -------------- Ordenar por título
document.getElementById('btnOrderTitle').addEventListener('click', function(event) {
    films.sort((a,b) => (a.title > b.title) ? 1: -1) 
    renderTable(films)
})

// -------------- Ordenar por ano desc
document.getElementById('btnOrderYear').addEventListener('click', function(event) {
    films.sort((a,b) => (a.year > b.year) ? 1: -1) 
    films.reverse()
    renderTable(films)
})









