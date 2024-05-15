
/**
 * Classe que modela um EscapeRoom
 */
export default class escapeRoom {
    id = "";
    title = ""
    image = "";
    disabled = "";
    level =0;
  
  
    constructor(id, title, image, disabled, level) {
      this.id = id;
      this.title = title;
      this.image = image;
      this.disabled = disabled;
      this.level= level;
    }
  
    
  }  // class
  