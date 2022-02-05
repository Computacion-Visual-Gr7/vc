let paleta;
let Cells;
SAMPLE_RES=30;
function handleFile(file) {
    print(file);
    if (file.type === 'image') {
      img=loadImage(file.data,create);
      //console.log(paleta);
    } else {
      img = null;
    }
  }
function create(){
    paleta.push(img);
    Cells = createQuadrille(paleta);
    drawQuadrille(Cells);
}
function preload() {
  paleta = [];
  input = createFileInput(handleFile);
  input.position(300, 125);
}

function setup() {
  createCanvas(1000, 100);
  sel = createSelect();
  sel.position(10, 125);
  sel.option('LUMA');
  sel.option('AVG');
  sel.option('DISTANCE');
  sel.option('seleccione el tipo de sort');
  sel.selected('seleccione el tipo de sort');
  //drawQuadrille(Cells);
  button = createButton('descargar paleta');
  button.position(700, 125);
  button.mousePressed(changeBG);
  sel.changed(() => {
    if(sel.value() === 'LUMA'){
        console.log('luma');
      Cells.sort();
      drawQuadrille(Cells);
    }else{
      if(sel.value() === 'AVG'){
        console.log('avg');
        Cells.sort({ mode: 'AVG'});
        drawQuadrille(Cells);
      }
      else{
        if(sel.value() === 'DISTANCE'){
            console.log('distance');
          Cells.sort({ mode: 'DISTANCE'});
          drawQuadrille(Cells);
        }else{
          drawQuadrille(Cells);
        }
       
      }
    }
  });
}
function changeBG() {
    pg = createGraphics(SAMPLE_RES * Cells.width, SAMPLE_RES);
    drawQuadrille(Cells, { graphics: pg, cellLength: SAMPLE_RES, outlineWeight: 0 });
    s=createImage(pg.width,pg.height,RGB);
    s.copy(pg,0,0,pg.width,pg.height,0,0,pg.width,pg.height);
    s.save('photo', 'png');
  }

function draw() {
   
}



    