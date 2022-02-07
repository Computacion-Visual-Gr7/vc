
let paleta;

function preload() {
  paleta = [];
  for (let i = 1; i <= 10; i++) {
    paleta.push(loadImage(`/vc/sketches/shaders/imagenesmosaico_2/${i}.jpg`));
  }
}

function setup() {
  createCanvas(1000, 100);
  quadrille = createQuadrille(paleta);
  quadrilleor=createQuadrille(paleta);
  sel = createSelect();
  sel.position(10, 125);
  sel.option('Luma(default)');
  sel.option('AVG');
  sel.option('distance');
  sel.option('no sort');
  sel.selected('no sort');
  drawQuadrille(quadrilleor);
}
function draw() {
   sel.changed(() => {
      if(sel.value() === 'Luma(default'){
        quadrille.sort();
        drawQuadrille(quadrille);
      }else{
        if(sel.value() === 'AVG'){
          quadrille.sort({ mode: 'AVG'});
          drawQuadrille(quadrille);
        }
        else{
          if(sel.value() === 'no sort'){
            drawQuadrille(quadrilleor);
          }else{
            quadrille.sort({ mode: 'DISTANCE'});
            drawQuadrille(quadrille);
          }
         
        }
      }
    });
}