
/**
 * Classe que modela um EscapeRoom
 */
class escapeRoom {
  id = "";
  title = ""
  image = "";
  solved = "false";
  level =0;


  constructor(id, title,image, solved, level) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.solved = solved;
    this.level= level;
  }

  
}  // class





let escapeRooms = [];  // array de objetos

export function init() {
 

  let room1 = {
     id: 1,   
     title: "Licenciatura em TSIW: Descobre a licenciatura",
     image : "./images/TSIW1.JPG",
     solved: false,
     level: 1

   }
  escapeRooms.push(room1);

  let room2 = {
    id: 2,   
    title: "Licenciatura em TSIW: os temas que vais aprender!",
    image : "./images/TSIW2.JPG",
    solved: false,
    level: 2
 }
 escapeRooms.push(room2);
   
 let room3 = {
  id: 3,   
  title: "TSIW e Web: Tendências de evolução",
  image : "./images/TSIW3.JPG",
  solved: false,
  level: 3
}
escapeRooms.push(room3);

let room4 = {
 id: 4,   
 title: "TSIW e WEB: o mercado à tua espera!",
 image : "./images/TSIW4.JPG",
 solved: false,
 level: 4
}
escapeRooms.push(room4);

return escapeRooms; 

}






