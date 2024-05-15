
/**
 * Classe que modela um Quizz
 */
export default class quizz {
    id = "";
    questao = "";
    resposta1 = "";
    resposta2 = "";
    resposta3 ="";
    resposta4 ="";
    certa = "";
  
    constructor(id, questao, resposta1,resposta2, resposta3, resposta4, certa) {
      this.id = id;
      this.questao = questao;
      this.resposta1 = resposta1;
      this.resposta2 = resposta2;
      this.resposta3= resposta3;
      this.resposta4 = resposta4;
      this.certa = certa;
    }
  
    
  }  // class
  