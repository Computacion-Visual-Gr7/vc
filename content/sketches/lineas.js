var tamano = 200
var width = 720
var height = 440

function setup() {
    createCanvas(730, 450);
}

function draw() {
    background(250);
    dibujarLineas();
    for (var x = 0; x < 25;){
      for (var y = 0; y < height;){
        dibujarCuadro(x,y);
        y += 65;
        x += 25;
        if(y === 195){
          x = 0;
          x += 25;
        }
        else if(y === 260){
          x = -25;
          x += 25;
        }
      }
    }/*  
    dibujarCuadro(0,0);
    dibujarCuadro(25,65);
    dibujarCuadro(50,130);
    dibujarCuadro(25,195);
    dibujarCuadro(0,260);
    dibujarCuadro(25,325);
    dibujarCuadro(50,390);*/
}


function dibujarLineas(){
    var step = 65;
    stroke(126);
    //vertical lines
    for (var x = step; x < width; x = x + step) {
      line(x, 0, x, 65,);
      line(x-40, 65, x-40, 130);
      line(x-15, 130, x-15, 195);
      line(x-40, 195, x-40, 260);
      line(x, 260, x, 325);
      line(x-40, 325, x-40, 390);
      line(x-15, 390, x-15, 455);
    }


    //horizontal lines
    for (var y = step; y < height; y = y + step) {
      line(0, y, width, y);
    }
}

function dibujarCuadro(xincial ,yinicial){
  //squares
  for (var xincial; xincial < width;) {
    fill("black");
    rect(xincial,yinicial,65,65);
    xincial += 130;
  }
}

