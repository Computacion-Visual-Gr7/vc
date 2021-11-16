

function setup() {
    createCanvas(600, 600);
    x=3*width / 4;
    y=3*width / 4;
    p=1;
    a=95;
    b=50;
    c=80;
    control= 1/4;
    controlb= (1/5)//Math.sqrt(2);
    controlc= (1/8)//Math.sqrt(2);
    e=95;
    con=1;
    dx=0.5/4;
    dy=0.8/4;
    paso=1;
  }
  
  function draw() {
    
    background(220);
    fill(255, 165, 0)
    noStroke()
    ellipse(x, y, 50, 50);
    
    if((x%((3*width / 4)+1))!=0){
      x=x+p;
    }else{ 
      p=-p;
      x=x+p;
    }
    if((y%((3*height / 4)+1))!=0){
      y=y+p;
    }else{
      y=y+p;
    }
    limitesup=height / 4
    if(y==limitesup){
      p=-p;
      y=y+p;
    }
    if(x==limitesup){
      x=x+p;
    }
    long=3*height / 4;
    desp=long-limitesup;
    //upper petals
    fill(0,255,127, 255)
    ellipse(x-50, y-80, (x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    
    ellipse(50+x, y-80, (x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    
    
    b=b-controlb;
    if(x-b>=x-10){
      controlb=-controlb;
    }
    if(b>=50){
      controlb=-controlb;
    }
    
    c=c-controlc;
    if(y+c<=y+10){
      
      controlc=-controlc;
    }
    if(c>=80){
      controlc=-controlc;
    }
    
    if(x-50+dx*con >=x-20||x-50+dx*con<=x-50){
      console.log("x-50+dx");
      paso=-paso;
    }
    con=con+paso;
    //lower petals
    //ellipse(x-50+dx*con, y+80-dy*con,(x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    //ellipse(x+50-dx*con, y+80-dy*con,(x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    ellipse(x-50, y+80,(x-limitesup)*(90/desp), (x-limitesup)*(90/desp));
    ellipse(x+50, y+80,(x-limitesup)*(90/desp), (x-limitesup)*(90/desp));
    
    
    //sides petals
    //ellipse(x-a, y, (x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    //ellipse(x+a, y, (x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    ellipse(x-95, y, (x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    ellipse(x+95, y, (x-limitesup)*(90/desp), (x-limitesup)*(90/desp))
    a=a-control;
    if(x-a>=x-20){
      control=-control;
    }
    if(a>=95){
      control=-control;
    }
    line(0,35,width-35,height);
    line(35,0,width,height-35);
    
    
  }