function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    randomize();
    background(220);
  }
  function drawline(xi,yi,xn,yn){
    xil=20*Math.trunc(xi/20)+10
    xnl=20*Math.trunc(xn/20)+10
    yil=20*Math.trunc((400-yi)/20)+10
    ynl=20*Math.trunc((400-yn)/20)+10
    line(xil,yil,xnl,ynl)
  }
  function drawpoint(x,y){
    fill(255, 204, 0);
    square((x-1)*20,400-((y)*20),20)
  }
  function keyPressed() {
     clear();
      randomize();
    }
  function randomize(){
    push();
    for(i=0;i<=20;i++){
      line(20*i,0,20*i,400)
      line(0,20*i,400,20*i)
    }
    
    let rx = round(random(19));
    rx=rx+1
    let ry = round(random(19));
    ry=ry+1
    xi=rx
    yi=ry
    //console.log(rx)
    //console.log(ry)
    rx = round(random(19));
    rx=rx+1
    ry = round(random(19));
    ry=ry+1
    xn=rx
    yn=ry
    //console.log(rx)
    //console.log(ry)
    if(xn==xi&&yn==yi){
      let rx = round(random(19));
      rx=rx+1
      let ry = round(random(19));
      ry=ry+1
      xi=rx
      yi=ry
      //console.log(rx)
      //console.log(ry)
      rx = round(random(19));
      rx=rx+1
      ry = round(random(19));
      ry=ry+1
      xn=rx
      yn=ry
    }
    if(xn<=xi){
      temp=xi;
      xi=xn;
      xn=temp;
      temp=yi;
      yi=yn;
      yn=temp;
    }
    Dx=xn-xi
    Dy=yn-yi
    console.log(Dx)
    console.log(Dy)  
    m=Dy/Dx
    console.log(m)
    if(m<=1 && m>=0){
      p=(2*Dy)-Dx
      drawpoint(xi,yi)
      ytemp=yi;
      for(k=xi+1;k<=xn;k++){
        if(p<0){
             p=p+2*Dy
           }else{
             p=p+2*(Dy-Dx)
             ytemp=ytemp+1
           }
        drawpoint(k,ytemp)
      }
    }else if(m>1){
      p=(2*Dx)-Dy
      console.log('pendiente mayor')
      drawpoint(xi,yi)
      xtemp=xi;
      for(k=yi+1;k<=yn;k++){
        if(p<0){
             p=p+2*Dx
           }else{
             p=p+2*(Dx-Dy)
             xtemp=xtemp+1
           }
        drawpoint(xtemp,k)
      }
    }else if(m<0){
      Dy=-Dy
      if(m>=-1){
      console.log('pendiente menor')
      p=(2*Dy)-Dx
      drawpoint(xi,yi)
      ytemp=yi;
      for(k=xi+1;k<=xn;k++){
        if(p<0){
             p=p+2*Dy
           }else{
             p=p+2*(Dy-Dx)
             ytemp=ytemp-1
           }
        drawpoint(k,ytemp)
      }
      }else{
      p=(2*Dx)-Dy
      console.log('pendiente menor mayor')
      drawpoint(xi,yi)
      xtemp=xi;
      for(k=yi-1;k>=yn;k--){
        if(p<0){
             p=p+2*Dx
           }else{
             p=p+2*(Dx-Dy)
             xtemp=xtemp+1
           }
        drawpoint(xtemp,k)
      }
      }
    }
    drawline(xi*20-1,yi*20-1,xn*20-1,yn*20-1)
    stroke()
    pop();
  }