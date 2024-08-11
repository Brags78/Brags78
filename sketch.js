function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("orange");
    
    console.log("See You Again".length)
      if(mouseX < 20) {
        let palavra = "";
        text(palavra, 200, 200);
      } else if(mouseX < 40) {
        let palavra = "S";
        text(palavra, 200, 200);
      } else if(mouseX < 60) {
        let palavra = "Se";
        text(palavra, 200, 200);
      } else if(mouseX < 80) {
        let palavra = "See";
        text(palavra, 200, 200);
      } else if(mouseX < 100) {
        let palavra = "See ";
        text(palavra, 200, 200);
      } else if(mouseX < 120) {
        let palavra = "See Y";
        text(palavra, 200, 200);
      } else if(mouseX < 140) {
        let palavra = "See Yo";
        text(palavra, 200, 200);
      } else if(mouseX < 160) {
        let palavra = "See You";
        text(palavra, 200, 200);
      } else if(mouseX < 180) {
        let palavra = "See You ";
        text(palavra, 200, 200);
      } else if(mouseX < 200) {
        let palavra = "See You A";
        text(palavra, 200, 200);
      } else if(mouseX < 220) {
        let palavra = "See You Ag";
        text(palavra, 200, 200);
      } else if(mouseX < 240) {
        let palavra = "See You Aga";
        text(palavra, 200, 200);
      } else if(mouseX < 260) {
        let palavra = "See You Agai";
        text(palavra, 200, 200);
      } else if(mouseX < 280) {
        let palavra = "See You Again";
        text(palavra, 200, 200);
      } else if(mouseX > 300) {
        let palavra = "See You Again";
        text(palavra, 200, 200);
      } 
  
    textSize(50);
    textAlign(CENTER, CENTER);
  
  }