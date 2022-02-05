let img;
let imgaux;
let resolution;
let s;  
let w;
let h;
let p;
let brillo;
let prom;
function preload(){
    img=loadImage('/vc/sketches/mandrill.png');
    p = [];
  for (let i = 1; i <= 2; i++) {
    imgaux=loadImage(`/vc/sketches/shaders/imagenesmosaico/${i}.jpg`)
    p.push(imgaux);
  }
}
function setup(){
    createCanvas(512, 512);
    colorMode(RGB);
    resolution = createSlider(10, 100, 20, 1);
    resolution.position(10, 10);
    resolution.style('width', '80px');
}

function draw(){
    background(0);
    w=img.width/resolution.value();
    h=img.height/resolution.value();
    s=createImage(w,h,RGB);
    s.copy(img,0,0,img.width,img.height,0,0,w,h);
    for(let i=0;i<w;i++){
        for(let j=0;j<h;j++){
            colb=s.get(i,j);
            noStroke();
            fill((colb));
            rect(i*resolution.value(),j*resolution.value(),resolution.value(),resolution.value());
        }
    }
}