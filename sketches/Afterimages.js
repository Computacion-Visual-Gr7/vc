function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(220);
    //mapping of mouseX variable and putting in the local       variable'k'.
    let k = map(mouseX, 0, width, 200, 0)
    noStroke()
  
    //Circles colour
    fill(155, 0, 215, k)
  
    //circles
    ellipse(200, 100, 100, 100)
    ellipse(300, 100, 100, 100)
    ellipse(400, 100, 100, 100)
    ellipse(200, 200, 100, 100)
    ellipse(300, 200, 100, 100)
    ellipse(400, 200, 100, 100)
    ellipse(200, 300, 100, 100)
    ellipse(300, 300, 100, 100)
    ellipse(400, 300, 100, 100)
  
    //Point
    fill(255, 255, 255)
    ellipse(160, 250, 5, 5)
  
  }
