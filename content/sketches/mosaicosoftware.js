/***************************************************************************************
* p5.quadrille.js
* Copyright (c) 2021 Universidad Nacional de Colombia
* @author Jean Pierre Charalambos, https://github.com/objetos/p5.quadrille.js/
* Released under the terms of the GPLv3, refer to: http://www.gnu.org/licenses/gpl.html
*
* John Horton Conway called it a quadrille.
***************************************************************************************/

let res;
let imagenes=[];
let setLuma=[];
var mosaico;


function preload(){
  var img;
  for(var i=1;i<=10;i++){
    img = loadImage('/vc/sketches/shaders/imagenesmosaico/'+i+'.jpg');
    imagenes.push(img);
  }
  mosaico = loadImage("/vc/sketches/shaders/imagenesmosaico/"+int(random(10))+".jpg");
}

function setup(){
  createCanvas(610,610);
  
  res=createSlider(1,16,4);
  res.position(10,50);
  res.style('width','80px');
  
  quadrille = createQuadrille(imagenes);
  quadrille.sort();
  
  for (var j = 0;j<10;j++){
    var imgLuma = getLuma(quadrille.read(0,j));
    setLuma.push(imgLuma);
  }
}

function getLuma(reduced){
  reduced.loadPixels();
  var avgluma=0;
  
  for(var index=0;index<reduced.pixels.length;index+=4){
      let r = reduced.pixels[index+0];
      let g = reduced.pixels[index+1];
      let b = reduced.pixels[index+2];
      var luma = r + g + b;
      avgluma +=luma;
    }
  avgluma = avgluma/(reduced.pixels.length/4);
  return avgluma;
}


function draw() {
  mosaicQuadrille = createQuadrille(10*res.value(),mosaico);

  for(var x=0;x<10*res.value();x++){
    for(var y=0;y<mosaicQuadrille.size/(10*res.value());y++){
      var a = mosaicQuadrille.read(y,x)[0] + mosaicQuadrille.read(y,x)[1] + mosaicQuadrille.read(y,x)[2];
      var c = setLuma.reduce(function(prev, curr) {
        return (Math.abs(curr - a) < Math.abs(prev - a) ? curr : prev);
      });
      var cell = setLuma.indexOf(c);
      mosaicQuadrille.fill(y,x,imagenes[cell]);
    }
  }
  drawQuadrille(mosaicQuadrille, {cellLength: 40 / res.value(), outlineWeight: 1.6 / res.value(), outline: color(255)});
  image(mosaico,400,0,mosaico.width/10,mosaico.height/10);
}

