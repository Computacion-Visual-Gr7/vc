let img;

function preload(){ 
  img = loadImage('content\sketches\troxler_main.png'
  );
  } 
function setup() {
  
  createCanvas(494, 361);
  noLoop();
  //image(img, 0, 0);
  //img = loadImage('content\sketches\troxler_main.png'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
}
