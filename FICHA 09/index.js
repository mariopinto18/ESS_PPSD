// Importa modulo data.js
import * as data from "./data.js";

// declara array employees
let rooms = []
let quizzRoom1= []
let pontos = 0
// invoca função data (módulo data.js) para preencher automaticamente array de objetos
rooms = data.init();   // carrega os escaperooms
quizzRoom1= data.initQuizz();   // carrega as perguntas do quizz 1

renderCatalog(rooms);




// EXIBIR O CATÁLOGO DE CARDS  com os objetos Dog
function renderCatalog() {
    let result = "";
    // percorre todas as instancias de escapeRooms
    for (const room of rooms) {
        result += generateCard(room);    
    }
    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    document.querySelector("#myCatalog").innerHTML = result;


    // CLICAR NO BOTÃO JOGAR ESCAPE ROOM
    const btnsEscapeRoom = document.getElementsByClassName("view");
    for (const button of btnsEscapeRoom) {
        button.addEventListener("click", () => {
            renderQuizz(quizzRoom1);
          //  $("#modalAdivinha").modal('show');
        });
    }
}

// GERAR CARD de cada Escape Room
function generateCard(room) {
let result = ` 
      <div class="col">
          <div class="card  bg-light mb-3" style="widht: 300px; ">
              <img src="${room.image}" class="card-img-top" style="height: 300px;">
              <div class="card-body">
                  <h5 class="card-title">${room.title}</h5>
                  <p class="card-text">LEVEL: ${room.level}</p>
                  <button id="${room.id}"  class="btn btn-warning view">Jogar Escape Room</button>
              </div>    
          </div>
      </div>
      `;

return result;
}


// Fazer um Quizz do Escape Room
function renderQuizz(quizzRoom1) {
   
 $("#modalquizz").modal('show');

  renderNewQuestion(quizzRoom1)
  document.querySelector("#seguinte").addEventListener('click', function() {
     renderNewQuestion(quizzRoom1)    // NOVA QUESTÃO
  })

  document.querySelector("#close").addEventListener('click', function() {
    alert(pontos)
    $("#modalquizz").modal('show');   // FECHA MODAL
 })
}


function renderNewQuestion(quizzRoom1) {

    let num = parseInt(1+ Math.random()*5)

    document.getElementById('question').innerHTML = quizzRoom1[num].questao;
    document.querySelector('#resp1').innerHTML    = quizzRoom1[num].resposta1; 
    document.querySelector('#resp2').innerHTML    = quizzRoom1[num].resposta2; 
    document.querySelector('#resp3').innerHTML    = quizzRoom1[num].resposta3; 
    document.querySelector('#resp4').innerHTML    = quizzRoom1[num].resposta4;

    document.querySelector('#resp1').addEventListener('click', () => {
        testarResposta(quizzRoom1[num].resposta1,quizzRoom1[num].certa);
         return;
    })

    document.querySelector('#resp2').addEventListener('click', () => {
        testarResposta(quizzRoom1[num].resposta2,quizzRoom1[num].certa);
        return;

    })
    document.querySelector('#resp3').addEventListener('click', () => {
        testarResposta(quizzRoom1[num].resposta3,quizzRoom1[num].certa);
        return;

    })
    document.querySelector('#resp4').addEventListener('click', () => {
        testarResposta(quizzRoom1[num].resposta4,quizzRoom1[num].certa);
        return;

    })

}

function testarResposta(escolha, certa) {
    if (escolha == certa) {
        pontos+=1 
    }
   
}





