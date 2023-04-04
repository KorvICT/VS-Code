var die1Img;
var die2Img;
var die3Img;
var die4Img;

function start(){
    die1Img = document.getElementById('die1');
    die2Img = document.getElementById('die2');
    die3Img = document.getElementById('die3');
    die4Img = document.getElementById('die4');

    var button = document.getElementById('roller');
    button.addEventListener("click", roller, false);
}

function roller(){
    setImage(die1Img);
    setImage(die2Img);
    setImage(die3Img);
    setImage(die4Img);
}

function setImage(dieImg){
      var dieValue = Math.floor(Math.random() * 6 + 1);
      dieImg.setAttribute("src", "dice/die" + dieValue + ".png");
      dieImg.setAttribute("alt", "Die w/ value " + dieValue);
}

 window.addEventListener("load", start, false);