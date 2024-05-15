import escapeRoomModel from "./escapeRoomModel.js";
import quizzModel from "./quizzModel.js";

let escapeRooms = [];    // array de objetos
let quizzRoom1 = []      // array de objetos do quizz

export function init() {
  let room = new escapeRoomModel(1,
              "Licenciatura em Sáude Digital: Descobre a licenciatura",
              "./images/LSD1.JPG",
              "false",
              1);
  escapeRooms.push(room);

  room = new escapeRoomModel(2,
    "Licenciatura em Saúde Digital: o os temas que vais aprender!",
    "./images/LSD2.JPG",
    "true",
    2);
  escapeRooms.push(room)

  room = new escapeRoomModel(3,
    "Saúde Digital: Tendências de evolução",
    "./images/LSD3.JPG",
    "true",
    3);
  escapeRooms.push(room)

  room = new escapeRoomModel(4,
    "Saúde Digital: o mercado à tua espera!",
    "./images/LSD4.JPG",
    "true",
    4);
  escapeRooms.push(room)
  return escapeRooms; 

  /*
  let room1 = {
     id: 1,   
     title: "Licenciatura em Sáude Digital: Descobre a licenciatura",
     image : "./images/LSD1.JPG",
     solved: false
   }
  escapeRooms.push(room1);

  let room2 = {
    id: 2,   
    title: "Licenciatura em Saúde Digital: o os temas que vais aprender!",
    image : "./images/LSD2.JPG",
    solved: false
 }
 escapeRooms.push(room2);
   
 let room3 = {
  id: 3,   
  title: "Saúde Digital: Tendências de evolução",
  image : "./images/LSD3.JPG",
  solved: false
}
escapeRooms.push(room3);

let room4 = {
 id: 4,   
 title: "Saúde Digital: o mercado à tua espera!",
 image : "./images/LSD4.JPG",
 solved: false
}
escapeRooms.push(room4);
*/
}

export function initQuizz() {

  let question  = new quizzModel(1,
    "Em que escola funciona a LSD?",
    "Escola Superior de Saúde",
    "Escola de Enfermagem",
    "Escola Superior do Desporto",
    "Escola Superior de Educação",
    "Escola Superior de Saúde");
    quizzRoom1.push(question);

  question  = new quizzModel(2,
    "Quais os exames de acesso?",
      "Biologia e Geologia +  Matemática",
      "Biologia + Matemática",
      "Matemática + Português",
      "Biologia + Português",
      "Biologia e Geologia +  Matemática");
    quizzRoom1.push(question);


  question  = new quizzModel(3,
    "A licenciatura abarca as áreas de:",
    "Saúde e ciências informáticas",
    "Saúde e fisioterapia",
    "Saúde e Osteopatia",
    "Saúde e reabilitação com ciências informáticas",
    "Saúde e reabilitação com ciências informáticas");
  quizzRoom1.push(question);
    
  question  = new quizzModel(4,
    "A licenciatura recorre a tecnologias digitais, imerssivas, IA ou biosensores, para:",
    "Promover o desenvolvimento de aplicações",
    "Desenvolver conteúdos multimédia",
    "Promover a saúde, o tratamento e a reabilitação da doença",
    "Desenvolver competências na ãrea da patologia",
    "Promover a saúde, o tratamento e a reabilitação da doença");
  quizzRoom1.push(question);

  question  = new quizzModel(5,
    "A licenciatura permite-te escolher diversas disciplinas opcionais?",
    "Não",
    "Sim",
    "Apenas se quiseres",
    "Sim, opcionais de outros cursos",
    "Sim");
  quizzRoom1.push(question);
 
  return quizzRoom1
} 




