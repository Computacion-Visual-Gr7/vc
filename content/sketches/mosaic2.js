let imageCells;
let Cells;
let pg;
let mosaic;
let video_src;
let debug;
let cols;
// ui
let resolution;
let sel;
let video_on;
let p;
let image_src;
const SAMPLE_RES = 30;
let pal;
let imgpal;
function handleFile2(file) {
  
  if (file.type === 'image') {
    pal=loadImage(file.data, mododesortp);
  } else {
    pal = null;
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    //console.log(img.value());
  } else {
    img = null;
  }
  image_src=loadImage(file.data);
  mosaic.setUniform('source', image_src);
}

function preload() {
  video_src = createVideo(['/vc/sketches/mandrill.webm']);
  video_src.hide();
  mosaic = readShader('/vc/sketches/shaders/photomosaic.frag');
  image_src = loadImage('/vc/sketches/mandrill.png');
  imgpal=loadImage(`/vc/sketches/shaders/imagenesmosaico/photo.png`);
  p = [];
  for (let i = 1; i <= 10; i++) {
    p.push(loadImage(`/vc/sketches/shaders/imagenesmosaico_2/${i}.jpg`));
  }
  input = createFileInput(handleFile);
  input.position(10, 30);
  pal=[];
  inputb = createFileInput(handleFile2);
  inputb.position(10, 60);
}

function setup() {
  createCanvas(650, 650, WEBGL);
  colorMode(RGB, 1);
  imageCells = createQuadrille(p);
  textureMode(NORMAL);
  noStroke();
  shader(mosaic);
  mosaic.setUniform('avg', false);
  video_on = createCheckbox('video', false);
  video_on.style('color', 'magenta');
  video_on.changed(() => {
    if (video_on.checked()) {
      mosaic.setUniform('source', video_src);
      video_src.loop();
    } else {
      mosaic.setUniform('source', image_src);
      video_src.pause();
    }
  });
  video_on.position(10, 80);
  mosaic.setUniform('source', image_src);
  resolution = createSlider(1, 150, 50, 1);
  resolution.position(10, 10);
  resolution.style('width', '80px');
  resolution.input(() => { mosaic.setUniform('resolution', resolution.value()) });
  mosaic.setUniform('resolution', resolution.value());
  pg = createGraphics(SAMPLE_RES * imageCells.width, SAMPLE_RES);
  mosaic.setUniform('cols', imageCells.width);
  mododesort();
}

function mododesort() {
  /*if(sel.value() === 'Luma(default'){
    imageCells.sort({ mode:'LUMA',ascending: true, cellLength: SAMPLE_RES });
  }else{
    if(sel.value() === 'AVG'){
      imageCells.sort({ mode:'AVG',ascending: true, cellLength: SAMPLE_RES });
      mosaic.setUniform('avg', true);
    }
    else{
      imageCells.sort({ mode:'DISTANCE',ascending: true, cellLength: SAMPLE_RES });
      }
  }*/
  drawQuadrille(imageCells, { graphics: pg, cellLength: SAMPLE_RES, outlineWeight: 0 });
  mosaic.setUniform('palette', pg);
}


function mododesortp() {
    console.log(pal.width)
    Cells = createQuadrille(pal);
    pg = createGraphics(pal.width, SAMPLE_RES);
    console.log(pal.width/SAMPLE_RES);
    mosaic.setUniform('cols', pal.width/SAMPLE_RES);
    /*if(sel.value() === 'Luma(default'){
      Cells.sort({ mode:'LUMA',ascending: true, cellLength: SAMPLE_RES });
    }else{
      if(sel.value() === 'AVG'){
        Cells.sort({ mode:'AVG',ascending: true, cellLength: SAMPLE_RES });
        mosaic.setUniform('avg', true);
      }
      else{
        Cells.sort({ mode:'DISTANCE',ascending: true, cellLength: SAMPLE_RES });
        }
    }*/
    //imageCells.sort({ ascending: true, cellLength: SAMPLE_RES });
    //drawQuadrille(Cells, { graphics: pg, cellLength: SAMPLE_RES, outlineWeight: 0 });
    mosaic.setUniform('palette', pal);
  }

function draw() {
  cover({ texture: true });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}